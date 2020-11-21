import { IconType, NotificationPlacement } from 'antd/es/notification';

interface CustomNoti {
  message?: React.ReactNode;
  description?: React.ReactNode;
  btn?: React.ReactNode;
  key?: string;
  onClose?: () => void;
  duration?: number | null;
  icon?: React.ReactNode;
  placement?: NotificationPlacement;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  readonly type?: IconType;
  onClick?: () => void;
  top?: number;
  bottom?: number;
  getContainer?: () => HTMLElement;
  closeIcon?: React.ReactNode;
}

export enum Msg {
  // * --------------- subscribe email ---------------
  subscribeSuccess = 'Subscribed successfully!',
  subscribeErr = 'Subscribed successfully!',
  subscribeDes = 'Your email has been subscribed successfully. We will send you interested news vai email box.',

  // * --------------- submitContact ---------------
  submitContactSuccess = 'Submitted successfully!',
  submitContactSuccessDesc = 'Thanks for contacting us through our website! We will contact you shortly.',
}

type NextTypes = 'subscribeSuccess' | 'subscribeErr' | 'submitContactSuccess';

export interface INotiType extends CustomNoti {
  type?: IconType;
  nextTypes?: NextTypes;
}
