import React from "react";
import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";
import { Link } from "react-router-dom";

export default function LoginLink() {
  const { user, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);
  if (user.token) {
    return (
      <button
        className="logout"
        onClick={() => {
          userLogout();
          clearCart();
        }}
      >
        <li>logout</li>
      </button>
    );
  } else {
    return (
      <Link className="login " to="/login">
        login
      </Link>
    );
  }
}
