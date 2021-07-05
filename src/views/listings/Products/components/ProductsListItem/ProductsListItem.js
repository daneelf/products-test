import React from "react";
import "./ProductsListItem.scss";

const ProductsListItem = ({ product }) => {
  return (
    <div className="listing-item">
      <div className="listing-item__img">
        <img src={product.image_url} alt={product.title} />
      </div>
      <div className="listing-item__info">
        <p className="info__name">{product.title}</p>
        <div className="line"></div>
        <div className="info__price">
          <p>
            <strong>{product.price}&euro;</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsListItem;
