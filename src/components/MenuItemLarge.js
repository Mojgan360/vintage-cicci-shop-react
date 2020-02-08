import React from "react";

import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";

export default function MenuItemLarge() {
  return (
    <div>
      <div className="   large-menu">
        <img src={logo} alt="logo" />

        <nav className=" larg-nav ">
          <ul>
            <li>
              <Link to="/" className="link-header">
                home
              </Link>
            </li>
            <li>
              <Link to="/products" className="link-header">
                Products
              </Link>
            </li>
            <li>
              <Link to="/login" className="link-header">
                login
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-header">
                about
              </Link>
            </li>
            <li>
              <Link to="/cart" className="link-header">
                cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
