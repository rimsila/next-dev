import React from 'react';
import { Button, Checkbox, Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { FormProps } from 'antd/lib/form';

const FormItem = Form.Item;
//* ----------------  props type --------------- */
interface IProp extends FormProps {
  next?: {
    logo?: any;
    alt?: string;
    title?: string;
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

const NextSignUp = ({ next, ...rest }: IProp) => {
  return (
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className="gx-login-header gx-text-center">
          <h1 className="gx-login-title">Sign Up</h1>
        </div>
        <Form className="gx-login-form gx-form-row0" {...rest}>
          <FormItem
            name="user"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </FormItem>
          <FormItem
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email address" />
          </FormItem>
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
          <FormItem name="remember" initialValue valuePropName="checked">
            <Checkbox>Remember me</Checkbox>

            <Link className="gx-login-form-forgot" to="component/page/next-auth">
              Forgot password
            </Link>
          </FormItem>
          <FormItem className="gx-text-center">
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </FormItem>
        </Form>
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
      </div>
    </div>
  );
};

export default NextSignUp;
