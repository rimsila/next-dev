import React from 'react';
import { Button, Col, Form, Input } from 'antd';
import { useIntl } from '@next-dev/provider/es';
import { FormProps } from 'antd/lib/form';
import { ColProps } from 'antd/lib/col';
import { LAYOUT_COL_AUTH } from '@next-dev/core/es/constants';
import classNames from 'classnames';
import { LockOutlined } from '@ant-design/icons';

const FormItem = Form.Item;

interface IProp extends FormProps {
  next?: {
    logo?: string;
    logoWidth?: string;
    colProps?: ColProps;
    titleAlign?: string;
    title?: string;
    type?: 'reset' | 'verify';
    verifyCodeField?: boolean;
    passwordFiled?: boolean;
    confirmPasswordFiled?: boolean;
  };
}

const ResetPassword = ({ next, ...rest }: IProp) => {
  const { getMessage } = useIntl();
  const {
    logo = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    logoWidth = 40,
    type = 'reset',
    verifyCodeField,
  } = next;

  //* ---------------- default props --------------- */

  return (
    <Col className="box_shadow" {...LAYOUT_COL_AUTH} {...next?.colProps}>
      <>
        <div className={classNames(next?.titleAlign || 'text-center')}>
          <img
            src={next?.logo || logo}
            width={next?.logoWidth || logoWidth}
            alt="logo"
            title="logo"
          />
        </div>
        <div>
          {type === 'reset' && (
            <>
              <h2>Reset Password</h2>
              <p> {getMessage('appModule_enterPasswordReset', '')}</p>
            </>
          )}

          {/* //* --------------- Verify -------------- */}
          {type === 'verify' && (
            <>
              <h2>Verify Account</h2>
              <p> {getMessage('app_userAuth_verify', '')}</p>
            </>
          )}
        </div>

        <Form {...rest}>
          {verifyCodeField && (
            <FormItem
              rules={[
                {
                  required: true,
                },
              ]}
              name="verifyCode"
            >
              <Input prefix={<LockOutlined />} type="text" placeholder="Verify Code" />
            </FormItem>
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

          <FormItem>
            <Button type="primary" htmlType="submit" block>
              {type === 'verify' && getMessage('app_userAuth_btn_verify', '')}
              {type === 'reset' && getMessage('app_userAuth_reset', '')}
            </Button>
          </FormItem>
        </Form>
      </>
    </Col>
  );
};

export default ResetPassword;
