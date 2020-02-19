import React from "react"; //component/product.js
import { Link } from "react-router-dom";
//impt
import PropTypes from "prop-types";
import imge from "../../assets/mainBcg.jpeg";

export default function Product({ id, title, price, image }) {
  return (
    <article className="product">
      <div className="img-container">
        <img src={image || imge} alt={title || "default title"} />
        <Link to={`/products/${id}`} className="btn btn-primary product-link">
          details
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{title || "default title"}</p>
        <p className="product-price">$ {price || 0}</p>
      </div>
    </article>
  );
}
Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};
