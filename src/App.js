
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbars } from './Components/Navbars';
import { Footer } from './Components/Footer';
import { AboutUs } from './Routes/AboutUs';
import { Home } from './Routes/Home';
import { Pricing } from './Routes/Pricing';
import { Contact } from './Routes/Contact';
import { Services } from './Routes/Services';
import { Meet } from './Routes/Meet';
import { Carreer } from './Routes/Carreer';
import { Techused } from './Components/Techused';

function App() {
  return (
  <Router>
    <Navbars/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/carreer' element={<Carreer/>} />
      <Route path='/meet' element={<Meet/>} />

      
    </Routes>
    <Techused/>
    <Footer/>
  </Router>
  );
}

export default App;
