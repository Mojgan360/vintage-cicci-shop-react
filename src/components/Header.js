import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";

export default function Header() {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="logo" className="logoTest" />

        <nav>
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
              <ul>
                <li>
                  <Link to="/cars" className="link-header">
                    computer
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-header">
                    camera
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-header">
                    phone
                  </Link>
                  <ul>
                    <li>
                      <Link to="/" className="link-header">
                        smart phone
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link-header">
                        klassik phone
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
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
    </header>
  );
}
