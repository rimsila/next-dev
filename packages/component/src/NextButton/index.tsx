import React, { FC, memo } from 'react';
import { Button } from 'antd';
import { NextButtonProps } from './type';
import css from './styles.less';
import classnames from 'classnames';

export const NextButton: FC<NextButtonProps> = ({
  next,
  btnDisplay = 'flex',
  btnJustify = 'center',
  customStyle,
  btnCls,
  style,
  mr,
  ml,
  mb = 2,
  mt,
  children,
  disabled,
  ...rest
}) => {
  return (
    <span
      style={{
        display: btnDisplay,
        justifyContent: btnJustify,
      }}
      className={classnames(
        !disabled && next && css[`${next}`],
        mr && css[`mr-${mr}`],
        ml && css[`ml-${ml}`],
        mb && css[`mb-${mb}`],
        mt && css[`mt-${mt}`],
      )}
    >
      <Button
        style={{
          color: customStyle?.textColor,
          backgroundColor: customStyle?.backgroundColor,
          borderColor: customStyle?.backgroundColor,
          ...style,
        }}
        {...rest}
      >
        {children}
      </Button>
    </span>
  );
};

export default memo(NextButton);