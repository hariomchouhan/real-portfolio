import React from "react";
import "./HeroSection.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import MyPic from "../../assets/Home.png";

const HeroSection = () => {
  return (
    <div id="Hero">
      {/* left side */}
      <div className="hero-left">
        <div className="hero-name">
          <span>Hy! I Am</span>
          <span>Hariom Chouhan</span>
          <span>
            Frontend Developer with High level of Experience in Web Designing
            and Development, producing the Quality work.
          </span>
        </div>

        <div className="hero-icons">
          <Link to="https://github.com/hariomchouhan">
            <AiFillGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/hariom-chouhan-ab6b7620a">
            <AiFillLinkedin />
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
