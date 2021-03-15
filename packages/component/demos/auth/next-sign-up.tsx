import React from 'react';
import { MapItem, NextSignUp } from '@wetrial/component';
import { onFinish } from '../utils/function';

const data = [
  {
    item: (
      <NextSignUp
        {...{
          onFinish,
          next: {
            colProps: {
              style: {
                minWidth: 400,
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
