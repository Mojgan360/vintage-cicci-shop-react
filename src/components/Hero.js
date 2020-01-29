import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>i love vintage, i love Cicci</h1>
        <p>This is just for tutorial</p>
        {children}
      </div>
    </div>
  );
}
