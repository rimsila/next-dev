import React from 'react';
import { Avatar } from 'antd';

interface IProps {
  testimonial: {
    content?: any;
    avatar?: any;
    name?: any;
    title?: any;
  };
}
const TestimonialsBasic = ({ testimonial }: IProps) => {
  const { content, avatar, name, title } = testimonial;
  return (
    <div className="gx-testimonial">
      <span className="gx-testimonial-quote">
        <i className="icon icon-quote-backward" />{' '}
      </span>
      <blockquote>{content}</blockquote>
      <Avatar className="gx-size-120 gx-mb-3" alt="avatar" src={avatar} />
      <h5 className="gx-text-primary">{name}</h5>
      <small className="gx-description">{title}</small>
    </div>
  );
};

export default TestimonialsBasic;
