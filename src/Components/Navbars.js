// import React, { useState } from 'react'
// import './Navbars.css'
// import { Link } from 'react-router-dom'
// import {FaBars} from 'react-icons/fa'

// export const Navbars = () => {
//   const[showLinks,setShowLinks]=useState(false)
//   return (
//     <div className='navbar-container'>
//         <div className='Logo'>
//             <h1>TechNest</h1>
//         </div>
//         <div className='Nav-links' id={showLinks? 'hidden': ""}>
//         <Link className='links' to='/'>Home</Link>
//         <Link className='links' to='/services'>Services</Link>
//         <Link className='links' to='/pricing'>Pricing</Link>
//         <Link className='links' to='/carreer'>Career</Link>
//         <Link className='links' to='/contact'>Contact</Link>
//         <Link className='links' to='/aboutus'>About</Link>
          
//         </div>
//         <button onClick={()=>setShowLinks(showLinks)}><FaBars className='icon' size={30}/></button>
        
//     </div>
//   )
// }
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbars.css';




export function Navbars() {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  


  

  return (
    
    <div className='navbar' > 
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          TechNest
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes className='icons'/> : <FaBars className='icons'/>}
        </div>
        
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/carreer' className='nav-links' onClick={closeMobileMenu}>
              Career
            </Link>
            
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contacts
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          
        </ul>
        <Link to='/meet' className='btn-lit1' >
              Schedule a Meet-Up
            </Link>
      </div>
    </div>
  );
}
