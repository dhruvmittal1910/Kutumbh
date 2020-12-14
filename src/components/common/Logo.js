import React from "react";
import logo from "./../../images/LOGO.jpg";

export default function Logo() {
  return (
    <>
      <div className="logocontainer">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div>
          <p className="logo-heading">Kutumbh</p>
        </div>
      </div>
    </>
  );
}
