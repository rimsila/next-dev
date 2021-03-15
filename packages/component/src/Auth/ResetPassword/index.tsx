import React from 'react';
import { Button, Col, Form, Input } from 'antd';
import { useIntl } from '@next-dev/provider/es';
import { FormProps } from 'antd/lib/form';
import { ColProps } from 'antd/lib/col';
import { LAYOUT_COL_AUTH } from '@next-dev/core/es/constants';

const FormItem = Form.Item;

interface IProp extends FormProps {
  next?: {
    logo?: string;
    logoWidth?: string;
    colProps?: ColProps;
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
    <Col className="box_shadow" {...LAYOUT_COL_AUTH} {...next?.colProps}>
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
    </Col>
  );
};

export default ResetPassword;
