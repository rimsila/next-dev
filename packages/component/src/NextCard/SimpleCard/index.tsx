import React, { FC } from 'react';
import { SimpleCardProps } from './type';
import classnames from 'classnames';
import './styles.less';

export const NextBlogCard: FC<SimpleCardProps> = ({
  data = {},
  nextTheme,
  width,
  alt,
  ...rest
}) => {
  const { title } = data;
  return (
    <>
      <div className={classnames('next_blog_card', alt && 'alt')}>
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg")',
            }}
          />
          <ul className="details">
            <li className="author">
              <a href="#">John Doe</a>
            </li>
            <li className="date">Aug. 24, 2015</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Code</a>
                </li>
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          {title && <h1>{title}</h1>}
          <h2>Opening a door to the future</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto
            obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam.
            Veritatis, sit.
          </p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default NextBlogCard;
