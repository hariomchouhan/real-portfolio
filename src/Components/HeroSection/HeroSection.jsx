import React, { useContext } from "react";
import "./HeroSection.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import MyPic from "../../assets/Home.png";
import { themeContext } from "../../ContextAPI/ThemeContext";

const HeroSection = () => {
  const {color} = useContext(themeContext)
  return (
    <div id="Hero">
      {/* left side */}
      <div className="hero-left">
        <div className="hero-name">
          <span>Hy! I Am</span>
          <span style={{color: `${color}`}}>Hariom Chouhan</span>
          <span>
            Frontend Developer with High level of Experience in Web Designing
            and Development, producing the Quality work.
          </span>
        </div>

        <div className="hero-icons">
          <Link to="https://github.com/hariomchouhan">
            <AiFillGithub style={{color: `${color}`}} />
          </Link>
          <Link to="https://www.linkedin.com/in/hariom-chouhan-ab6b7620a">
            <AiFillLinkedin style={{color: `${color}`}} />
          </Link>
        </div>
      </div>

      {/* right side */}
      <div className="hero-right">
        <img src={MyPic} alt="Hariom Chouhan" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
