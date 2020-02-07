import React from "react";
import logo from "../assets/logo1.svg";
import { Link } from "react-router-dom";

import MenuItemLarge from "./MenuItemLarge";
import MenuItemsmall from "./MenuItemsmall";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <MenuItemsmall />

      <MenuItemLarge />
    </header>
  );
}
