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
import { LAYOUT_COL_TWO } from '@next-dev/core/es/constants';

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
    colProps?: ColProps;
  };
}

//* ---------------- default props --------------- */
export const defaultProps = {
  next: {
    logoWith: 40,
    alt: 'logo',
    title: 'Sign In',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    forgotPassPath: '/forgot-password',
  },
};

const NextSignIn = ({ next, ...rest }: IProp) => {
  const {
    next: { title, forgotPassPath },
  } = defaultProps;
  return (
    <Col className="box_extend" {...LAYOUT_COL_TWO} {...next?.colProps}>
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
            <Link className="gx-login-form-forgot" to={next?.forgotPassPath || forgotPassPath}>
              Forgot password
            </Link>
          </FormItem>

          <FormItem>
            <Link className="gx-login-form-forgot" to="/register">
              Register Here
            </Link>
          </FormItem>
          {/* //* ---------------- isHideSubmitBtn --------------- */}
          {!next?.isHideSubmitBtn && (
            <FormItem>
              <NextButton type="primary" htmlType="submit" {...next?.submitBtnProps}>
                Log in
              </NextButton>
            </FormItem>
          )}

          {/* //* ---------------- customFooter --------------- */}
          {next?.customFooter && next?.customFooter}
        </Form>
      </div>
    </Col>
  );
};

export default NextSignIn;
