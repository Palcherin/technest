import React from 'react'
import './Components.css'
import {FaBars, FaDatabase,FaPython, FaJs, FaLaravel, FaNodeJs, FaPhp, FaReact, FaAndroid, FaFigma} from 'react-icons/fa'

export const Techused = () => {
  return (
    <div className='tech-container'>
      <h1>We Have A Team In Each Of The Followin</h1>
        <div className='tech'>
          <div className='tech-icon'><FaReact size={50}/></div>
            <div className='tech-icon'><FaJs  size={50}/></div>
            <div className='tech-icon'><FaPhp  size={50}/></div>
            <div className='tech-icon'><FaPython size={50}/></div>
            <div className='tech-icon'><FaFigma  size={50}/></div>
            <div className='tech-icon'><FaNodeJs  size={50}/></div>
            <div className='tech-icon'><FaDatabase  size={50}/></div>
 
            
        </div>
        <div className='more-info'>
          <h1>+80 <br/> projects completes </h1>
          <h1>+3 <br/> Years on market </h1>
          <h1>+5 <br/> Continets </h1>
          <h1>+30 <br/> Team mates </h1>

        </div>
    </div>
  )
}
