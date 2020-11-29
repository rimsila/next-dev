import React, { memo, ReactNode } from 'react';
import { Form, Input } from 'antd';
import { useIntl, enUS } from '../../../../provider/src';
import { FormProps, FormItemProps } from 'antd/lib/form';
import { NextButton } from '../../NextButton';
import { NextButtonProps } from '../../NextButton/type';
import { InputProps } from 'antd/lib/input';
import classnames from 'classnames';

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
            {/* //* ----------------  Input Form --------------- */}
            <Input
              type="email"
              placeholder="Email Address"
              size="large"
              {...next?.emailInputProps}
            />
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
                {getMessage('auth.userAuth_send', enUS.auth.userAuth_send)}
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
export default memo(ForgotPassword);
