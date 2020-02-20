import React from "react";
import { productContext } from "../../context/products";
const Filters = () => {
  const {
    filters: { search, category, shipping, price },
    updateFilters,
    sorted
  } = React.useContext(productContext);
  return (
    <section className="filters-section">
      <h2 className="section-title">serach products</h2>
      <form className="filters-form">
        {/* 1 */}
        <div>
          {/* Start: search input */}
          <div className="form-group">
            <label htmlFor="search">search </label>

            <input
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={updateFilters}
              className="form-control"
            />
          </div>
          {/* End: search input */}
          {/* Start: category */}
          <div className="form-group">
            <label htmlFor="category">category</label>
            <select
              name="select"
              id="category"
              className="form-control"
              value={category}
              onChange={updateFilters}
            >
              <option value="all">all</option>
              <option value="phone">phone</option>
              <option value="camera">camera</option>
              <option value="computer">computer</option>
              <option value="radio">radio</option>
            </select>
          </div>

          {/* End: category */}

          {/* Srart: free-shipping */}
          <div className="form-grupp">
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor="shipping"> free shipping</label>
          </div>
          {/* End: free-shipping */}
        </div>

        {/* 2 */}
        <div className="price-group">
          <h2>price</h2>

          {/* all */}
          <label>
            <input
              type="radio"
              name="price"
              value="all"
              checked={price === "all"}
              onChange={updateFilters}
            />
            all
          </label>

          {/* 0-300 */}
          <label>
            <input
              type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={updateFilters}
            />
            $0 - $300
          </label>

          {/* 300-650 */}
          <label>
            <input
              type="radio"
              name="price"
              value="300"
              checked={price === 300}
              onChange={updateFilters}
            />
            $300 - $650
          </label>

          {/* 650 */}
          <label>
            <input
              type="radio"
              name="price"
              value="650"
              checked={price === 650}
              onChange={updateFilters}
            />
            over $650
          </label>
        </div>
      </form>
      <h6>total products: {sorted.flat().length}</h6>
    </section>
  );
};

export default Filters;
