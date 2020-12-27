import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

export default () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      style={{
        width: '100%',
      }}
      {...layout}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="number"
        name="projectNo"
        rules={[{ required: true, whitespace: true, max: 15 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Examples"
        name="designCount"
        rules={[{ type: 'number', required: true, min: 1, max: 1000 }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          save
        </Button>
      </Form.Item>
    </Form>
  );
};
