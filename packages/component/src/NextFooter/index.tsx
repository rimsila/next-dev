import Footer from 'rc-footer/es';
import React, { FC } from 'react';
import { NextFooterProps } from './type';
import classnames from 'classnames';
import 'rc-footer/assets/index.less';

export const NextFooter: FC<NextFooterProps> = ({ nextTheme, className, ...rest }) => {
  return <Footer {...{ className: classnames(nextTheme, className), ...rest }} />;
};

export default NextFooter;
