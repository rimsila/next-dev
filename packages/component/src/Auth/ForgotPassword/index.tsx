import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { FormItemProps, FormProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import classnames from 'classnames';
import React, { memo, ReactNode } from 'react';
import { enUS, useIntl } from '../../../../provider/es';
import { NextButton } from '../../NextButton';
import { NextButtonProps } from '../../NextButton/type';

const FormItem = Form.Item;

//* ----------------  props type --------------- */
interface IProp extends FormProps {
  next?: {
    logoWith?: number | string;
    emailItemProps?: FormItemProps;
    logo?: any;
    alt?: string;
    title?: string;
    submitBtnProps?: NextButtonProps;
    isHideSubmitBtn?: boolean;
    customFooter?: ReactNode;
    emailInputProps?: InputProps;
    logoAlign?: any;
    customField?: ReactNode;
    isHideEmail?: boolean;
    isHasPasswordField?: boolean;
    goBackProps?: NextButtonProps;
    isHasGoBackBtn?: boolean;
  };
}

//* ---------------- default props --------------- */
export const defaultProps = {
  next: {
    logoWith: 40,
    alt: 'logo',
    title: 'logo',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
};

//* ----------------  main component --------------- */
const ForgotPassword = ({ next, ...rest }: IProp) => {
  const {
    next: { logo, alt, logoWith, title },
  } = defaultProps;

  const { getMessage } = useIntl();

  return (
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className={classnames('gx-login-header', 'gx-d-flex', next?.logoAlign)}>
          <img
            src={next?.logo || logo}
            alt={next?.alt || alt}
            width={next?.logoWith || logoWith}
            title={next?.title || title}
          />
        </div>
        <div className="gx-mb-4">
          <h2>{getMessage('auth.Forgot_Your_Password', enUS.auth.Forgot_Your_Password)}</h2>
          <p>{getMessage('auth.userAuth_forgot', enUS.auth.userAuth_forgot)}</p>
        </div>

        <Form layout="vertical" className="gx-login-form gx-form-row0" {...rest}>
          {/* //* ----------------  FormItem --------------- */}
          {!next?.isHideEmail && (
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
              {/* //* ----------------  email field --------------- */}
              <Input
                type="email"
                placeholder="Email Address"
                size="large"
                {...next?.emailInputProps}
              />
            </FormItem>
          )}
          {/* //* ---------------- customField --------------- */}
          {next?.customField && (
            <>
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
                {/* //* ----------------  email field --------------- */}
                <Input
                  type="email"
                  placeholder="Email Address"
                  size="large"
                  {...next?.emailInputProps}
                />
              </FormItem>
            </>
          )}

          {/* //* ---------------- isHasPasswordField --------------- */}
          {next?.isHasPasswordField && (
            <>
              <FormItem
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
              </FormItem>
              <FormItem
                name="confirm-password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
              </FormItem>
            </>
          )}
          {/* //* ---------------- customField --------------- */}
          {next?.customField && next?.customField}

          {/* //* ---------------- isHideSubmitBtn --------------- */}
          <FormItem>
            {next?.isHasGoBackBtn && (
              <Button type="link" {...next?.goBackProps}>
                Go Back
              </Button>
            )}
            {!next?.isHideSubmitBtn && (
              <Button type="primary" htmlType="submit" {...next?.submitBtnProps}>
                {getMessage('auth.userAuth_send', enUS.auth.userAuth_send)}
              </Button>
            )}
          </FormItem>

          {/* //* ---------------- customFooter --------------- */}
          {next?.customFooter && next?.customFooter}
        </Form>
      </div>
    </div>
  );
};
export default memo(ForgotPassword);
