import React, { useState } from 'react';
import useCounterModel from '../../../global-state/src/useCounter';
import { NextButton } from '../../../component/src/NextButton';
import sugar from 'sugar-hox-devtools';
import { Space } from 'antd';

const { SugarHoxDevTools } = sugar;

export default function IndexPage() {
  const [showDevTools, setShowDevTools] = useState(false);

  const counter = useCounterModel();
  // @ts-ignore
  console.log('log', window.sugarHox);

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
      {showDevTools && (
        <SugarHoxDevTools onClose={() => setShowDevTools(false)} />
      )}

      <Space align="center">
        <p style={{ margin: 0 }}> web-app {counter.count}</p>

        <NextButton onClick={counter.increment} type="primary">
          Increment +
        </NextButton>
      </Space>
    </div>
  );
}
