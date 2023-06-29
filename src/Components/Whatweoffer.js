import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Components.css'

export const Whatweoffer = () => {
  return (
    <div className='wwo-container'>
        
        <div className='wto-section'>
        <div className='wto-container'>
            <div className='intr-section'>
            <div className='wto-container'>

                <h1>Let's Talk About Your Project</h1>
                <p>At Technest we listen to your project proporsal,advice on available options
                of tech <br/> to be used and decide on the most appropriate one considerin all possible 
                factors. We then help you develop <br/>the perfect project for whatever purpose you intended.We are available in all social medial platforms
            </p>
            </div>
            <div className='portfolio-pic'>
            <img  src="https://teacode.io/wp-content/uploads/2022/10/Phone-and-Laptop-Clay-Mockup-16-e1667245665180-compress.png" alt=""/>
            </div>
            </div>
            <Link to="/contact">
            <button className='btn'>Talk To Us</button></Link>
            </div>
            <h1>Contact Technest For Any Of Below Services</h1>
            <div className='services-offered'>
                
                <div className='web-desining'>
                    <h2>Web Desining</h2>
                    <img src='assets/pic8.jpg'/>
                    <p>Our Web desining team have the best possible skills you will need in your project. We use Photoshop and other desining tools in the market</p>
                    <button className='button'>Read More...</button>
                </div>
                <div className='web-development'>
                <h2>Web Development</h2>
                <img src='assets/picc.jpg'/>
                <p>TechNest developers are highly experienced in Reactjs, Nextjs, PhP, MySQL & JS to provide you with the best web services</p>
                <button className='button'>Read More...</button>
                </div>
                <div className='web-maintenace'>
                <h2>Web Maintenance</h2>
                <img src='assets/picd.jpg'/>
                <p>If you are lookin to update,maintain or improve your web security, TechNest have ateam qulified to provide you with the best web services</p>
                
                <button className='button'>Read More...</button>
                </div>
                <div className='uiux-desinin'>
                <h2>UI/UX Desining</h2>
                <img src='assets/pic9.jpg'/>
                <p>We know how importance user-interface is to the flourishin of your business. Thats why we provide you with the best UI/UX desin available on the market</p>
                <button className='button'>Read More...</button>
                
                </div>
                <div className='software-development'>
                <h2>Software Develipment</h2>
                <img src='assets/pice.jpg'/>
                <p>Do you have an idea about a business,oppotunity or service? TechNest will turn that into rearility by our software developers</p>
                <button className='button'>Read More...</button>
                </div>
                <div className='data-science'>
                <h2>Data science</h2>
                <img src='assets/pic3.jpg'/>
                <p>Due to increased use of internet, there have been increased need of Data experts to acquire,analyse and make deceisions based on the data. We have the best Data experts for that</p>
                <button className='button'>Read More...</button>
                </div>
            </div>
        </div>
    </div>
  )
}
