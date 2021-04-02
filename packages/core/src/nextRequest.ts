import axios, { AxiosRequestConfig, Method, AxiosResponse } from 'axios';
import { getToken, setToken } from './authority';
import { newGuid } from './utils';
import { encrypt, decrypt, encryptKey } from './crypto';
import { CryptoType, IKeyValue } from './core';

export type IRequestOption = {
  /**
   * Whether the operation is successful
   */
  successTip?: boolean;
  errorTip?: boolean;
  fullTip?: boolean;
  hasParam?: boolean;
  hasParamData?: boolean;
  hasPassByParam?: boolean;
  debug?: boolean;
  hasDfHandleErr?: boolean;
  /**
   * Request method
   */
  method?: Method;
  /**
   * Encrypted transmission method
   */
  crypto?: CryptoType;
} & AxiosRequestConfig;

/**
 * function alert/redirect/log message base on err/succ
 * @param configMsg
 */
// export const handlerFunc = (configMsg: { msg?: string; isErr?: boolean } & IRequestOption) => {
//   const { errorTip, fullTip, msg, isErr, debug, method } = configMsg || {};
//   const showTips = errorTip ? message.success : message.error;
//   const showFullTip = fullTip && isErr ? message.error : message.success;

//   const showMsg =
//     (typeof msg === 'string' && msg) ||
//     (isErr ? 'something went wrong. please try gain!' : 'successfully!');

//   if (debug) {
//     console.log(`debug ${isErr ? 'err' : 'succ'}`, configMsg);
//   }

//   if (fullTip && method !== 'get') {
//     return showFullTip(showMsg);
//   }
//   return showTips(showMsg);
// };

// eslint-disable-next-line
let instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // timeout: 6000,
  timeoutErrorMessage: 'Request timed out, please try again!',
});

/**
 * Modify axios instance
 * @param config configuration
 */
export const configInstance = (config: AxiosRequestConfig) => {
  instance = axios.create(config);
};

/**
 * Header set globally
 */
// eslint-disable-next-line import/no-mutable-exports
let globalHeaders: () => IKeyValue<string>;

export const configGlobalHeader = (func: () => IKeyValue<string>) => {
  globalHeaders = func;
};

/**
 * Global setting refresh token request
 */
let refreshToken: () => Promise<any> = () => {
  return Promise.reject(new Error('refreshToken has not been initialized'));
};

export const configRefreshToken = (func: () => Promise<any>) => {
  refreshToken = func;
};

/**
 * Universal request interceptor
 */
