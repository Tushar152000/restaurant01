import React from 'react';
import { FooterOverlay,Newlatter, Newsletter } from '../../components';
import {fiFacebook,FiInstagram,FiTwitter} from 'react-icons/bs';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter/>

  </div>
);

export default Footer;
