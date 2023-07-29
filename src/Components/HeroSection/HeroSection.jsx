import React from "react";
import "./HeroSection.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import MyPic from "../../assets/Home.png";
import glassesimoji from "../../assets/glassesimoji.png";

const HeroSection = () => {
  return (
    <div id="Hero">
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
          <Link to="https://github.com/hariomchouhan" target="_blank">
            <AiFillGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/hariom-chouhan-ab6b7620a"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <img src={MyPic} alt="Hariom Chouhan" width={350} height={200} />
        <img src={MyPic} alt="" width={350} height={300} />
        <img src={glassesimoji} alt="" />
      </div>

      
    </div>
  );
};

export default HeroSection;
