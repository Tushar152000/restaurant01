import React from 'react';
import { SubHeading } from '../../components';
import {data, images} from '../../constants';
import './Findus.css';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='constact'>
    <div className="app__wrapper-info">
      <SubHeading tittle="Contact"/>
      <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}}>FindUs</h1>
      <div className="app__wrapper_content">
        <p className="p__opensans">Gericht Restaurant </p>
        <p className="p__cormorant" style={{color:'#DCCA87',margin:'2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">MON-FRI : 10:00am - 8:00pm</p>
        <p className="p__opensans">SAT-SUN : 10:00am - 10:00pm</p>
      </div>
      <button className="custom__button">Visit Us!</button>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" id='app__wrapper-img'/>
    </div>
  </div>
);

export default FindUs;
