import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { FaShoppingCart } from "react-icons/fa";

export default function CartLinkSmall() {
  const { cartItems } = React.useContext(CartContext);
  return (
    <div className="cart-link-container-s  ">
      <Link to="/cart">
        {" "}
        <span>
          <FaShoppingCart className="FaShoppingCart-s" />
        </span>
      </Link>
      <span className="cart-link-total-s">{cartItems}</span>
    </div>
  );
}
