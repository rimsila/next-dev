import React from 'react';
import { Card } from 'antd';

const Widget = ({ title, children, styleName, cover, extra, actions }: any) => {
  return (
    <Card
      title={title}
      actions={actions}
      cover={cover}
      className={`gx-card-widget ${styleName}`}
      extra={extra}
    >
      {children}
    </Card>
  );
};

export default Widget;
