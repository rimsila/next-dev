import { configIconUrl } from './IconFont';

export { default as IconFont } from './IconFont';
export { default as NextButton } from './NextButton';
export { default as MapItem } from './mapItem';
export { default as NextRow } from './NextRow';
export { default as NextBlogCard } from './NextCard/SimpleCard';
export { default as NextFooter } from './NextFooter';
export { NextCard } from './NextCard';
export { default as NotFound1 } from './NextError/NotFound1';
export { default as Error500 } from './NextError/Error500';
export * as mock from '../mock';
export * as NextStyle from './styles/index';

export { nextNotification } from './Notification';
export { InjectMassage } from './utils/IntlMessages';
export { default as ForgotPassword } from './Auth/ForgotPassword';
export { default as NextSignIn } from './Auth/SignIn';

interface IWetrialComponentProps {
  /**
   * Font icon file address
   */
  iconFontUrl: string | string[];
}

export const initComponent = (props: IWetrialComponentProps) => {
  configIconUrl(props.iconFontUrl);
};
