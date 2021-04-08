import React from 'react';
import { MapItem, NextSignIn } from '@wetrial/component';
import { onFinish } from '../utils/function';

const data = [
  {
    item: (
      <NextSignIn
        {...{
          onFinish,
          next: {
            title: 'SignIn without validate email',
            isWithoutEmail: true,
            registerPath: '#',
            showRegister: true,
            verifyLink: '#',
            colProps: {
              style: {
                minWidth: 450,
              },
            },
          },
        }}
      />
    ),
    copyCode: `
    <NextSignIn
        {...{
          onFinish,
          next: {
            title: 'SignIn validate email',
            isWithoutEmail: true,
            colProps: {
              style: {
                minWidth: 400,
              },
            },
          },
        }}
      />
    `,
  },
  {
    item: (
      <NextSignIn
        {...{
          onFinish,
          next: {
            isHasRemember: true,
            isWithoutEmail: false,
            forgotPassPath: '/forgot-password',
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
  {
    item: (
      <NextSignIn
        {...{
          onFinish,
          next: {
            colProps: {
              style: {
                minWidth: 400,
              },
            },
            titleAlign: 'gx-text-center',
            submitBtnProps: { btnJustify: 'start' },
          },
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
          next: {
            colProps: {
              style: {
                minWidth: 400,
              },
            },
            titleAlign: 'gx-text-center',
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
