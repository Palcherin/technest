import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'
import './Components.css'


export const Homepic = () => {
  return (
    <div className='homepic-container'>
        <div className="homepic-content">
      <h1>Achierve Your Business Vision With A Proffessional Web APP</h1>
      <p>We develop/desin Webs and Web solutions usin <br></br><span>Reactjs,Nextjs,Photoshop,Sprinboot and more</span> </p>
      <div class="diamond">
        <p>Software development
            Web desin
            web maintainin
            web development
            App development
        </p>
        <div className='stars'>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
        <p>10 reviews</p>
        <Link to="/contact">
            <button className='btn'>Talk To Us</button></Link>
        </div>  
        </div>
        <div className='homepic-photo'>
          <img src='https://teacode.io/wp-content/uploads/2023/06/PSD-7-1-600x450.png' alt='Homepic'/>
        </div>
    </div>
  )
}
