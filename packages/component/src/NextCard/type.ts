import { ProCardProps } from '@ant-design/pro-card/es';

export const btnType = {
  light: 'light',
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

export const btnTypeArr = Object.keys(btnType);

export type BtnType = typeof btnType;
export type NextTheme = keyof BtnType;

export interface NextCardProps extends ProCardProps {
  children?: React.ReactNode;
  nextTheme?: NextTheme;
}
