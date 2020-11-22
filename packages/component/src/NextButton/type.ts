import { ButtonProps } from 'antd/es/button';
import * as CSS from 'csstype';

export const btnType = {
  success: 'success',
  warning: 'warning',
  black: 'black',
  error: 'error',
  pink_base: 'pink_base',
  volcano_base: 'volcano_base',
  cyan_base: 'cyan_base',
  cyan_4: 'cyan_4',
  cyan_8: 'cyan_8',
  purple_base: 'purple_base',
};

//* get object type from arr
// function asLiterals<T extends number>(arr: T[]): T[] {
//   return arr;
// }
// const spacing = asLiterals([...Array(10).keys()]);
// type Spacing = { [K in typeof spacing[number]]: string };
// export type NewSpacing = keyof Spacing;

export const btnTypeArr = Object.keys(btnType);

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
