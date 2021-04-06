import React from 'react';
import { Button, Col, Form, Input } from 'antd';
import { useIntl } from '@next-dev/provider/es';
import { FormProps } from 'antd/lib/form';
import { ColProps } from 'antd/lib/col';
import { LAYOUT_COL_AUTH } from '@next-dev/core/es/constants';
import classNames from 'classnames';

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
              <Input type="password" placeholder="Verify Code" />
            </FormItem>
          )}
          <FormItem
            rules={[
              {
                required: true,
              },
            ]}
            name="password"
          >
            <Input type="password" placeholder="New Password" />
          </FormItem>

          <FormItem
            name="confirm"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Retype New Password" type="password" />
          </FormItem>

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