const commonRequestInterceptor = [
  (option: any) => {
    const config: IRequestOption = option as IRequestOption;

    const tokenStore = getToken();

    if (tokenStore && tokenStore.token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${tokenStore.token}`,
      };
    }

    if (config.crypto) {
      config['cryptoKey'] = newGuid();
      if (config.crypto === CryptoType.In || config.crypto === CryptoType.Both) {
        config.data = encrypt(config.data, config['cryptoKey']);
      }
      config.headers = {
        ...config.headers,
        Triple_DES_Key: encryptKey(config['cryptoKey']),
      };
    }

    // Globally set request header
    if (globalHeaders) {
      const otherHeaders = globalHeaders();
      if (otherHeaders) {
        config.headers = {
          ...config.headers,
          ...otherHeaders,
        };
      }
    }

    return config;
  },
];

/**
 * General response interception, interception of abnormal information (non-status code between 200-302), unauthorized, etc.
 */
const commonResponseInterceptor = [
  (response: AxiosResponse): any => {
    const { data, config } = response || {};
    const requestConfig = config as IRequestOption;
    if (requestConfig.responseType && requestConfig.responseType.toLowerCase() === 'arraybuffer') {
      return Promise.resolve(data);
    }

    //* handle succ message
    // handlerFunc({ ...config, data, isErr: false });

    if (requestConfig.crypto === CryptoType.Out || requestConfig.crypto === CryptoType.Both) {
      if (typeof data === 'string') {
        const decryptData = decrypt(data, config['cryptoKey']);
        return Promise.resolve(JSON.parse(decryptData));
      }
    }
    return Promise.resolve(data);
  },
  ({ response }: { response: AxiosResponse }) => {
    //* handle succ message
    // handlerFunc({ ...response, isErr: true });
    return Promise.reject(response);
  },
];

// Is the flag being refreshed
let isRefreshing = false;
// Retry the queue, each item will be a function to be executed
let requests: Function[] = [];

/**
 * General response interception, interception of abnormal information (non-status code between 200-302), unauthorized, etc.
 */
const commonResponseWithRefreshTokenInterceptor = [
  (response: AxiosResponse): any => {
    const { data, config } = response;
    console.log('ffs', data);

    const requestConfig = config as IRequestOption;
    if (requestConfig.responseType && requestConfig.responseType.toLowerCase() === 'arraybuffer') {
      return Promise.resolve(data);
    }

    if (requestConfig.crypto === CryptoType.Out || requestConfig.crypto === CryptoType.Both) {
      if (typeof data === 'string') {
        const decryptData = decrypt(data, config['cryptoKey']);
        return Promise.resolve(JSON.parse(decryptData));
      }
    }
    if (data?.errors) {
      const statusCode = data?.errors[0].statusCode;

      if (!response || statusCode !== 401) {
        return Promise.reject(response);
      }
      const token = getToken();
      if (!token) {
        return Promise.reject(response);
      }

      // 401 And there is a local token indicating that the token expires and needs to be swiped
      if (!isRefreshing) {
        isRefreshing = true;

        return refreshToken()
          .then((result) => {
            console.log('result', result);

            if (!result?.apiKey) {
              throw new Error(' refreshToken failed, no new refreshToken was obtained');
            }

            setToken({
              ...getToken(),
              refreshToken: result?.apiKey,
            });
            // Token has been refreshed, retry all requests in the queue
            requests.forEach((cb) => cb());
            requests = [];
            return request(config);
          })
          .finally(() => {
            isRefreshing = false;
          });
      }
      // The token is being refreshed, and a promise that has not been resolved will be returned
      return new Promise((resolve) => {
        requests.push(() => {
          resolve(request(config));
        });
      });
    }

    return Promise.resolve(data);
  },
  ({ response }: { response: AxiosResponse }) => {
    console.log('response', response);

    if (!response || response.status !== 401) {
      return Promise.reject(response);
    }
    const token = getToken();
    if (!token) {
      return Promise.reject(response);
    }
    const { config } = response;
    // 401 And there is a local token indicating that the token expires and needs to be swiped
    if (!isRefreshing) {
      isRefreshing = true;
      return refreshToken()
        .then((result) => {
          if (!result || !result.token) {
            throw new Error('Refresh token failed, no new token was obtained');
          }
          console.log('result', result);

          setToken({
            token: result?.token,
            refreshToken: result?.apiKey || result?.refreshToken,
          });
          // Token has been refreshed, retry all requests in the queue
          requests.forEach((cb) => cb());
          requests = [];
          return request(config);
        })
        .finally(() => {
          isRefreshing = false;
        });
    }
    // The token is being refreshed, and a promise that has not been resolved will be returned
    return new Promise((resolve) => {
      requests.push(() => {
        resolve(request(config));
      });
    });
  },
];

export async function request<TResult = any>(opt: IRequestOption) {
  const result = await instance.request<TResult>(opt);
  return (result as unknown) as TResult;
}

function addRequestInterceptor(
  onFulfilled?: (value: any) => any | Promise<any>,
  onRejected?: (error: any) => any,
) {
  return instance.interceptors.request.use(onFulfilled, onRejected);
}

function ejectRequestInterceptor(interceptorId: number) {
  return instance.interceptors.request.eject(interceptorId);
}

function addResponseInterceptor(
  onFulfilled?: (value: any) => any | Promise<any>,
  onRejected?: (error: any) => any,
) {
  return instance.interceptors.response.use(onFulfilled, onRejected);
}

function ejectResponseInterceptor(interceptorId: number) {
  return instance.interceptors.response.eject(interceptorId);
}

export {
  axios,
  instance,
  globalHeaders,
  commonRequestInterceptor,
  commonResponseInterceptor,
  commonResponseWithRefreshTokenInterceptor,
  addRequestInterceptor,
  ejectRequestInterceptor,
  addResponseInterceptor,
  ejectResponseInterceptor,
  AxiosRequestConfig,
  Method,
  AxiosResponse,
};
