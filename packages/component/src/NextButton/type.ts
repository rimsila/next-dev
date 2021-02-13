import { ButtonProps } from 'antd/es/button';
import * as CSS from 'csstype';

export const btnType = {
  btn_warning: 'btn_warning',
  btn_success: 'btn_success',
  btn_black: 'btn_black',
  btn_error: 'btn_error',
  btn_pink_base: 'btn_pink_base',
  btn_volcano_base: 'btn_volcano_base',
  btn_cyan_base: 'btn_cyan_base',
  btn_cyan_4: 'btn_cyan_4',
  btn_cyan_8: 'btn_cyan_8',
  btn_purple_base: 'btn_purple_base',
  btn_normal_color: 'btn_normal_color',
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
  nextTheme?: NextBtnType;
  children?: React.ReactNode;
  btnDisplay?: 'flex' | 'block';
  btnJustify?: CSS.Property.AlignContent;
  btnCls?: string;
  customStyle?: {
    textColor?: CSS.Property.Color;
    backgroundColor?: CSS.Property.BackgroundColor;
  };
  btnContainerProps?: CSS.Properties;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  my?: string | number;
  mx?: string | number;
}
