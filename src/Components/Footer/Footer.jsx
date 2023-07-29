import React from 'react'
import './Footer.css';
import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (<>
        <div className='line f-line'></div>
    <div className='Footer'>
      <p>@ 2023, All Right Reserved</p>
      <p className='myname'>Designed by Hariom Chouhan</p>
      <div>
        <Link to='https://github.com/hariomchouhan'><AiOutlineLinkedin/></Link>
        <Link to='https://www.linkedin.com/in/hariom-chouhan-ab6b7620a'><AiFillGithub/></Link>
      </div>
    </div>
    </>
  )
}

export default Footer
