import React from "react";
import "./Portfolio.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projectData = [
    {
      img: project1,
      title: "Project - 1",
      link: "https://google.com"
    },
    {
      img: project2,
      title: "Project - 2",
      link: "https://facebook.com"
    },
    {
      img: project3,
      title: "Project - 3",
      link: "https://twitter.com"
    },
    {
      img: project4,
      title: "Project - 4",
      link: "https://instagram.com"
    },
  ];
  return (
    <div className="portfolio">
        <h2 className="p-heading"><span>Project</span> <span>Portfolio</span></h2>
        <div className="line"></div>
        <div className="p-box">
            {
                projectData.map((data) => (
                      <Link to={data.link} className="p-card">
                        <img src={data.img} alt="" className="p-image" />
                        <p className="p-title">{data.title}</p>
                        </Link>
                ))
            }
        </div>
    </div>
  );
};

export default Portfolio;
