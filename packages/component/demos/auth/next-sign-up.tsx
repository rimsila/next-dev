import React from 'react';
import { MapItem, NextSignUp } from '@wetrial/component';
import { onFinish } from '../utils/function';

const data = [
  {
    item: <NextSignUp {...{ onFinish }} />,
    copyCode: `<NextSignIn  {...{ onFinish }}/>`,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true }} />;
};
