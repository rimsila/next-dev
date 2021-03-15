---
title: Http Request
order: 1
nav:
  title: Core library
  order: 3
  path: /core
group:
  title: Async
  path: /
---

# Axios custom request

- `nextRequest` is customize from axios and provide `global handler`, `crypto`, `refresh token` etc.

Provide ajax request encapsulation, including request interception, response interception, exception handling, etc. 
### DEMO

<code src="../demos/request.tsx" />

## With Refresh Token
- create src/utils/request.ts if not use refresh token don't return status 401!

```ts | pure

// create new util for your need in utils/request.ts
import {
  addRequestInterceptor,
  addResponseInterceptor,
  axios,
  commonRequestInterceptor,
  commonResponseWithRefreshTokenInterceptor,
  configGlobalHeader,
  configInstance,
  configRefreshToken,
  IRequestOption,
  request,
} from '@next-dev/es/nextRequest';
import { getToken } from '@next-dev/es/authority';
import { handlerGlobalErr } from './globalHttpError';

export const BASE_API_Graph_URL = 'abc.com/graphql';
export const AUTH_KEY = '124234324'; 

export async function nextRequest<TResult = any>(opt?: IRequestOption) {
  const { hasParamData } = opt || {};
  const dfPramData = hasParamData ? { accessKey: getToken()?.token } : {};
  const variables = opt?.data?.variables
    ? {
        variables: {
          ...dfPramData,
          ...opt?.data?.variables,
        },
      }
    : {};

  /**
   * @configInstance call for refresh token when status 401
   */

  configRefreshToken(async () => {
    const resApi = await axios.post(BASE_API_Graph_URL, {
      query: `
          mutation RequestApiKey{
            requestApiKey(authKey: "${AUTH_KEY}"){
              apiKey
            }
          }
      `,
    });

    return resApi?.data?.data?.requestApiKey;
  });

  configInstance({
    baseURL: BASE_API_Graph_URL,
  });

  /**
   * @configGlobalHeader set header default is Bearer auth
   */

  configGlobalHeader(() => {
    return {
      'api-key': getToken()?.refreshToken as string,
      Authorization: `Bearer ${getToken()?.token}`,
    };
  });

  /**
   * @axiosInterceptor handle global res and req
   */
  addRequestInterceptor(...commonRequestInterceptor);
  addResponseInterceptor(...commonResponseWithRefreshTokenInterceptor);

  /**
   * @request to server
   */

  try {
    const response: any = await request<TResult>({
      fullTip: true,
      ...opt,
      data: {
        ...variables,
        ...opt?.data,
      }, 
      method: 'POST',
    });

    /**
     * @handlerGlobalError show msg success/err/redirect
     */

    //* set success
    handlerGlobalErr({ ...response });
    return response?.data;
  } catch (catchAxiosError) {
    //* catchError error 
    handlerGlobalErr({
      ...catchAxiosError,
      isErr: true,
    });
    return catchAxiosError;
  }
}


```

## Handle Global Error
- create utils/globalHttpError.tsx

```tsx |pure
import { codeHttpMsg } from '@/constants/http';
import { ROUTE } from '@/constants/routePath';
import type { IRequestOption } from '@next-dev/core/es/nextRequest';
import { message, notification } from 'antd';
import Text from 'antd/lib/typography/Text';
import isEmpty from 'lodash/isEmpty';
import { history } from 'umi';
import { clearToken } from './authority';

export const handlerGlobalErr = (configMsg: any) => {
  const { data, config, isErr, response, status } = configMsg || {};
  const { errorTip = false, fullTip, debug, method } = (config as IRequestOption) || {};

  const errStatus = !isEmpty(data?.errors) && data?.errors[0]?.message?.statusCode;

  /**
   * @message_description_code  it will do diff actin such as alert/succ/err or redirect /auto logout
   */
  const invalidUser = errStatus === 403;

  const showFinalMsg =
    (typeof msg1 === 'string' && msg1) || (typeof msg2 === 'string' && msg2) || dfError;

  const showFullTipFunc = (newMsg?: string | undefined) => {
    const newMsgParam = newMsg || showFinalMsg;
    if ((fullTip && isErr) || errorTip || isErr) {
      message.error(newMsgParam);
    }
    if (fullTip && !isErr) {
      message.success(newMsgParam);
    }
  };

  /**
   * @General //* handler base on response data
   */
  

  if (debug) {
    console.log(`debug ${isErr ? 'err' : 'succ'}`, codeStatus);
  }

  if (data?.errors) {
    //* ---------- invalid token ----------------
    if (invalidUser) {
      if (history.location.pathname !== ROUTE.auth.login.index) {
        clearToken();
        history.replace(ROUTE.auth.login.index);
      }
      notification.error({
        message: 'Invalid User Account',
        description: (
          <>
            <Text>Your Account is invalid or has been removed authorization ! </Text>
            <br />
            <Text type="danger">Please try to login it again! </Text>
          </>
        ),
      });
    }

    /**
     * @Method diff GET will handler here
     */
    // @ts-ignore
    if (method !== 'GET' || method !== 'get') {
      if (!invalidUser) {
        showFullTipFunc();
      }
    }
  }

  return null;
};


```

