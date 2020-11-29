import { message } from 'antd';

const msg = (value: any) => message.info(`Value: ${JSON.stringify(value, undefined, 2)}`);

export const onFinish = (value: any) => {
  msg(value);
};
