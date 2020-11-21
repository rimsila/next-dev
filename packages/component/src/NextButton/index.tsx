import React, { FC } from 'react';
import { Button } from 'antd';
import { NextButtonProps } from './index.dt';
import css from './styles.less';
import classnames from 'classnames';

export const NextButton: FC<NextButtonProps> = ({
  btnDisplay = 'flex',
  btnJustify = 'center',
  children = 'Button',
  customStyle,
  btnCls,
  disabled,
  next,
  style,
  mr,
  ml,
  ...rest
}) => {
  return (
    <span
      style={{
        display: btnDisplay,
        justifyContent: btnJustify,
      }}
      className={classnames(
        (!disabled && next && css[`${next}`]) || '',
        mr && css[`mr${mr}`],
        ml && css[`ml${ml}`],
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

export default NextButton;
