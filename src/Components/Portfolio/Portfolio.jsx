import React, { useContext } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { themeContext } from "../../ContextAPI/ThemeContext";
import { projectData } from "../../Data/ProjectData";

const Portfolio = () => {
  const { color } = useContext(themeContext);
  return (
    <div className="portfolio">
      <h2 className="p-heading">
        <span>Project</span>{" "}
        <span style={{ color: `${color}` }}>Portfolio</span>
      </h2>
      <div className="line" style={{ background: `${color}` }}></div>
      <div className="p-box">
        {projectData.map((data, index) => (
          <Link key={index} to={data.link} className="p-card">
            <img src={data.img} alt="" className="p-image" draggable="false" />
            <p className="p-title" style={{ color: `${color}` }}>
              {data.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
