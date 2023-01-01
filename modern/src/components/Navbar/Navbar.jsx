import React from 'react';
//  import {GiHamburgetMenu} from 'react-icons/gs';
// import {MdoutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
 <nav className='app_bar'>
<div className='app_logo'>
  <img src={images.gericht}alt="app logo" />
</div>
<ul className='app_links'>
  <li className='p__opensans'><a href="#home">Home</a></li>
  <li className='p_opensans'><a href="#about">About us </a></li>
  <li className='p_opensans'><a href="#contact">Contacts</a></li>
  <li className='p_opensans'><a href="#awards">Awards</a></li>
  
</ul>
<div className="app_navbar_login">
  <a href="#login" className='p_open'>Login /Register</a>
</div>
   
 
<div/>
<div className="app_navbar_smallscreen">
  {/* <GiHamburgetMenu color="#fff" fontsize={27} onclick={()=>{}}/> */}
</div>

 </nav>
);

export default Navbar;
