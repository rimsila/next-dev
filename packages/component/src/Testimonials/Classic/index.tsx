import React from 'react';
import { Avatar, Rate } from 'antd';

interface IProps {
  testimonial: {
    content?: any;
    avatar?: any;
    name?: any;
    title?: any;
  };
}
const TestimonialClassic = ({ testimonial }: IProps) => {
  const { content, avatar, name, title } = testimonial;
  return (
    <div className="gx-classic-testimonial gx-slide-item">
      <Avatar src={avatar} alt="..." />
      <h3 className="gx-title">{name}</h3>
      <small className="gx-post-designation">{title}</small>

      <div className="gx-star-rating gx-my-2">
        <Rate disabled defaultValue={2} />
      </div>
      <p className="gx-description">{content}</p>
    </div>
  );
};

export default TestimonialClassic;
