import React, { memo, ReactNode } from 'react';
import { Checkbox, Col, Form, Input } from 'antd';

import { FormProps, FormItemProps } from 'antd/lib/form';
import { NextButtonProps } from '../../NextButton/type';
import { InputProps } from 'antd/lib/input';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { NextButton } from '../../NextButton';
import classNames from 'classnames';
import { ColProps } from 'antd/lib/col';
import { LAYOUT_COL_AUTH } from '@next-dev/core/es/constants';

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
    forgotPassPath?: string;
    registerPath?: string;
    colProps?: ColProps;
    isWithoutEmail?: boolean;
    isHasRemember?: boolean;
  };
}

const NextSignIn = memo(({ next, ...rest }: IProp) => {
  //* ---------------- default props --------------- */
  const defaultProps = {
    next: {
      logoWith: 40,
      alt: 'logo',
      title: 'Sign In',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      forgotPassPath: next?.forgotPassPath,
      registerPath: '',
    },
  };

  const {
    next: { title, forgotPassPath, registerPath },
  } = defaultProps;
  return (
    <Col className="box_shadow" {...LAYOUT_COL_AUTH} {...next?.colProps}>
      <div className={classNames('gx-login-header', next?.titleAlign)}>
        <h1>{next?.title || title}</h1>
      </div>
      <Form {...rest}>
        <FormItem
          name="email"
          rules={[
            {
              type: next?.isWithoutEmail ? 'string' : 'email',
              required: true,
            },
          ]}
          {...next?.emailItemProps}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder={next?.isWithoutEmail ? 'User Name' : 'Email'}
          />
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
        {(next?.isHasRemember || forgotPassPath) && (
          <FormItem>
            {next?.isHasRemember && <Checkbox>Remember me</Checkbox>}
            {forgotPassPath && <Link to={forgotPassPath}>Forgot Password</Link>}
          </FormItem>
        )}

        {registerPath && (
          <FormItem>
            <Link to={next?.registerPath || registerPath}>Register Here</Link>
          </FormItem>
        )}

        {/* //* ---------------- isHideSubmitBtn --------------- */}
        {!next?.isHideSubmitBtn && (
          <FormItem>
            <NextButton type="primary" block htmlType="submit" {...next?.submitBtnProps}>
              Log In
            </NextButton>
          </FormItem>
        )}

        {/* //* ---------------- customFooter --------------- */}
        {next?.customFooter && next?.customFooter}
      </Form>
    </Col>
  );
});

export default NextSignIn;
