import React, { FC } from 'react';
import { Button } from 'antd';
import { NextButtonProps, AntButtonProps } from './NextButton.types';
import css from './styles.less';

console.log('css', css);

const AntButton: FC<AntButtonProps> = ({
  btnDisplay = 'flex',
  btnJustify = 'center',
  children = 'Button',
  customStyle,
  btnCls,
  ...rest
}) => {
  return (
    <span style={{ display: btnDisplay, justifyContent: btnJustify }} className={btnCls}>
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

export const NextButton: FC<NextButtonProps> = ({ disabled, children, next, ...rest }) => {
  const renderSwitch = () => {
    switch (next) {
      case 'warning':
        return (
          <AntButton {...{ type: 'primary', btnCls: !disabled && css.warning, disabled, ...rest }}>
            {children}
          </AntButton>
        );
      default:
        return <AntButton {...rest}>{children}</AntButton>;
    }
  };
  return <>{renderSwitch()}</>;
};

export default NextButton;
