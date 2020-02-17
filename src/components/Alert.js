import React from "react";
import { FaWindowClose } from "react-icons";
import { UserContext } from "../context/user";

export default function Alert() {
  const { alert, showAlert, hideAlert } = React.useContext(UserContext);

  let css = "alert-container";
  if (alert.show) {
    css += "  alert-show";
    if (alert.type === "danger") {
      css += "  alert-danger";
    }
  }
  return (
    <div className={css}>
      <p>{alert.show && alert.msg}...</p>
    </div>
  );
}
