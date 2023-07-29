import React from 'react'
import './Resume.css'

const Resume = () => {
    const skillsData = ["React", "JavaScript", "HTML 5", "CSS 3", "Node", "Express", "Mongo DB", "TailwindCSS", "Bootstrap", "Git", "Figma"];

  return (
    <div className='Resume'>

        {/* left side */}
      <div className="r-left">
      <h2 className='r-name'><span>My</span> <span>Skills</span></h2>
      <h2 className='r-name'><span>&</span> <span>Eduction</span></h2>
      </div>
     
        {/* right side */}
      <div className="r-right">
          <div className='r-card'>
        {
            skillsData.map((data) => (
                    <span>{data}</span>
                    ))
                }
                </div>

        <div className='r-line line'></div>
        <p className='college'>Bachelor in Technology in Computer Science Of Information Technology Engineering : <span>7.59 CGPA</span> Acropolis Institute of technology and Research, Indore (M.P)</p>
      </div>
    </div>
  )
}

export default Resume
