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
  btnContainerProps,
  mt,
  mb,
  ml,
  mr,
  ...rest
}) => {
  return (
    <div
      {...{
        style: {
          display: btnDisplay,
          justifyContent: btnJustify,
          ...btnContainerProps,
        },
        className: classnames(!disabled && nextTheme && nextTheme, btnCls),
      }}
    >
      <Button
        {...{
          disabled: Boolean(rest.loading),
          style: {
            color: customStyle?.textColor,
            backgroundColor: customStyle?.backgroundColor,
            borderColor: customStyle?.backgroundColor,
            ...style,
          },
          ...rest,
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default memo(NextButton);
