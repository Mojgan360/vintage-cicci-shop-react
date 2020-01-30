import React from "react";
import loadingImg from "../assets/loading.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h1>Loading....</h1>
      <img src={loadingImg} alt="loading gif" />
    </div>
  );
}
