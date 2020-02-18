import React from "react";

import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";
import { UserContext } from "../context/user";
import LoginLink from "../components/LoginLink";

import CartLink from "../components/Cart/CartLink";

export default function MenuItemLarge() {
  const { user } = React.useContext(UserContext);
  return (
    <div>
      <div className="large-menu">
        <img src={logo} alt="logo" />

        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/about">about</Link>
            </li>
            {user.token && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
            <LoginLink />
            <CartLink />
          </ul>
        </nav>
      </div>
    </div>
  );
}
