import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <article>
      <NavLink to={"/" + product.id} className="product-item">
        <picture className="image-wrapper">
          <img className="image" src={product.image} />
        </picture>
        <div className="product-info">
          <h3 className="title">{product.name}</h3>
          <div className="flex-row">
            <span className="company">{product.company}</span>
            <span className="category">{product.category}</span>
          </div>
          <h3 className="price">${product.price}</h3>
        </div>
      </NavLink>
    </article>
  );
};

export default Product;
