import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { UserContext } from "../context/user";

export default () => {
  const height = 200;
  const scrollBackToUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };
  return (
    <button
      className={height > 100 ? "scroll-btn show-scroll-btn" : "scroll-btn"}
      onClick={scrollBackToUp}
    >
      <FaAngleDoubleUp />
    </button>
  );
};
