import React from "react";
import './Header.css'
import Toggle from "../Toggle/Toggle";

const Header = () => {
  return (
    <div id="Header">
      <div className="header">
        <div className="header-text">
          <p className="h-text">Hari ॐ</p>
          <Toggle />
        </div>

{/* <div className="h-btn"> */}
        <button className="btn h-btn">Contact</button>
{/* </div> */}
      </div>
    </div>
  );
};

export default Header;
