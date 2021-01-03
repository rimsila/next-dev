import { LockOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { FormItemProps, FormProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import React, { memo, ReactNode } from 'react';
import { enUS, useIntl } from '@next-dev/provider/es';
import { NextButtonProps } from '../../NextButton/type';
import { ColProps } from 'antd/lib/col';
import { LAYOUT_COL_TWO } from '@next-dev/core/es/constants';
import classnames from 'classnames';
import { NextButton } from '../../NextButton';

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
    logoAlign?: string;
    customField?: ReactNode;
    isHideEmail?: boolean;
    isHasPasswordField?: boolean;
    goBackProps?: NextButtonProps;
    isHasGoBackBtn?: boolean;
    colProps?: ColProps;
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
    <Col className="box_extend" {...LAYOUT_COL_TWO} {...next?.colProps}>
      <img
        src={next?.logo || logo}
        alt={next?.alt || alt}
        width={next?.logoWith || logoWith}
        title={next?.title || title}
        className={classnames(next?.logoAlign, 'mb-1')}
      />
      <div className="mb-1">
        <h2>{getMessage('auth.Forgot_Your_Password', enUS.auth.Forgot_Your_Password)}</h2>
        <p>{getMessage('auth.userAuth_forgot', enUS.auth.userAuth_forgot)}</p>
      </div>

      <Form layout="vertical" {...rest}>
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
            <NextButton type="primary" htmlType="submit" {...next?.submitBtnProps}>
              {getMessage('auth.userAuth_send', enUS.auth.userAuth_send)}
            </NextButton>
          )}
        </FormItem>

        {/* //* ---------------- customFooter --------------- */}
        {next?.customFooter && next?.customFooter}
      </Form>
    </Col>
  );
};
export default memo(ForgotPassword);
