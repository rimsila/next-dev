import React, { FC, memo } from 'react';
import { Row } from 'antd';
import { LayoutProps } from './Layout.types';
import css from './styles.less';

export const NextRow: FC<LayoutProps> = ({ children, gut1 = 10, gut2 = 10 }) => {
  return (
    <Row className={css.layout} gutter={[gut1, gut2]}>
      {children}
    </Row>
  );
};

export default memo(NextRow);
