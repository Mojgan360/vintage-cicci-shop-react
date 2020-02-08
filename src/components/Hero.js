import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Love Vintage.</h1>
        <p>Love Cicci ...</p>
        <p>Love Code...</p>

        {children}
      </div>
    </div>
  );
}
