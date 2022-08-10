import React from 'react';
import './Footer.css';
import { FaPhoneAlt,FaMailBulk,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaMapMarkerAlt,FaAngleRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>      
          <div className="footer-sec-1">
            <h4>Get In Touch</h4>
            <hr />
            <p className='para'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
            <p><span><FaMapMarkerAlt /></span> 123 Street, New York, USA</p>
            <p><span><FaMailBulk /></span>info@example.com</p>
            <p><span><FaPhoneAlt /></span>+012 345 67890</p>
          </div>        
       
        <div className="footer-sec-2">
            <h4>Our Services</h4>
            <hr />
            <div className='footer-sec'>
              <a href="#"><span><FaAngleRight /></span>Regular Painting</a>
              <a href="#"><span><FaAngleRight /></span>Wall Painting</a>
              <a href="#"><span><FaAngleRight /></span>Floor Coating</a>
              <a href="#"><span><FaAngleRight /></span>Graffiti Removal</a>
              <a href="#"><span><FaAngleRight /></span>Mildew Removal</a>
              <a href="#"><span><FaAngleRight /></span>Window Washing</a>
            </div>
          </div>
      
       
        <div className="footer-sec-3">
            <h4>Quick Links</h4>
            <hr />
            <div className='footer-sec'>
              <a href="#"><span><FaAngleRight /></span>Home</a>
              <a href="#"><span><FaAngleRight /></span>About Us</a>
              <a href="#"><span><FaAngleRight /></span>Our Services</a>
              <a href="#"><span><FaAngleRight /></span>Meet The Team</a>
              <a href="#"><span><FaAngleRight /></span>Latest Blog</a>
              <a href="#"><span><FaAngleRight /></span>Contact Us</a>
            </div>
          </div>
       
        
        <div className="footer-sec-4">
          <h4>Newsletter</h4>
          <hr />
          <div className="footer-sec">
          <form action="#">
            <div className="input-group">
              <input type="text" placeholder='Your Email' />
              <button>Sign Up</button>
            </div>
          </form>
          <h6>Follow Us</h6>
          <div className='social-icons-f'>
            <a href="#"><span><FaTwitter /></span></a>
            <a href="#"><span><FaFacebookF /></span></a>
            <a href="#"><span><FaLinkedinIn /></span></a>
            <a href="#"><span><FaInstagram /></span></a>
          </div>
          </div>
        </div>
        
    </div>
  )
}

export default Footer