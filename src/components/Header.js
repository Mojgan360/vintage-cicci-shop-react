import React from "react";

import MenuItemLarge from "./MenuItemLarge";
import MenuItemsmall from "./MenuItemsmall";

export default function Header() {
  return (
    <header>
      <MenuItemsmall />
      <MenuItemLarge />
    </header>
  );
}
