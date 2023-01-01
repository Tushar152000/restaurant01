import React from 'react';
import './AboutUs.css';
import {images}from '../../constants';


const AboutUs = () => (
  <div className='app__aboutus app__bg  flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt=" g letter" className="" />

    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about ">
        <h1 className="headtext__cormorant">
          About us  </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className='p__opensans'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolorem distinctio nemo, veniam sed aspernatur ipsa quo, quia consequuntur vero nisi repellendus minima reiciendis quis eligendi sequi exercitationem incidunt unde.</p>
        <button type='button' className='custom__button'>Know More</button>
     </div>
    </div>
    <div className="app__aboutus-content_knide flex__center">
      <img src={images.knife} alt="" className="app_knide" />
    </div>
    <div className="app__history-content flex__center">
      <div className="app__history-content_about ">
        <h1 className="headtext__cormorant">
          History </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className='p__opensans'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolorem distinctio nemo, veniam sed aspernatur ipsa quo, quia consequuntur vero nisi repellendus minima reiciendis quis eligendi sequi exercitationem incidunt unde.</p>
        <button type='button' className='custom__button'>Know More</button>
     </div>
    </div>
 
  </div>
);

export default AboutUs;
