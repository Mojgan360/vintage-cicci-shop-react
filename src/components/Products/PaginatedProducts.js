import React from "react";
import { productContext } from "../../context/products";
import ProductList from "./ProductList";

const PaginatedProducts = () => {
  const { sorted, page, changedPage } = React.useContext(productContext);

  if (sorted[page]) {
    return (
      <>
        <ProductList products={sorted[page]} />
        {sorted.length > 1 && (
          <article className="pagination-buttons">
            {/* prevs button */}
            {sorted.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => changedPage(index)}
                  className={`page-btn ${page === index && "page-btn-current"}`}
                >
                  {index + 1}
                </button>
              );
            })}
            {/* next button */}
          </article>
        )}
      </>
    );
  } else {
    return (
      <h3 className="search-errors">
        unfortunately your serach query did not return any products{" "}
      </h3>
    );
  }
};

export default PaginatedProducts;
