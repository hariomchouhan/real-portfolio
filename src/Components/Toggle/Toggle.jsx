import React, { useState } from 'react'
import './Toggle.css'
import {BiSolidSun} from 'react-icons/bi'
import {BsFillMoonFill} from 'react-icons/bs'

const Toggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }
  return (
    <div className='toggle' onClick={handleClick}>
       <BsFillMoonFill />
      <BiSolidSun />
      <div className="t-button"
      
      style = {darkMode? {left: '2px'} : {right: '2px'}}>
        
      </div>
    </div>
  )
}

export default Toggle
