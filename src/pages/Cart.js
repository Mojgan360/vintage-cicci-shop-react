import React from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
// import localCart from "../utils/localCart";

import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import { Link } from "react-router-dom";

export default function Cart() {
  // let user = false;

  const { cart, total } = React.useContext(CartContext);
  const { user } = React.useContext(UserContext);
  // console.log(cart);
  // console.log(total);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section className="cart-items  section cart-box">
      <div>
        <h2>your cart</h2>
        {cart.map((item, index) => {
          return <CartItem key={index} {...item} />;
        })}
      </div>
      <h2>total: ${total}</h2>

      {user.token ? (
        <Link to="/checkout" className="btn btn-primary btn-block">
          checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-primary btn-block">
          login
        </Link>
      )}
    </section>
  );
}
