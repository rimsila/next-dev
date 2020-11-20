import React, { FC } from 'react';
import { Row } from 'antd';
import { LayoutProps } from './Layout.types';
import './styles.less';

export const NextRow: FC<LayoutProps> = ({ children, gut1 = 15, gut2 = 15 }) => {
  return (
    <Row className="layout" gutter={[gut1, gut2]}>
      {children}
    </Row>
  );
};

export default NextRow;
