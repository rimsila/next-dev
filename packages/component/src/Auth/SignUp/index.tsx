import React from 'react';
import { Checkbox, Col, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import Icon, { GoogleOutlined, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { FormProps } from 'antd/lib/form';
import { LAYOUT_COL_AUTH } from '@next-dev/core/es/constants';
import { ColProps } from 'antd/lib/col';
import { NextButton } from '../../NextButton';
import { NextButtonProps } from '../../NextButton/type';

const FormItem = Form.Item;
//* ----------------  props type --------------- */
interface IProp extends FormProps {
  next?: {
    logo?: any;
    alt?: string;
    title?: string;
    titleAlign?: any;
    isHasSocial: boolean;
    colProps?: ColProps;
    signUpBtnProps?: NextButtonProps;
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

const NextSignUp = ({ next, ...rest }: IProp) => {
  const [form] = Form.useForm();
  return (
    <Col className="box_extend" {...LAYOUT_COL_AUTH} {...next?.colProps}>
      <div className="gx-login-content">
        <div className="gx-login-header gx-text-center">
          <h1 className="gx-login-title">Sign Up</h1>
        </div>
        <Form scrollToFirstError name="register" form={form} {...rest}>
          <FormItem name="user" rules={[{ required: true }]}>
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </FormItem>

          <FormItem name="email" rules={[{ required: true }]}>
            <Input prefix={<MailOutlined />} placeholder="Email address" />
          </FormItem>

          <FormItem name="password" rules={[{ required: true }]}>
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </FormItem>

          <FormItem
            dependencies={['password']}
            hasFeedback
            name="confirm-password"
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  // eslint-disable-next-line prefer-promise-reject-errors
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
          </FormItem>

          <FormItem name="remember" initialValue valuePropName="checked">
            <Checkbox>Remember me</Checkbox>

            <Link className="gx-login-form-forgot" to="/forgot-password">
              Forgot password
            </Link>
          </FormItem>

          <FormItem>
            <Link className="gx-login-form-forgot" to="/login">
              Login Here
            </Link>
          </FormItem>
          <FormItem>
            <NextButton type="primary" htmlType="submit" {...next?.signUpBtnProps}>
              Sign Up
            </NextButton>
          </FormItem>
        </Form>

        {next?.isHasSocial && (
          <div className="gx-flex-row">
            <span className="gx-mb-2 gx-mr-3">or Sign up using: </span>
            <ul className="gx-social-link">
              <li>
                <GoogleOutlined />
              </li>
              <li>
                <Icon type="facebook" />
              </li>
              <li>
                <Icon type="github" />
              </li>
              <li>
                <Icon type="twitter" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </Col>
  );
};

export default NextSignUp;
