import Footer from 'rc-footer';
import React, { FC } from 'react';
import { NextFooterProps } from './type';
import css from './styles.less';
import classnames from 'classnames';
import 'rc-footer/assets/index.less';

export const NextFooter: FC<NextFooterProps> = ({ nextTheme, ...rest }) => {
  return <Footer {...{ className: classnames(css[nextTheme]), ...rest }} />;
};

export default NextFooter;
