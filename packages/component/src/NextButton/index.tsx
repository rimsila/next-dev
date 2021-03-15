import React, { FC, memo } from 'react';
import { Button } from 'antd';
import { NextButtonProps } from './type';
import classnames from 'classnames';

export const NextButton: FC<NextButtonProps> = ({
  nextTheme,
  btnDisplay = 'flex',
  btnJustify = 'center',
  btnContainerCls,
  children,
  disabled,
  btnContainerProps,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  my = 0,
  mx = 0,
  ...rest
}) => {
  const mSpacing =
    (my && `${my}px 0 ${my}px 0`) ||
    (my && `0 ${mx}px 0 ${mx}px`) ||
    `${mt}px ${mr}px ${mb}px ${ml}px`;

  return (
    <div
      {...{
        className: classnames(!disabled && nextTheme, btnContainerCls),
        ...btnContainerProps,
        style: {
          display: btnDisplay,
          justifyContent: btnJustify,
          margin: mSpacing,
          ...btnContainerProps?.style,
        },
      }}
    >
      <Button
        {...{
          disabled: Boolean(rest.loading),
          ...rest,
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default memo(NextButton);
