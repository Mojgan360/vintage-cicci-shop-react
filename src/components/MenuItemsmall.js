import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import logo from "../assets/logo1.svg";
import CartLinkSmall from "./Cart/CartLinkSmall";

export default function MenuItemsmall() {
  const [isToggled, setToggled] = React.useState(false);

  const toggledIcon = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="menu_s wrapMenu">
      <div>
        <button className="btn-faAlignLeft" type="button" onClick={toggledIcon}>
          <FaBars className="faAlignLeft" />
        </button>
      </div>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="sideWrapper">
        <SideBarWrapper show={isToggled} onClick={toggledIcon}>
          <ul>
            <li>
              <Link to="/" className="sidebar-link">
                home
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/products" className="sidebar-link">
                our products
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about" className="sidebar-link">
                about
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/login" className="sidebar-link">
                login
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/cart" className="sidebar-link">
                cart
              </Link>
            </li>
          </ul>
        </SideBarWrapper>
      </div>
      <span>
        <CartLinkSmall />
      </span>
    </div>
  );
}
const SideBarWrapper = styled.nav`
  background: var(--primaryColor);
  position: fixed;
  z-index: 1;
  top: 55px;
  right: 100px;
  left: 0;
  width: 100%;
  height: 45%;
  border-right: 5px solid var(-mainRed);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .sidebar-link {
    margin-top: 15px !important;

    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;

    color: var(--offWhite);
    padding: 0.5rem 1.5rem;
    /* background: transparent; */
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    text-decoration: none;
    background: var(--offWhite);
    color: var(--promaryColor);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }

  @media (min-width: 576px) {
    /* width: 20rem; */
  }
`;
