import React, { FC } from 'react';
import { Button } from 'antd';
import { NextButtonProps } from './index.dt';
import css from './styles.less';

export const NextButton: FC<NextButtonProps> = ({
  btnDisplay = 'flex',
  btnJustify = 'center',
  children = 'Button',
  customStyle,
  btnCls,
  disabled,
  next,
  ...rest
}) => {
  return (
    <span
      style={{ display: btnDisplay, justifyContent: btnJustify }}
      className={(!disabled && next && css[`${next}`]) || ''}
    >
      <Button
        style={{
          color: customStyle?.textColor,
          backgroundColor: customStyle?.backgroundColor,
          borderColor: customStyle?.backgroundColor,
        }}
        {...rest}
      >
        {children}
      </Button>
    </span>
  );
};

export default NextButton;
