import React, { useContext } from "react";
import './Header.css'
// import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../ContextAPI/ThemeContext";

const Header = () => {
  const {color} = useContext(themeContext)
  return (
    <div id="Header">
          <p className="h-text" style={{color: `${color}`}}>Hari ॐ</p>
          {/* <Toggle /> */}
    </div>
  );
};

export default Header;
