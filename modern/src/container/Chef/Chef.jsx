import React from 'react';
import './Chef.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-rever">
      <img src={images.chef} alt="chef" />


    </div>
    <div className="app__wrapper_info">
      <SubHeading tittle="Chef's Word"/>
      <h1 className="headtext__cormorant">What we believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eum cumque iusto. Error nemo non nisi, laboriosam ratione eum, quam doloribus amet eius tempora veritatis vitae sed quos explicabo magnam.</p>
        </div>
        <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id cum deleniti at neque, illum error quaerat eius iusto odio quam blanditiis fuga, exercitationem ea ipsa! In incidunt numquam necessitatibus maiores.</p>
      </div>
      <div className="app__chef-sign">
        <p className='headtext__cormorant'>Sanjeev Kapoor</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="" className='app__chef-sign_img'/>
      </div>
    </div>
  </div>
);

export default Chef;
