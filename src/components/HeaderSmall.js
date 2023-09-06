import React from "react";
import "../css/HeaderSmall.css";
import "../css/Props.css";

import logoSmall from "../sources/logo-small.svg";
import MenuIcon from "@mui/icons-material/Menu";

function HeaderSmall() {
  return (
    <div className="header fixed flex center row">
      <MenuIcon className="menu__icon cursor" />
      <a href="#" className="logo">
        <img src={logoSmall} alt="" />
      </a>
      <div className=""></div>
    </div>
  );
}

export default HeaderSmall;
