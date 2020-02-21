import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Work is still</h1>
        <p>........</p>
        <p>going on ...</p>

        {children}
      </div>
    </div>
  );
}
