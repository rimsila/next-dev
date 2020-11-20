import { ButtonProps } from 'antd/lib/button';
import * as CSS from 'csstype';

export interface AntButtonProps extends ButtonProps {
  btnDisplay?: 'flex' | 'block';
  btnJustify?: CSS.Property.AlignContent;
  btnCls?: any;

  customStyle?: {
    textColor?: CSS.Property.Color;
    backgroundColor?: CSS.Property.BackgroundColor;
  };
}

type btnType = 'default' | 'warning';
export interface NextButtonProps extends AntButtonProps {
  next?: btnType;
  children?: React.ReactNode;
}
