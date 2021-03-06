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
} from '../../src/nextRequest';
import { getToken } from '../../src/authority';
import { configApp } from '../../../../config';

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
   * @configInstance
   */

  // configRefreshToken(async () => {
  //   const resApi = await axios.post(BASE_API_Graph_URL, {
  //     query: `
  //         mutation RequestApiKey{
  //           requestApiKey(authKey: "${AUTH_KEY}"){
  //             apiKey
  //           }
  //         }
  //     `,
  //   });

  //   return resApi?.data?.data?.requestApiKey;
  // });

  configInstance({
    baseURL: configApp?.BASE_GRAPH,
  });

  /**
   * @configGlobalHeader set header default id Bearer auth
   */

  // configGlobalHeader(() => {
  //   return {
  //     'api-key': getToken()?.refreshToken as string,
  //     Authorization: `Bearer ${getToken()?.token}`,
  //   };
  // });

  /**
   * @axiosInterceptor handle global res and req
   */
  addRequestInterceptor(...commonRequestInterceptor);
  addResponseInterceptor(...commonResponseWithRefreshTokenInterceptor);

  /**
   * @return_data to client ui
   */
  try {
    const response: any = await request<TResult>({
      fullTip: true,
      ...opt,
      data: {
        ...variables,
        ...opt?.data,
      }, // has default data
      method: 'POST',
    });

    /**
     * @handlerGlobalError show msg success/err/redirect
     */

    //* set success
    return response?.data;
  } catch (catchAxiosError) {
    //* catchError error
    return catchAxiosError;
  }
}
