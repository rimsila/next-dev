import React, { FC } from 'react';
import { NextCardProps } from './type';
import css from './styles.less';
import classnames from 'classnames';
import '@ant-design/pro-card/es/style/index.less';
import ProCard from '@ant-design/pro-card/es';

export const NextCard: FC<NextCardProps> = ({ nextTheme, ...rest }) => {
  return <ProCard {...{ className: classnames(css[nextTheme]), ...rest }} />;
};

export default NextCard;
