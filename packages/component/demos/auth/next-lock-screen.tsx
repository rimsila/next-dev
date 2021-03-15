import React from 'react';
import { MapItem, NextLockScreen } from '@wetrial/component';
import { onFinish } from '../utils/function';

const data = [
  {
    item: (
      <NextLockScreen
        {...{
          onFinish,
          next: {
            colProps: {
              style: {
                maxWidth: 400,
              },
            },
          },
        }}
      />
    ),
    copyCode: `<NextSignIn  {...{ onFinish }}/>`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true }} />;
};
