import React from "react";

const CartContext = React.createContext();

function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

function CartProvider({ children }) {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(getCartFromLocalStorage());

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
    setCart([...cart].filter(item => item.id !== id));
  };

  //increase amount
  const increaseAmount = id => {
    const cartItem = [...cart].map(item => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(cartItem);
  };

  //decreade amount
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
      return;
    }

    const _newCart = [...cart].map(item => {
      return item.id === id
        ? { ...item, amount: item.amount - 1 }
        : { ...item };
    });
    setCart(_newCart);
  };

  //add item(product)
  // add to cart
  const addToCart = product => {
    console.log(product);
    const { id, title, image, price } = product;
    const item = [...cart].find(item => item.id === id);
    if (item) {
      increaseAmount(id);
      return;
    } else {
      const newItem = { id, title, image, price, amount: 1 };
      const newcartItem = [...cart, newItem];
      setCart(newcartItem);
    }
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
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
