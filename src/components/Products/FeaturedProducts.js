import React from "react";
import { productContext } from "../../context/products";
import Loading from "../Loading";
import ProductList from "../Products/ProductList";

export default function FeaturedProducts() {
  const { loading, featured } = React.useContext(productContext);
  if (loading) {
    return <Loading />;
  } else {
    return <ProductList title="our featured products" products={featured} />;
  }
}
