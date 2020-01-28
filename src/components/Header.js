import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              {" "}
              <Link to="/">home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">about</Link>
            </li>
            <li>
              {" "}
              <Link to="/products">products</Link>
            </li>
          </div>

          <div>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/cart">cart</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
