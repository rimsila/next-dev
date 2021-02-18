import React, { useState } from 'react';
import { NextButton } from '../../../component/src/NextButton';
import { Space } from 'antd';
import useCounter from '../../../global-state/src/useCounter';

export const IndexPage = () => {
  const counter = useCounter();

  return (
    <div
      style={{
        width: 500,
        margin: '60px auto',
        border: '1px solid ',
        height: 500,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Space align="center">
        <p style={{ margin: 0 }}> web {counter.count}</p>

        <NextButton onClick={counter.increment} type="primary">
          Increment +
        </NextButton>
      </Space>
    </div>
  );
};

export default IndexPage;
