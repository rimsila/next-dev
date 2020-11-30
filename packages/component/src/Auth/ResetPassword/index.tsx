import React from 'react';
import { Button, Form, Input } from 'antd';
import { useIntl, enUS } from '../../../../provider/src';
import { FormProps } from 'antd/lib/form';

const FormItem = Form.Item;

interface IProp extends FormProps {
  next?: {
    logo?: string;
    logoWidth?: string;
  };
}

//* ---------------- default props --------------- */
export const defaultProps = {
  next: {
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    logoWidth: 40,
  },
};
const ResetPassword = ({ next, ...rest }: IProp) => {
  const { getMessage } = useIntl();
  const {
    next: { logo, logoWidth },
  } = defaultProps;

  return (
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className="gx-login-header">
          <img
            src={next?.logo || logo}
            width={next?.logoWidth || logoWidth}
            alt="wieldy"
            title="wieldy"
          />
        </div>
        <div className="gx-mb-4">
          <h2>Reset Password</h2>
          <p> {getMessage('appModule_enterPasswordReset', '')}</p>
        </div>

        <Form className="gx-login-form gx-form-row0" {...rest}>
          <FormItem
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            name="password"
          >
            <Input type="password" placeholder="New Password" />
          </FormItem>

          <FormItem
            name="confirm"
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
            ]}
          >
            <Input placeholder="Retype New Password" type="password" />
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">
              {getMessage('app_userAuth_reset', '')}
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
