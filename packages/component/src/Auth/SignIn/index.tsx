import React, { memo, ReactNode } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useIntl, enUS } from '../../../../provider/src';
import { FormProps, FormItemProps } from 'antd/lib/form';
import { NextButtonProps } from '../../NextButton/type';
import { InputProps } from 'antd/lib/input';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { NextButton } from '../../NextButton';
import classNames from 'classnames';

const FormItem = Form.Item;

//* ----------------  props type --------------- */
interface IProp extends FormProps {
  next?: {
    logoWith?: number | string;
    emailItemProps?: FormItemProps;
    passwordItemProps?: FormItemProps;
    logo?: any;
    alt?: string;
    title?: string;
    submitBtnProps?: NextButtonProps;
    isHideSubmitBtn?: boolean;
    customFooter?: ReactNode;
    emailInputProps?: InputProps;
    titleAlign?: any;
  };
}

//* ---------------- default props --------------- */
export const defaultProps = {
  next: {
    logoWith: 40,
    alt: 'logo',
    title: 'Sign In',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
};

const NextSignIn = ({ next, ...rest }: IProp) => {
  const {
    next: { logo, alt, logoWith, title },
  } = defaultProps;
  return (
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className={classNames('gx-login-header', next?.titleAlign)}>
          <h1 className="gx-login-title">{next?.title || title}</h1>
        </div>
        <Form className="gx-login-form gx-form-row0" {...rest}>
          <FormItem
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
              },
            ]}
            {...next?.emailItemProps}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </FormItem>
          <FormItem
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
            {...next?.passwordItemProps}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </FormItem>
          <FormItem>
            <Checkbox>Remember me</Checkbox>
            <Link className="gx-login-form-forgot" to="/component/page/next-auth">
              Forgot password
            </Link>
          </FormItem>

          {/* //* ---------------- isHideSubmitBtn --------------- */}
          {!next?.isHideSubmitBtn && (
            <FormItem>
              <NextButton
                type="primary"
                htmlType="submit"
                btnJustify="start"
                {...next?.submitBtnProps}
              >
                Log in
              </NextButton>
            </FormItem>
          )}

          {/* //* ---------------- customFooter --------------- */}
          {next?.customFooter && next?.customFooter}
        </Form>
      </div>
    </div>
  );
};

export default NextSignIn;
