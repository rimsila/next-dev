import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

export const InjectMassage = (props) => <FormattedMessage {...props} />;
export default injectIntl(InjectMassage);
