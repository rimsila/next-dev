import React, { FC } from 'react';
import { MapItem } from '@wetrial/component';

import { configApp } from '../../../../config';
import { initNextDevCore } from '../../src/initNextCore';
import { getToken, setToken } from '../../src/authority';
import validateMessages from '../../src/validation';
import {
  addRequestInterceptor,
  addResponseInterceptor,
  commonRequestInterceptor,
  commonResponseInterceptor,
} from '../../src/nextRequest';
import { ConfigProvider } from 'antd';

export interface IUseMapItem {
  data: any[];
  children?: React.ReactNode;
  antSpan?: number;
  isAntCol?: boolean;
  gut1?: number;
  gut2?: number;
  isDivider?: boolean;
  cssProps?: React.CSSProperties;
  cls?: string;
}

export const CoreRoot: FC<IUseMapItem> = (props) => {
  //* set token
  // if (!getToken()?.token) {
  //   setToken({ token: configApp.TOKEN });
  // }

  return (
    <>
      <ConfigProvider form={{ validateMessages }}>
        <MapItem {...props} />
      </ConfigProvider>
    </>
  );
};
