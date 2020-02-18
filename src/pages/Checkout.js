import React from "react";
import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";
import EmptyCart from "../components/Cart/EmptyCart";
import submitOrder from "../strapi/submitOrder";
import { useHistory } from "react-router-dom";

export default function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
  const history = useHistory();
  //state values
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  let isEmpty = !name || alert.show;

  const handelSubmit = async e => {
    e.preventDefault();
  };
  if (cart.length < 1) return <EmptyCart />;
  return <h1>hello from checkout page</h1>;
}
