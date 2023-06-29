import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <div className='adress-section'>
            <h2>TechNest Ltd</h2>
            <p>Westpark, Westlands</p>
            <p>Nairobi City,Kenya</p>
            <p>Phone:+2575553455</p>
            <p>Email:technest@info.com</p>
            <p>web: www.technest.com</p>
        </div>
        <div className="sub-section">
          <h2>Subscribe to Technest's newslater</h2>
          <input type="text" placeholder="Email" />
          <button className='btn-lit'>Subscribe</button>

        </div>
        <div className='services-section'>
            <h2>Our Services</h2>
            <p>Web Desinin</p>
            <p>UI/UX Desinin</p>
            <p>Web Development</p>
            <p>Web Maintenance</p>
            <p>Software Development</p>
            <p>App Develipment</p>
        </div>
        <div className='social-section'>
            <h2>We are available on the socials</h2>
            <p>Reach out for proffessional assiatsance in any of our services ie.Web-development,web-maintanance,UI/UX desin and more</p>
            <FaFacebook className='footer-icon'/>
            <FaTwitter className='footer-icon'/>
            <FaLinkedin className='footer-icon'/>
            <FaInstagram className='footer-icon'/>
            
        </div>
          <hr></hr>
    <div className='copyriht'>
      <p>
        @{new Date().getFullYear()}Technest. All riht reserved
      </p>
    </div>
    </div>
  
    </>
  )
}
