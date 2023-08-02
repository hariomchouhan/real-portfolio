import React, { useContext } from "react";
import "./Resume.css";
import { themeContext } from "../../ContextAPI/ThemeContext";
import resume from "./resume.pdf";

const Resume = () => {
  const skillsData = [
    "React",
    "JavaScript",
    "HTML 5",
    "CSS 3",
    "Node",
    "Express",
    "Mongo DB",
    "TailwindCSS",
    "Bootstrap",
    "Git",
    "Figma",
  ];
  const { color, boxShadow } = useContext(themeContext);
  return (
    <div className="Resume">
      {/* left side */}
      <div className="r-left">
        <h2 className="r-name">
          <span>My</span> <span style={{ color: `${color}` }}>Skills</span>
        </h2>
        <h2 className="r-name">
          <span>&</span> <span style={{ color: `${color}` }}>Eduction</span>
        </h2>
        <a href={resume} download>
          <button
            className="btn r-btn"
            style={{ background: `${color}`, boxShadow: `${boxShadow}` }}
          >
            Download Resume
          </button>
        </a>
      </div>

      {/* right side */}
      <div className="r-right">
        <div className="r-card">
          {skillsData.map((data, index) => (
            <span key={index}>{data}</span>
          ))}
        </div>

        <div className="r-line line" style={{ background: `${color}` }}></div>
        <p className="college">
          Bachelor in Technology in Computer Science Of Information Technology
          Engineering : <span style={{ color: `${color}` }}>7.59 CGPA</span>{" "}
          Acropolis Institute of technology and Research, Indore (M.P)
        </p>
      </div>
    </div>
  );
};

export default Resume;
