import React, { FC } from 'react';
import { MapItem } from '@wetrial/component';
import validateMessages from '../../src/validation';

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
  return (
    <>
      <ConfigProvider form={{ validateMessages }}>
        <MapItem {...props} />
      </ConfigProvider>
    </>
  );
};
