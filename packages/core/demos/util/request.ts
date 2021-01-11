import type { IRequestOption } from '../../src/nextRequest';
import {
  addRequestInterceptor,
  addResponseInterceptor,
  commonRequestInterceptor,
  commonResponseInterceptor,
  configGlobalHeader,
  configInstance,
  request,
} from '../../src/nextRequest';
import { getToken } from '../../src/authority';
import { message } from 'antd';

export const handlerGlobalErr = (configMsg: { msg?: string; isErr?: boolean } & IRequestOption) => {
  const { errorTip, fullTip, msg, isErr, debug, method } = configMsg || {};
  const showTips = errorTip ? message.error : message.success;
  const showFullTip = fullTip && isErr ? message.error : message.success;

  // console.log('method', method);

  const showMsg =
    (typeof msg === 'string' && msg) ||
    (isErr ? 'something went wrong. please try gain!' : 'successfully!');

  if (debug) {
    console.log(`debug ${isErr ? 'err' : 'succ'}`, configMsg);
  }

  if (method === 'GET' || method === 'get') {
    return null;
  }

  if (fullTip) {
    return showFullTip(showMsg);
  }

  return showTips(showMsg);
};

export async function nextRequest<TResult = any>(
  method: MethodType,
  url: string,
  opt?: IRequestOption,
) {
  const { hasParam, hasParamData, hasPassByParam } = opt || {};
  const defaultParam = hasParam ? { accessKey: getToken()?.token } : {};
  const dfPramData = hasParamData ? { accessKey: getToken()?.token } : {};

  /**
   * @isPassByParam true url will have default
   */
  url = hasPassByParam ? `${url}/${getToken()?.token}` : url;

  /**
   * @configInstance
   */
  configInstance({
    baseURL: 'https://gorest.co.in/public-api' || 'https://obscure-shore-42367.herokuapp.com/api',
    params: defaultParam,
  });

  /**
   * @configGlobalHeader set header default id Bearer auth
   */
  configGlobalHeader(() => {
    return {
      Authorization: '', //  remove Bearer auth
    };
  });

  /**
   * @axiosInterceptor handle global res and req
   */
  addRequestInterceptor(...commonRequestInterceptor);
  addResponseInterceptor(...commonResponseInterceptor);

  const response = await request<TResult>({
    url,
    successTip: true,
    hasDfHandleErr: false,
    ...opt,
    data: { ...dfPramData, ...opt?.data }, // has default data
    method,
  });

  /**
   * @handlerGlobalError show msg success/err/redirect
   */

  handlerGlobalErr({ ...response, method });

  return response;
}
