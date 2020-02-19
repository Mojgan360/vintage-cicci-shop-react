import React from "react";
import reducer from "../context/reducer";

const CartContext = React.createContext();

function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}
// const reducer = (state, action) => {
//   return state;
// };

function CartProvider({ children }) {
  // const [cart, setCart] = React.useState(getCartFromLocalStorage());
  const [cart, dispatch] = React.useReducer(reducer, getCartFromLocalStorage());

  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  React.useEffect(() => {
    // local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    // cart items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
    // cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  //remove item
  const removeItem = id => {
    dispatch({ type: "REMOVE", payload: id });
  };

  //increase amount
  const increaseAmount = id => {
    dispatch({ type: "INCREASE", payload: id });
  };

  //decreade amount
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      dispatch({ type: "REMOVE", payload: id });
      return;
    }
    dispatch({ type: "DECREASE", payload: id });
  };

  //add item(product)
  // add to cart
  const addToCart = product => {
    let tmp = [...cart].find(item => item.id === product.id);
    if (tmp) {
      dispatch({ type: "INCREASE", payload: product.id });
    } else {
      dispatch({ type: "ADDTOCART", payload: product });
    }
  };

  //clear cart
  const clearCart = () => {
    dispatch({ type: "CLEARCART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
