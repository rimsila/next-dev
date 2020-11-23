import { message as msg } from 'antd';
import { AxiosError } from 'axios';

export type ErrorResponse = {
  error: Record<string, unknown>;
};

export function catchError(err?: AxiosError, res?: any) {
  // Something happened in setting up the request that triggered an Error
  // console.info('******error*******', err && err.toJSON());

  if (err?.isAxiosError) {
    // window.location.replace("/404");
  }
  let message = {
    code: err?.response?.status,
    description: {
      en: 'Something happened in setting up the request that triggered an Error',
      kh: 'Something happened in setting up the request that triggered an Error',
    },
  };

  if (err?.response === undefined) {
    message = {
      code: 404,
      description: {
        en: 'Server not found',
        kh: 'Server not found',
      },
    };
  } else if (err?.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(err.response.data.message);
    // console.log(err.response.headers);
    message = err.response.data.message;
  } else if (err.request) {
    // The request was made but no response was received
    // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js

    message = {
      code: 404,
      description: {
        en: 'The request was made, but no response was received',
        kh: 'The request was made, but no response was received',
      },
    };
  } else if (!res?.data.data || !res?.data?.token) {
    return 'Something went wrong!';
  }

  // handle message
  if (res?.status !== 200) {
    // msg.error(`${message.description.en}`);
  } else if (res?.data?.code > 299) {
    msg.error(`Input Data ${res?.data?.data[0]?.message}`);
  } else {
    msg.success(' Successfully');
  }

  return { error: message, res };
}
