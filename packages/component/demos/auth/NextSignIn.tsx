import React from 'react';
import { MapItem, NextSignIn } from '@wetrial/component';
import { onFinish } from '../utils/function';

const data = [
  {
    item: <NextSignIn {...{ onFinish }} />,
    copyCode: `<NextSignIn  {...{ onFinish }}/>`,
  },
  {
    item: (
      <NextSignIn
        {...{
          onFinish,
          next: { titleAlign: 'gx-text-center', submitBtnProps: { btnJustify: 'start' } },
        }}
      />
    ),
    copyCode: `<NextSignIn  {...{ onFinish }}/>`,
  },
  {
    item: (
      <NextSignIn
        {...{
          onFinish,
          next: { titleAlign: 'gx-text-center' },
        }}
      />
    ),
    copyCode: `<NextSignIn  {...{ onFinish }}/>`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true }} />;
};
