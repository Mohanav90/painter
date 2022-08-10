import React from 'react';
import './Nav.css';
import { FaPhoneAlt,FaMailBulk,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaYoutube } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className='nav'>
        <div className="left-n">
            <div className="contact-sec">
            <span><FaPhoneAlt /></span>
            <a href="#">+012 345 6789</a>            
            </div>
            <div className="contact-sec">
            <span><FaMailBulk /></span>
            <a href="#">info@example.com</a>            
            </div>
        </div>

        <div className="right-n">
            <ul> 
                <li><a href="#"><FaFacebookF /></a></li>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><FaLinkedinIn /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaYoutube /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav