import axios, { AxiosRequestConfig, Method, AxiosResponse } from 'axios';
import omit from 'lodash/omit';
// import { message } from 'antd';
import { getToken, setToken } from './authority';
// import { UnAuthorizedException, UserFriendlyException, ErrorShowType } from './exception';
import { newGuid } from './utils';
import { encrypt, decrypt, encryptKey } from './crypto';
import { CryptoType, IKeyValue } from './core';

export interface IRequestOption extends AxiosRequestConfig {
  /**
   * Whether the operation is successful
   */
  successTip?: boolean;
  /**
   * Request method
   */
  method?: Method;
  /**
   * Encrypted transmission method
   */
  crypto?: CryptoType;
}

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
    const { data, config } = response;
    const requestConfig = config as IRequestOption;
    if (requestConfig.responseType && requestConfig.responseType.toLowerCase() === 'arraybuffer') {
      return Promise.resolve(data);
    }
    // if (requestConfig.successTip) {
    //   message.success('Operation successful', 2);
    // }

    if (requestConfig.crypto === CryptoType.Out || requestConfig.crypto === CryptoType.Both) {
      if (typeof data === 'string') {
        const decryptData = decrypt(data, config['cryptoKey']);
        return Promise.resolve(JSON.parse(decryptData));
      }
    }
    return Promise.resolve(data);
  },
  ({ response }: { response: AxiosResponse }) => {
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
    const requestConfig = config as IRequestOption;
    if (requestConfig.responseType && requestConfig.responseType.toLowerCase() === 'arraybuffer') {
      return Promise.resolve(data);
    }
    // if (requestConfig.successTip) {
    //   message.success('successful', 2);
    // }

    if (requestConfig.crypto === CryptoType.Out || requestConfig.crypto === CryptoType.Both) {
      if (typeof data === 'string') {
        const decryptData = decrypt(data, config['cryptoKey']);
        return Promise.resolve(JSON.parse(decryptData));
      }
    }
    return Promise.resolve(data);
  },
  ({ response }: { response: AxiosResponse }) => {
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
          setToken({
            token: result.token,
            refreshToken: result.refreshToken,
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

export async function get<TResult = any>(url: string, opt?: IRequestOption) {
  return await request<TResult>({
    url,
    ...omit(opt, 'data'),
    method: 'get',
    params: { timespan: new Date().getTime(), ...opt?.data },
    successTip: false,
  });
}

export async function post<TResult = any>(url: string, opt?: IRequestOption) {
  return await request<TResult>({
    url,
    successTip: true,
    ...opt,
    method: 'post',
  });
}

export async function put<TResult = any>(url: string, opt?: IRequestOption) {
  return await request<TResult>({
    url,
    successTip: true,
    ...opt,
    method: 'put',
  });
}

export async function patch<TResult = any>(url: string, opt?: IRequestOption) {
  return await request<TResult>({
    url,
    successTip: true,
    ...opt,
    method: 'patch',
  });
}

export async function del<TResult = any>(url: string, opt?: IRequestOption) {
  return await request<TResult>({
    url,
    successTip: true,
    ...opt,
    method: 'delete',
  });
}

export async function head<TResult = any>(url: string, opt?: IRequestOption) {
  return await request<TResult>({
    url,
    successTip: true,
    ...opt,
    method: 'HEAD',
  });
}

export async function options<TResult = any>(url: string, opt?: IRequestOption) {
  return await request<TResult>({
    url,
    successTip: true,
    ...opt,
    method: 'OPTIONS',
  });
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
};
