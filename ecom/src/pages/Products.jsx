import React from "react";
import "./Products.css";
import ProductList from "../productdata.json";
import Product from "../components/product/Product";

const Products = () => {
  return (
    <div className="products-container">
      {ProductList.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};

export default Products;
