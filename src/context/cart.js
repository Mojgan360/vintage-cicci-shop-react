// cart context
import React from "react";
import localCart from "../utils/localCart";
const cartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(localCart);
  const [total, setTotal] = React.useState(0);
  const [cartItam, setCartItam] = React.useState(0);

  return (
    <cartContext.Provider value={{ cart, total, cartItam }}>
      {children}
    </cartContext.Provider>
  );
}
export { cartContext, CartProvider };
