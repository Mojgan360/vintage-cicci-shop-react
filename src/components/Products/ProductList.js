import React from "react"; //component/ProductList.js
import Product from "./Product";

export default function ProductList({ title, products }) {
  return (
    <section className="section">
      <h1 className="section-title">{title}</h1>

      <div className="products-center">
        {products.map((item, index) => {
          return <Product key={index} {...item} />;
        })}
      </div>
    </section>
  );
}
