import { configIconUrl } from './IconFont';

interface IWetrialComponentProps {
  /**
   * Font icon file address
   */
  iconFontUrl: string | string[];
}

export const initComponent = (props: IWetrialComponentProps) => {
  configIconUrl(props.iconFontUrl);
};

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
export { default as CardBox } from './NextCard/CardBox';
export { default as TestimonialsBasic } from './Testimonials/Basic';
export { default as TestimonialClassic } from './Testimonials/Classic';
export { default as TestimonialStandard } from './Testimonials/Standard';
export { default as Callouts } from './callouts';
export { default as CardsListItem } from './listType/CardsListItem';
export { default as PlainListItem } from './listType/PlainListItem';
export { default as StripListItem } from './listType/StripListItem';
export { default as EproductItem } from './eCommerce/EProductItem';
export { default as AayurvedaCard } from './Widget/AayurvedaCard';
export { default as BuildingCard } from './Widget/BuildingCard';
export { default as DryFruit } from './Widget/DryFruit';
export { default as FlyingBird } from './Widget/FlyingBird';
