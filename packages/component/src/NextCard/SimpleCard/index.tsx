import React, { FC } from 'react';
import { SimpleCardProps } from './type';
import classnames from 'classnames';
import NextCard from '../index';
import css from './styles.less';

export const NextCardSimple: FC<SimpleCardProps> = ({ data, width, ...rest }) => {
  if (data) {
    const { title, extra, content, nextTheme } = data;

    return (
      <NextCard
        {...{
          title,
          extra,
          style: { minWidth: 100, width },
          bordered: true,
          headerBordered: true,
          ...rest,
        }}
        className={classnames(css[nextTheme])}
      >
        {content}
      </NextCard>
    );
  }
  return null;
};

export default NextCardSimple;
