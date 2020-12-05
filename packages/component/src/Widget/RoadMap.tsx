import React from 'react';

import RoadMapItem from './RoadMapItem';

import CardBox from '../NextCard/CardBox/index';
import { mediaList } from '../../mock/widgetData';

const RoadMap = () => {
  return (
    <CardBox styleName="gx-card-full" heading="">
      <div className="gx-slick-slider">
        {mediaList.map((media, index) => (
          <RoadMapItem key={index} data={media} />
        ))}
      </div>
    </CardBox>
  );
};

export default RoadMap;
