import React from 'react';
import { Button } from 'antd';
import { useIntl, enUS } from '../../../provider/src';
import { FormProps } from 'antd/lib/form';

//* ----------------  props type --------------- */
interface IProp extends FormProps {
  styleName?: any;
  headerStyle?: any;
  itemStyle?: any;
  footerStyle?: any;
  customContent?: any;
}

const PriceItem1 = ({ styleName, headerStyle, itemStyle, footerStyle, customContent }: IProp) => {
  const { getMessage } = useIntl();

  return (
    <div className={`${styleName}`}>
      <div className={`${headerStyle}`}>
        <h2 className="gx-price">
          <i className="icon icon-halfstar" />
          25
        </h2>
        <p className="gx-letter-spacing-base gx-text-white gx-text-uppercase gx-mb-0">
          {getMessage('pricingTable_personal', enUS.pricingTable_personal)}
        </p>
      </div>

      <div className={`${itemStyle}`}>
        {customContent || (
          <ul className="gx-package-items">
            <li>
              <i className="icon icon-translation" />
              <span>
                {getMessage('pricingTable_easyTranslation', enUS.pricingTable_easyTranslation)}
              </span>
            </li>
            <li>
              <i className="icon icon-font" />
              <span>
                {getMessage(
                  'pricingTable_awesomeGoogleFonts',
                  enUS.pricingTable_awesomeGoogleFonts,
                )}
              </span>
            </li>
            <li>
              <i className="icon icon-hotel-booking" />
              <span>
                {getMessage(
                  'pricingTable_hotelBookingSystem',
                  enUS.pricingTable_hotelBookingSystem,
                )}
              </span>
            </li>
            <li>
              <i className="icon icon-sent" />
              <span>
                {getMessage(
                  'pricingTable_emailComposeInterface',
                  enUS.pricingTable_emailComposeInterface,
                )}
              </span>
            </li>
            <li>
              <i className="icon icon-location" />
              <span>
                {getMessage('pricingTable_locationFinderApp', enUS.pricingTable_locationFinderApp)}
              </span>
            </li>
          </ul>
        )}
        <div className="gx-package-footer">
          <Button type="primary" className={`${footerStyle}`}>
            {getMessage('pricingTable_buyNow', enUS.pricingTable_buyNow)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceItem1;
