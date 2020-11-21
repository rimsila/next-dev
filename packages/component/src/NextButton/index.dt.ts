import { ButtonProps } from 'antd/es/button';
import * as CSS from 'csstype';

export const btnType = {
  warning: 'warning',
  success: 'success',
  black: 'black',
  error: 'error',
  cyan_base: 'cyan_base',
  pink_base: 'pink_base',
  volcano_base: 'volcano_base',
  purple_base: 'purple_base',
};

function asLiterals<T extends number>(arr: T[]): T[] {
  return arr;
}
const spacing = asLiterals([...Array(10).keys()]);
type Spacing = { [K in typeof spacing[number]]: string };

export const btnTypeArr = Object.keys(btnType);

export type NewSpacing = keyof Spacing;
export type BtnType = typeof btnType;
export type NextBtnType = keyof BtnType;

export interface NextButtonProps extends ButtonProps {
  next?: NextBtnType;
  children?: React.ReactNode;
  btnDisplay?: 'flex' | 'block';
  btnJustify?: CSS.Property.AlignContent;
  btnCls?: any;
  mr?: number;
  ml?: number;
  mb?: number;
  mt?: number;
  customStyle?: {
    textColor?: CSS.Property.Color;
    backgroundColor?: CSS.Property.BackgroundColor;
  };
}
