import React from "react";
import { productContext } from "../../context/products";
import ProductList from "./ProductList";

import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const PaginatedProducts = () => {
  const { sorted, page, changedPage } = React.useContext(productContext);

  if (sorted[page]) {
    return (
      <>
        <ProductList products={sorted[page]} />
        {sorted.length > 1 && (
          <article className="pagination-buttons">
            {/* prevs button */}
            {page > 0 && (
              <button
                className="prev-page-btn"
                onClick={() => changedPage(page - 1)}
              >
                <FaAngleDoubleLeft />
              </button>
            )}
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
            {page < sorted.length - 1 && (
              <button
                className="next-page-btn"
                onClick={() => changedPage(page + 1)}
              >
                <FaAngleDoubleRight />
              </button>
            )}
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
