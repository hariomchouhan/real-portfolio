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
        <button className="h-btn h-btn-text">Contact</button>
{/* </div> */}
      </div>
    </div>
  );
};

export default Header;
