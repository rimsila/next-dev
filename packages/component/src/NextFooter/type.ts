import { FooterProps } from 'rc-footer/es';

export const bgType = {
  bg_light: 'bg_light',
  bg_success: 'bg_success',
  bg_warning: 'bg_warning',
  bg_black: 'bg_black',
  bg_error: 'bg_error',
  bg_pink_base: 'bg_pink_base',
  bg_volcano_base: 'bg_volcano_base',
  bg_cyan_base: 'bg_cyan_base',
  bg_cyan_4: 'bg_cyan_4',
  bg_cyan_8: 'bg_cyan_8',
  bg_purple_base: 'bg_purple_base',
};

export const bgTypeArr = Object.keys(bgType);

export type IBgType = typeof bgType;
export type NextTheme = keyof IBgType;

export interface NextFooterProps extends FooterProps {
  children?: React.ReactNode;
  nextTheme?: NextTheme;
  className?: string;
}
