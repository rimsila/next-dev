import React from 'react';
import { MapItem, ForgotPassword } from '@wetrial/component';
import { onFinish } from '../utils/function';

const data = [
  {
    item: <ForgotPassword {...{ onFinish }} />,
    copyCode: `<ForgotPassword  {...{ onFinish }}/>`,
  },
  {
    item: (
      <ForgotPassword
        {...{
          onFinish,
          next: {
            logoAlign: 'gx-justify-content-center',
            submitBtnProps: { btnJustify: 'center' },
          },
        }}
      />
    ),
    copyCode: `<ForgotPassword  {...{ onFinish }}/>`,
  },
  {
    item: (
      <ForgotPassword
        {...{
          onFinish,
          next: {
            logoAlign: 'gx-justify-content-center',
            submitBtnProps: { btnJustify: 'flex-end' },
          },
        }}
      />
    ),
    copyCode: `<ForgotPassword  {...{ onFinish }}/>`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true }} />;
};
