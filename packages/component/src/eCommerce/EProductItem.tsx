import React from 'react';
import { Button } from 'antd';

const EProductItem = ({ product, grid }: any) => {
  const { thumb, name, price, mrp, offer, variant, rating, description } = product;
  return (
    <div className={`gx-product-item  ${grid ? 'gx-product-vertical' : 'gx-product-horizontal'}`}>
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <span className="gx-link gx-grid-thumb-cover">
            <img alt="Remy Sharp" src={thumb} />
          </span>
        </div>
      </div>

      <div className="gx-product-body">
        <h3 className="gx-product-title">
          {name}
          <small className="gx-text-grey">{`, ${variant}`}</small>
        </h3>
        <div className="gx-d-flex">
          <h4>{price} </h4>
          <h5 className="gx-text-muted gx-px-2">
            <del>{mrp}</del>
          </h5>
          <h5 className="gx-text-success">{offer} off</h5>
        </div>
        <div className="gx-d-flex gx-mb-1">
          <strong className="gx-d-inline-block gx-ml-2">{rating}</strong>
        </div>
        <p>{description}</p>
      </div>

      <div className="gx-product-footer">
        <Button>addToCart</Button>

        <Button type="primary">readMore</Button>
      </div>
    </div>
  );
};

export default EProductItem;
