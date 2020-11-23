import axios from 'axios';
import { configApp } from '../../../config';
import { catchError } from './error-handler';

type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch';

const httpRequest = async (
  method?: MethodType,
  url?: string | any,
  params?: any,
  data?: any,
  newBaseURL?: string,
) => {
  // * --- get token from user ----
  // if (Object.keys(getAccessToken()).length > 0) {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${getAccessToken()}`;
  // } else {
  axios.defaults.headers.common['Authorization'] = `Bearer ${configApp.TOKEN}`; //* default token for test
  // }

  //* header form method delete
  axios.defaults.headers.delete['Content-Type'] = 'application/json';

  // if has newBaseURL
  if (newBaseURL) {
    axios.defaults.baseURL = newBaseURL;
  } else {
    axios.defaults.baseURL = configApp.BASE_PATH;
  }

  //* Request !body it will have default param
  // if (!params) {
  axios.defaults.params = {
    // data: { lng: 0, lat: 0, page: 1, ...data },
    ...data,
    // };
  };

  // render http base on param method
  const renderMethod = () => {
    switch (method) {
      case 'get':
        return axios.get(url, params);
      case 'post':
        return axios.post(url, params);
      case 'delete':
        return axios.delete(url, params);
      case 'put':
        return axios.put(url, params);
      case 'patch':
        return axios.patch(url, params);
      default:
        axios.get(url, params);
        break;
    }
  };

  try {
    const res = await renderMethod();
    if (!configApp.PROD) {
      console.log('******REQUEST*******', res);
    }
    // set success or error to catchError
    if (method !== 'get') {
      catchError(undefined, res);
    }
    return res?.data;
  } catch (catchAxiosError) {
    catchError(catchAxiosError);
    return catchAxiosError;
  }
};

export { httpRequest };
