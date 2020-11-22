import { configIconUrl } from './IconFont';

export { default as IconFont } from './IconFont';
export { default as NextButton } from './NextButton';
export { default as MapItem } from './mapItem';
export { default as NextRow } from './NextRow';

export { nextNotification } from './Notification';

interface IWetrialComponentProps {
  /**
   * Font icon file address
   */
  iconFontUrl: string | string[];
}

export const initComponent = (props: IWetrialComponentProps) => {
  configIconUrl(props.iconFontUrl);
};
