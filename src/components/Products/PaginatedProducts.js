import React from "react";
import { productContext } from "../../context/products";
import ProductList from "./ProductList";

const PaginatedProducts = () => {
  const { sorted, page, changedPage } = React.useContext(productContext);

  return (
    <div>
      hello from PaginatedProducts
      <ProductList products={sorted} />
    </div>
  );
};

export default PaginatedProducts;
