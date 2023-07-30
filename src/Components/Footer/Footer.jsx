import React, { useContext } from 'react'
import './Footer.css';
import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { themeContext } from '../../ContextAPI/ThemeContext';

const Footer = () => {
  const {color} = useContext(themeContext)
  return (<>
        <div className='line f-line' style={{background: `${color}`}}></div>
    <div className='Footer'>
      <p>@ 2023, All Right Reserved</p>
      <p className='myname'>Designed by <span style={{color: `${color}`}}>Hariom Chouhan</span></p>
      <div>
        <Link to='https://github.com/hariomchouhan'><AiOutlineLinkedin style={{color: `${color}`}}/></Link>
        <Link to='https://www.linkedin.com/in/hariom-chouhan-ab6b7620a'><AiFillGithub style={{color: `${color}`}}/></Link>
      </div>
    </div>
    </>
  )
}

export default Footer
