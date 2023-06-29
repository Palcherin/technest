import React from 'react'
import { Link } from 'react-router-dom'

export const Openings = () => {
  return (
    <div className='Openin-container'>
        <div className='open-container'>
      <div className='open-intro'>
      <h1>Join Our Teams, Let's Develop</h1>
      <p>At Technest we hire developers to work with our teams for efficient workin on available projects.Fill the form below <br /> to receive emails when the openins are available. Be part of us and row with us</p>
      <Link to="/">
            <button className='btn'>See More</button></Link>
      </div>
      <div className='portfolio-pic'>
            <img  src="https://teacode.io/wp-content/uploads/2022/10/Phone-and-Laptop-Clay-Mockup-16-e1667245665180-compress.png" alt=""/>
     </div>
      </div>
      
      <div className='form-container'>
      <div className='contact-form'>
            <div className='form-introduction'>
                <h1>We Will Let You Know Of Available Oppotunities</h1>
                <p>Join our team for excellent project development and manaement. We are a team,not positions.</p>
                <div>
                   <h1>Prefer To Talk?</h1>
                <Link to='/meet' className='btn-lit' >
              Schedule a Meet-Up
            </Link>
                </div>
            </div>
           
        <form>
            
            <div className='name'>
                <input type="name" placeholder="John Doe" />
                <input type="email" placeholder="johnde@email.com" />
            </div>
            <select className='select' value='select your budet' >
                <option value='Select'>Level Of Expertice</option>
                <option value="A">Fresher</option>
                <option value="B">Intermediate</option>
                <option value="C">Expert</option>
            </select>
            <div>
                
            <select className='select' value='select your budet' >
                <option value='Select'>Select your specialisation</option>
                <option value="A">Web development</option>
                <option value="B">Phone App Development</option>
                <option value="C">Software development</option>
                <option value="C">UX/UI Desiner</option>
            </select>
            </div>
            <div>
                <textarea typeof='any' placeholder='Tell Us more about yourself'/>
            </div>
            <input type='checkbox' />
            <label>I want to receive information from Technest about software development and app marketing, the company and its projects to my email.</label>
            <button className='btn-lit'>Send</button>
        </form>
        </div>
    </div>
    </div>
  )
}
