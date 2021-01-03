import { FooterProps } from 'rc-footer/es';

export const btnType = {
  btn_light: 'btn_light',
  btn_success: 'btn_success',
  btn_warning: 'btn_warning',
  btn_black: 'btn_black',
  btn_error: 'btn_error',
  btn_pink_base: 'btn_pink_base',
  btn_volcano_base: 'btn_volcano_base',
  btn_cyan_base: 'btn_cyan_base',
  btn_cyan_4: 'btn_cyan_4',
  btn_cyan_8: 'btn_cyan_8',
  btn_purple_base: 'btn_purple_base',
};

export const btnTypeArr = Object.keys(btnType);

export type BtnType = typeof btnType;
export type NextTheme = keyof BtnType;

export interface NextFooterProps extends FooterProps {
  children?: React.ReactNode;
  nextTheme?: NextTheme;
  className?: string;
}
