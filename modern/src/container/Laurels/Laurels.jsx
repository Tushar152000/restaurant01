import React from 'react';
import { SubHeading } from '../../components';
import {data} from '../../constants';
import './Laurels.css';
const AwardCard=({award:{imgUrl, title, subtitle}})=>(
  <div className='app__laurels_awards-card'>
  <img src={imgUrl} alt="" />
  <div className="app__laurles_awards-card_content">
    <p className="p__cormorant" style={{color:'#DCCA87'}}>{title}</p>
    <p className="p__cormorant">{subtitle}</p>
  </div>
  </div>
  
)
const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='laurels'>
    <div className="app__wrapper_info">
      <SubHeading tittle='Awards and Recognition'/>
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {
          data.awards.map((award)=> <AwardCard award={award} key={award.title}/>)
        }

      </div>
    </div>
    
  
  </div>
);

export default Laurels;
