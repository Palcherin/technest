import React from 'react'
import './Routes.css'
import { FaPeopleCarry, FaProjectDiagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const AboutUs = () => {
  return (
    <div className='about-container'>
      <div className='about-intro'>
        <div>
        <h1>Want To Know More About Technest?</h1>
        <p>Technest is a web development and software development company that holds your 
          hand throuht the whole process of development.
         <br/> You can rely on our experienced team of experts: business analysts, designers, project managers, developers, QA testers and marketers for your project. </p>
         <Link to="/sevices">
            <button className='btn'>More About Us</button></Link>
            </div>
            <div className='portfolio-pic'>
            <img  src="https://teacode.io/wp-content/uploads/2022/10/Phone-and-Laptop-Clay-Mockup-16-e1667245665180-compress.png" alt=""/>
     </div>
      </div>
      
      <div className='about-content'>
        <h1>Why You Should Choose Technest</h1>
        <p>We have reliable and experienced experts that will provide you with satsifyin services. We Know how it feels to be frustrated with poorly developed projects and we arent ready to do that to you.
          we have been trusted by hundreds of clients for the quality services provided.
        </p>
        <div className='more-info'>
          <h1>+80 <br/> projects completes </h1>
          <h1>+3 <br/> Years on market </h1>
          <h1>+5 <br/> Continets </h1>
          <h1>+30 <br/> Team mates </h1>

        </div>
      </div>
    </div>
  )
}
 