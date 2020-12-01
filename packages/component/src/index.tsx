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
export { default as ResetPassword } from './Auth/ResetPassword';
export { default as NextSignUp } from './Auth/SignUp';
export { default as NextLockScreen } from './Auth/LockScreen';
export { default as PricingTable1 } from './pricingTable/pricing1';
export { default as PricingTable2 } from './pricingTable/pricing2';
export { default as PricingTable3 } from './pricingTable/pricing3';

interface IWetrialComponentProps {
  /**
   * Font icon file address
   */
  iconFontUrl: string | string[];
}

export const initComponent = (props: IWetrialComponentProps) => {
  configIconUrl(props.iconFontUrl);
};