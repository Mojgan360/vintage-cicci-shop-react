import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Love Vintage.</h1>
        <p>work is still</p>
        <p>going on ...</p>

        {children}
      </div>
    </div>
  );
}
