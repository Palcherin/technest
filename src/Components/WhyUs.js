import React from 'react'
import { FaCode, FaDeploydog, FaDeskpro, FaDev, FaHandsHelping, FaPaintBrush, FaPen, FaRegWindowMaximize, FaStoreAltSlash, FaWpexplorer } from 'react-icons/fa'
import './Components.css';

export const WhyUs = () => {
  return (
    <div className='why-container'>
        <div className='why-content'>
            <h1>Full-cycle custom web development with ReactJS & Next.js</h1>
            <p>We’re ready to help you on every stage of your digital product development.<br></br> You can rely on our experienced team of experts: business analysts, designers, project managers, developers, QA testers and marketers.</p>
            <div className='dev-process'>
            <div className='process'>
            {/* <img src="assets/pica.jpg" alt='Homepic'/> */}
            <FaWpexplorer size={100}/>
                <p>1.Explore</p>
            </div>
            <div className='process'>
            {/* <img src="assets/picb.jpg" alt='Homepic'/> */}
            <FaPaintBrush size={100} />
                <p>2.Desin</p>
            </div>
            <div className='process'>
                
            {/* <img src="assets/picc.jpg" alt='Homepic'/> */}
            <FaCode size={100} />
            <p>3.Develop</p>
                       
            </div>
            <div className='process'>
            {/* <img src="assets/pice.jpg" alt='Homepic'/> */}
            <FaStoreAltSlash size={100} />
                <p>4.Test</p>
            </div>
            <div className='process'>
            {/* <img src="assets/picf.jpg" alt='Homepic'/> */}
            <FaDeploydog size={100} />
                <p>5.Deploy</p>
            </div>
            <div className='process'>
            {/* <img src="assets/pich.jpg" alt='Homepic'/> */}
            <FaDeskpro size={100} />
                <p>6.Maintain</p>
            </div>
            </div>
        </div>
    </div>
  )
}
