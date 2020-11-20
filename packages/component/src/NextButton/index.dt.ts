import { ButtonProps } from 'antd/lib/button';
import * as CSS from 'csstype';

export type btnType = 'warning';

export interface NextButtonProps extends ButtonProps {
  next?: btnType;
  children?: React.ReactNode;
  btnDisplay?: 'flex' | 'block';
  btnJustify?: CSS.Property.AlignContent;
  btnCls?: any;

  customStyle?: {
    textColor?: CSS.Property.Color;
    backgroundColor?: CSS.Property.BackgroundColor;
  };
}
