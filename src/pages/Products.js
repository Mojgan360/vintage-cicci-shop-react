// import React, { useContext } from "react"; page:products.js
import React from "react";

import { productContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";

export default function Products() {
  const { loading, products } = React.useContext(productContext);
  //console.log(products);
  if (loading) {
    return <Loading />;
  } else {
    return <ProductList title="our products" products={products} />;
  }
}
