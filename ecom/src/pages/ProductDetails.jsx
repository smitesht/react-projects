import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductList from "../productdata.json";
import "./ProductDetails.css";
import FieldTitleValue from "../components/utils/FieldTitleValue";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let p = ProductList.filter((data) => {
      return data.id === id;
    });

    setProduct(p[0]);
  }, []);

  return (
    <section className="product-details-container">
      <picture className="pd-image-wrapper">
        <img className="pd-image" src={product.image} />
      </picture>
      <article className="prod-detail-data">
        <h2 className="title">{product.name}</h2>
        <FieldTitleValue title="Brand" value={product.company} />
        <FieldTitleValue title="Category" value={product.category} />
        <FieldTitleValue title="Price" value={"$" + `${product.price}`} />
        <Link className="btn">Add To Cart</Link>
        <p className="prod-desc">{product.description}</p>
      </article>
    </section>
  );
};

export default ProductDetails;
