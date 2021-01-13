import React from 'react';
import { Avatar, Button, Form, Input } from 'antd';
import { useIntl, enUS } from '@next-dev/provider/es';
import { FormProps } from 'antd/lib/form';

const FormItem = Form.Item;

type IProp = FormProps;

//* ---------------- default props --------------- */
export const defaultProps = {
  next: {
    logoWith: 40,
    alt: 'logo',
    title: 'logo',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
};

const NextLockScreen = ({ ...rest }: IProp) => {
  const { getMessage } = useIntl();

  return (
    <div className="gx-login-container">
      <div className="gx-login-content gx-text-center">
        <div className="gx-login-header">
          <Avatar
            shape="circle"
            className="gx-size-120"
            src="https://via.placeholder.com/150x150"
          />
        </div>
        <div className="gx-mb-4">
          <h3>John Smith</h3>
          <p>{getMessage('appModule_enterPasswordUnlock', enUS.appModule_enterPasswordUnlock)}</p>
        </div>

        <Form className="gx-login-form gx-form-row0" {...rest}>
          <FormItem
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input type="password" placeholder="Password" />
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">
              {getMessage('app_userAuth_unLock', enUS.app_userAuth_unLock)}
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default NextLockScreen;
