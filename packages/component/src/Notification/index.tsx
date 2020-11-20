import { notification } from 'antd';
import { INotiType, Msg } from './types';

const cusNotification = ({ type, ...rest }: INotiType) => {
  return notification[`${type}`]({ ...rest });
};

export const nextNotification = ({ message, nextTypes, ...rest }: INotiType) => {
  switch (nextTypes) {
    // * --------------- subscribeSuccess ---------------
    case 'subscribeSuccess':
      return cusNotification({
        type: 'success',
        message: Msg.subscribeSuccess,
      });

    // * --------------- subscribeErr ---------------
    case 'subscribeErr':
      return cusNotification({
        type: 'error',
        message: Msg.subscribeErr,
      });

    // * --------------- subscribeErr ---------------
    case 'submitContactSuccess':
      return cusNotification({
        type: 'success',
        message: Msg.submitContactSuccessDesc,
      });
    default:
      return cusNotification({ message, ...rest });
  }
};
