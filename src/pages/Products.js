import React, { useContext } from "react";
import { productContext } from "../context/products";

export default function Products() {
  //console.log(React.useContext(productContext));
  // const response = React.useContext(productContext);
  const { loading, products } = React.useContext(productContext);

  return <h1>hello from products page</h1>;
}
