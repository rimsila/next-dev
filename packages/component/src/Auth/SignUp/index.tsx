import React from 'react';
import { Checkbox, Col, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import Icon, { GoogleOutlined, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { FormProps } from 'antd/lib/form';
import { LAYOUT_COL_AUTH } from '@next-dev/core/es/constants';
import { ColProps } from 'antd/lib/col';
import { NextButton } from '../../NextButton';
import { NextButtonProps } from '../../NextButton/type';
import classNames from 'classnames';
import countryCode from '@next-dev/core/es/data/countryCode.json';
import { Regex } from '@next-dev/core/es/regexp';

const { Option } = Select;
const FormItem = Form.Item;

//* ----------------  props type --------------- */
interface IProp extends FormProps {
  next?: {
    logo?: any;
    alt?: string;
    title?: string;
    titleAlign?: any;
    isHasSocial?: boolean;
    colProps?: ColProps;
    signUpBtnProps?: NextButtonProps;
    passwordFiled?: boolean;
    confirmPasswordFiled?: boolean;
    firstNameField?: boolean;
    lastNameField?: boolean;
    userNameField?: boolean;
    emailFiled?: boolean;
    emailFiledType: 'string' | 'email';
    genderField?: boolean;
    phoneCodeFiled?: boolean;
    rememberField?: boolean;
    loginLink?: string;
    showLogo?: boolean;
  };
}

const NextSignUp = ({ next, ...rest }: IProp) => {
  //* ---------------- default props --------------- */
  const defaultProps = {
    next: {
      logoWith: 40,
      alt: 'logo',
      title: 'Sign Up',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      titleAlign: 'text-center',
    },
  };

  const {
    next: { title, logo, titleAlign },
  } = defaultProps;

  const [form] = Form.useForm();
  return (
    <Col className="box_shadow" {...LAYOUT_COL_AUTH} {...next?.colProps}>
      {!next?.showLogo && (
        <div className={classNames(next?.titleAlign || titleAlign)}>
          <img src={next?.logo || logo} alt="logo" title="logo" width={50} />
          <h1>{next?.title || title}</h1>
        </div>
      )}

      <Form scrollToFirstError name="register" form={form} {...rest}>
        {/* //*--------------- firstNameField --------------- */}
        {next?.firstNameField && (
          <FormItem name="firstName" rules={[{ required: true }]}>
            <Input prefix={<UserOutlined />} placeholder="First Name" />
          </FormItem>
        )}
        {/* //*--------------- firstNameField --------------- */}
        {next?.lastNameField && (
          <FormItem name="lastName" rules={[{ required: true }]}>
            <Input prefix={<UserOutlined />} placeholder="Last Name" />
          </FormItem>
        )}
        {/* //*--------------- user --------------- */}
        {next?.userNameField && (
          <FormItem name="userName" rules={[{ required: true }]}>
            <Input prefix={<UserOutlined />} placeholder="User Name" />
          </FormItem>
        )}

        {/* //*--------------- email --------------- */}
        {next?.emailFiled && (
          <FormItem
            name="email"
            rules={[{ required: true, type: next?.emailFiledType || 'email' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email address" />
          </FormItem>
        )}

        {/* //*--------------- gender --------------- */}
        {next?.genderField && (
          <FormItem name="gender" rules={[{ required: true }]}>
            <Select showSearch placeholder="Gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </FormItem>
        )}

        {/* //*--------------- phone --------------- */}
        {next?.phoneCodeFiled && (
          <Form.Item
            name="phoneCode"
            rules={[
              {
                required: true,
                pattern: Regex.number,
                message: 'please input number',
              },
            ]}
          >
            <Input
              addonBefore={
                <Form.Item name="countryCode" noStyle>
                  <Select style={{ width: 90 }} showSearch>
                    {countryCode?.map((v) => {
                      return (
                        <Option key={v?.dial_code} value={v?.dial_code}>
                          {v?.dial_code}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              }
              placeholder="Phone Number"
            />
          </Form.Item>
        )}

        {/* //*--------------- password --------------- */}
        {next?.passwordFiled && (
          <FormItem name="password" rules={[{ required: true }]}>
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </FormItem>
        )}

        {/* //*--------------- confirm-password --------------- */}
        {next?.confirmPasswordFiled && (
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
        )}
        {/* //*--------------- remember --------------- */}
        {next?.rememberField && (
          <FormItem name="remember" initialValue valuePropName="checked">
            <Checkbox>Remember me</Checkbox>

            <Link className="gx-login-form-forgot" to="/forgot-password">
              Forgot password
            </Link>
          </FormItem>
        )}

        {/* //*--------------- Login Here --------------- */}
        {next?.loginLink && (
          <FormItem>
            <Link to={next?.loginLink || '/login'}>Login Here</Link>
          </FormItem>
        )}

        <FormItem>
          <NextButton block type="primary" htmlType="submit" {...next?.signUpBtnProps}>
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
    </Col>
  );
};

export default NextSignUp;
