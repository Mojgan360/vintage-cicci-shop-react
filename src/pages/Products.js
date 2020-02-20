import React from "react";
import PaginatedProducts from "../components/Products/PaginatedProducts";
import Filters from "../components/Products/Filters";

import { productContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";

export default function Products() {
  const { loading, products, sorted } = React.useContext(productContext);
  //console.log(products);
  if (loading) {
    return <Loading />;
  } else {
    // return <ProductList title="our products" products={sorted} />;
    return (
      <>
        <Filters />
        <PaginatedProducts />
      </>
    );
  }
}
