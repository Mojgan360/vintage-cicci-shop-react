import React, { useContext } from "react";
import { productContext } from "../context/products";
import Loading from "../components/Loading";
import productsList from "../components/Products/ProductList";

export default function Products() {
  const { loading, products } = React.useContext(productContext);
  console.log(products);

  return <h1>hello from products page </h1>;
}

// const response = React.useContext(productContext);
// const { loading, products } = React.useContext(productContext);
// console.log(products);
