import React, { useContext } from "react";
import "./About.css";
import { themeContext } from "../../ContextAPI/ThemeContext";
// import { BsFillPhoneFill } from "react-icons/bs";
// import { AiOutlineMail } from "react-icons/ai";
// import { CiLocationOn } from "react-icons/ci";

const About = () => {
  const { color } = useContext(themeContext);
  return (
    <div id="About">
      <h2 className="a-heading">
        <span>About</span> <span style={{ color: `${color}` }}>Me</span>
      </h2>
      <div className="line" style={{ background: `${color}` }}></div>
      <div className="a-box">
        <div className="a-left">
          <p className="para">
            <span>My</span> name is{" "}
            <span style={{ color: `${color}` }}>Hariom Chouhan</span> an expert
            in Web development. I have over 7 project experiences within the
            journey. My specialty is in React, and creating attractive
            Responsive Websites and web apps using React, TailwindCSS, CSS,
            HTML, Bootstrap, Node, MongoDB, and Express.
          </p>
        </div>

        {/* <div className="a-right">
          <div className="a-card">
            <div className="a-card-content">
              <BsFillPhoneFill />
              <p className="a-title">Phone: </p>
              <p className="a-value">+91 97709 94821</p>
            </div>
          </div>
          <div className="a-card">
            <div className="a-card-content">
              <AiOutlineMail />
              <p className="a-title">Email: </p>
              <p className="a-value">hariomchouhan430@gmail.com</p>
            </div>
          </div>
          <div className="a-card">
            <div className="a-card-content">
              <CiLocationOn />
              <p className="a-title">Location: </p>
              <p className="a-value">Indore, MP, India</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
