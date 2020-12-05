import React from 'react';

const WidgetHeader = ({ title, extra, styleName }: any) => {
  return (
    <h2 className={`gx-entry-title ${styleName}`}>
      {title}
      <span className="gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block">
        {extra}
      </span>
    </h2>
  );
};

export default WidgetHeader;
