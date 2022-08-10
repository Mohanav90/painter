import React from 'react';
import './Testimonials.css';
import testimonial_1 from '../../assets/testimonial_1.jpg';
import testimonial_2 from '../../assets/testimonial_2.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaQuoteLeft } from "react-icons/fa";



const Testimonials = () => {
  return (
    <div className='testimonials'>     
         
         <Carousel 
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
          showIndicators={false}
        >
          
          <div class="testimonial-item">
            <h1>Testimonials</h1>
            <p><span><FaQuoteLeft /></span>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
          
          <div className="myCarousel client-desc">
            <div className='left-sec'>
            <img src={testimonial_1} alt=""/>
            </div>
         <div className="right-sec">
         <h3>Client Name</h3>
          <span>Profession</span>
         </div>
          </div>
        </div>
        
        <div class="testimonial-item">
        <h1>Testimonials</h1>
            <p><span><FaQuoteLeft /></span>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>          
          <div className="myCarousel client-desc">
            <div className="left-sec">
            <img src={testimonial_2} alt=""/>
            </div>
          <div className="right-sec">
          <h3>Client Name</h3>
          <span>Profession</span>
          </div>
          </div>
        </div>
      
      </Carousel> 
       </div>
  
  )
}

export default Testimonials