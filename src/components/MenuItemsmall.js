import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import styled from "styled-components";

export default function MenuItemsmall() {
  const [isToggled, setToggled] = React.useState(false);

  const toggledIcon = () => {
    setToggled(!isToggled);
  };

  console.log(isToggled);
  return (
    <div className="menu_s">
      <button
        type="button"
        className="faAlignLeft"
        // className={isToggled ? "faAlignLeft" : "displayIsNone"}
        onClick={toggledIcon}
      >
        <FaAlignLeft className="faAlignLeft" />
      </button>
      <SideBarWrapper show={isToggled}>
        <ul onClick={toggledIcon}>
          <li>
            <Link to="/" className="sidebar-link">
              home
            </Link>
            <Link to="/about" className="sidebar-link">
              about
            </Link>
          </li>
        </ul>
      </SideBarWrapper>
    </div>
  );
}
const SideBarWrapper = styled.nav`
  background: white;
  position: fixed;
  z-index: 1;
  top: 130px;
  left: 0;
  width: 100%;
  height: 100%;
  border-right: 5px solid #ccc;
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: red;
    padding: 0.5rem 1.5rem;
    /* background: transparent; */
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    text-decoration: none;
    background: blue;
    color: green;
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }

  @media (min-width: 576px) {
    /* width: 20rem; */
  }
`;
