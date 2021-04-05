import React from 'react';
import { MapItem, NextSignUp } from '@wetrial/component';
import { onFinish } from '../utils/function';

const data = [
  {
    item: (
      <NextSignUp
        {...{
          onFinish,
          initialValues: {
            countryCode: '+855',
          },
          next: {
            firstNameField: true,
            lastNameField: true,
            emailFiled: true,
            phoneCodeFiled: true,
            genderField: true,
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
    `,
  },
  {
    item: (
      <NextSignUp
        {...{
          onFinish,
          next: {
            confirmPasswordFiled: true,
            passwordFiled: true,
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
    <NextSignUp
        {...{
          onFinish,
          next: {
            hideConfirmPassword: true,
            hidePassword: true,
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
];

export default () => {
  return <MapItem {...{ data, antSpan: 24, isDivider: true }} />;
};
