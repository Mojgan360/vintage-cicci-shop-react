import React from "react"; //component/product.js
import { Link } from "react-router-dom";
export default function Product({ id, title, image, price }) {
  const url = image.url;
  return (
    <article className="product">
      <div className="img-container">
        <img src={url} alt="" />
        <Link to={`/products/${id}`}>{title}</Link>
      </div>
    </article>
  );
}
