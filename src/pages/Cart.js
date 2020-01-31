import React from "react";
import { cartContext } from "../context/cart";

export default function Cart() {
  const { cart, total, cartItam } = React.useContext(cartContext);
  return <h1>hello from cart page.</h1>;
}
