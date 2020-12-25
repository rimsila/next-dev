import React from 'react';

const CardBox = ({ heading, children, styleName, childrenStyle }: any) => {
  return (
    <div className={`gx-card ${styleName}`}>
      {heading && (
        <div className="gx-card-head">
          <h3 className="gx-card-title">{heading}</h3>
        </div>
      )}
      <div className={`gx-card-body ${childrenStyle}`}>{children}</div>
    </div>
  );
};

export default CardBox;
