import React, { useEffect, useState } from 'react';
import { FaAddressBook, FaEnvelopeOpen, FaMicrophone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Components.css'
import {db} from '../config/firebase'
import { getDocs, collection, addDoc} from 'firebase/firestore';


export const ContactForm = () => {
  event.preventDefault();
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [select,setSelect]=useState("")
    const [text, setText]=useState("");
    
  


    const textCollectioneRef =collection(db, "Technest ltd");
 
    const submitHandler=async ()=>{
      event.preventDefault();
      try{
      await addDoc( textCollectioneRef,
        {
          Name:name,
          Email:email,
          Select:select,
          Text:text
        }
        );
      }catch(err){
        console.error(err);
      }
    }  
    
    
  return (
    <div className='contact-container'>
        <div className='contact-intro'>
            <div className='intro-container1'>
                <div>
            <h1>Do You Have Any Queries Or Concerns?</h1>
            <p>Contact us to discuss your app idea and possibilities. We’ll advise you on the best solution and estimate the project. If you have any questions – we’ll provide you with answers.</p>
            <Link to="/services">
            <button className='btn'>Our Services</button></Link>
            </div>
            <div className='homepic-photo'>
          <img src='https://teacode.io/wp-content/uploads/2023/06/PSD-7-1-600x450.png' alt='Homepic'/>
        </div>
            </div>
            <div className='contact-options'>
            
                <div className='schedule'>
                    <FaMicrophone size={80} className="icon-list"/>
                    <h4>Let’s Meet <br/> and talk about your ideas</h4>
                    <Link to='/meet' className='btn-lit' >
              Schedule a Meet-Up
            </Link>
                </div>
                <div className='email-option'>
                    <FaEnvelopeOpen size={80} className="icon-list"/>
                    <h4>Send us an Email <br/> @technest@info.com</h4>
                    <Link to='/contact' className='btn-lit' >
              Our Contact Form
            </Link>
                </div>
                <div className='adress-option'>
                    <FaAddressBook size={80} className="icon-list"/>
                    <h4>TechNest ltd<br/>
                        Westpark,Westlands<br/>
                        Nairobi Kenya
                        +25743555718
                    </h4>
                </div>
            </div>
        </div>
        <div className='contact-form'>
            <div className='form-introduction'>
                <h1>Reach Out To Us</h1>
                <p>Let’s build the product that will drive your business.</p>
                <div>
                   <h1>Prefer To Talk?</h1>
                <Link to='/meet' className='btn-lit' >
              Schedule a Meet-Up
            </Link>
                </div>
            </div>
           
        <form>
            
            <div className='name'>
                <input type="name" placeholder="John Doe" onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder="johnde@email.com" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='phone'> 
                
                <input type="name" placeholder="Company Name"  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                
            <select className='select' value='select your budet' >
                <option value='Select' onChange={(e)=>setSelect(e.target.value)}>Select Your Budet</option>
                <option value="A">below 10$</option>
                <option value="B">between 10$-50$</option>
                <option value="C">above 50$</option>
                
            </select>
            </div>
            <div>
                <textarea type='text' placeholder='How can we help you?' onChange={(e)=>setText(e.target.value)}/>
            </div>
            <input type='checkbox' />
            <label>I want to receive information from Technest about software development and app marketing, the company and its projects to my email.</label>
            <button className='btn-lit' onClick={submitHandler}>Send</button>
        </form>
        </div>
    </div>
  )
}
