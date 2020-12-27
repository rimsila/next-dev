import React, { FC, memo } from 'react';
import { Row } from 'antd';
import { LayoutProps } from './Layout.types';
import css from './styles.less';
import classnames from 'classnames';

export const NextRow: FC<LayoutProps> = ({ bgColor, children, gut1 = 10, gut2 = 10, cls }) => {
  return (
    <Row className={(classnames(css.layout, css[bgColor]), cls)} gutter={[gut1, gut2]}>
      {children}
    </Row>
  );
};

export default memo(NextRow);
