import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductProvider from "./context/products";
import { CartProvider } from "./context/cart";
import { NavbarProvider } from "./context/navbar";

ReactDOM.render(
  <ProductProvider>
    <CartProvider>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </CartProvider>
  </ProductProvider>,

  document.getElementById("root")
);
