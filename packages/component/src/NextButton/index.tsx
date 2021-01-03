import React, { FC, memo } from 'react';
import { Button } from 'antd';
import { NextButtonProps } from './type';
import classnames from 'classnames';

export const NextButton: FC<NextButtonProps> = ({
  nextTheme,
  btnDisplay = 'flex',
  btnJustify = 'center',
  customStyle,
  btnCls,
  style,
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
      className={classnames(!disabled && nextTheme && nextTheme, btnCls)}
    >
      <Button
        disabled={Boolean(rest.loading)}
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
