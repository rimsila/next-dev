import React from 'react';
import { MapItem, ResetPassword } from '@wetrial/component';
import { onFinish } from '../utils/function';

const data = [
  {
    item: (
      <ResetPassword
        {...{
          onFinish,
          next: {
            type: 'verify',
            verifyCodeField: true,
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
