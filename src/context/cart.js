import React from "react";
import localCart from "../utils/localCart";

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(localCart);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(localCart);

  React.useEffect(() => {
    //effect: cart items
    //Sum of values in an object array

    let newCartItem = cart.reduce((total, cartItem) => {
      //console.log({ total, cartItem });
      return (total += cartItem.amount);
      //total is zero
    }, 0);
    //console.log(newCartItem);
    //cart total
    let newTotal = cart.reduce((total, cartItem) => {
      // console.log(total);
      total = cartItem.amount * cartItem.price;
      return total;
    }, 0);
    // console.log(newTotal);
    newTotal = parseFloat(newTotal.toFixed(2));
    console.log(newTotal);

    return () => {
      //cleanup
      setCartItems(newCartItem);
      setTotal(newTotal);
    };
  }, [cart]);

  //remove item
  const removeItem = id => {};
  //increase amount

  const increaseAmount = id => {};
  //decrease amount

  const decreaseAmount = id => {};
  //add item

  const addToCart = product => {};
  //clear cart

  const clearCart = () => {};

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
