import React from 'react';
import { MapItem, ForgotPassword } from '@wetrial/component';
import { onFinish } from '../utils/function';

const data = [
  {
    item: (
      <ForgotPassword
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
    copyCode: `
    <ForgotPassword
    {...{
      onFinish,
      next: {
        submitBtnProps: {
          btnJustify: 'flex-start',
        },
      },
    }}
  />
    `,
  },
  {
    item: (
      <ForgotPassword
        {...{
          onFinish,
          next: {
            logoAlign: 'als-center',
            title: 'next dev',
            colProps: {
              style: {
                minWidth: 400,
              },
            },
          },
        }}
      />
    ),
    copyCode: `
    <ForgotPassword
    {...{
      onFinish,
      next: {
        logoAlign: 'als-center',
        title: 'next dev',
      },
    }}
  />
    `,
  },
  {
    item: (
      <ForgotPassword
        {...{
          onFinish,
          next: {
            submitBtnProps: { btnJustify: 'flex-end' },
            colProps: {
              style: {
                minWidth: 400,
              },
            },
          },
        }}
      />
    ),
    copyCode: `
    
    <ForgotPassword
    {...{
      onFinish,
      next: {
        logoAlign: 'gx-justify-content-center',
        submitBtnProps: { btnJustify: 'flex-end' },
      },
    }}
  />
    `,
  },
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true }} />;
};
