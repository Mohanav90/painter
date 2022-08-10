import React from 'react';
import './Professional.css';
import { FaPaintBrush,FaPaintRoller,FaBrush,FaEraser,FaSprayCan,FaCity,FaArrowRight } from 'react-icons/fa';

const Professional = () => {
  return (
    <div>
        <div className="professional">
           <h1>Professional Painting Services</h1>
           <div className="services">
           <div className="service-item">
            <div className="service-icon">
                <div><span><FaPaintBrush /></span></div>
            </div>
            <h3>Regular Painting</h3>
            <a href="#">View Detail<span><FaArrowRight /></span></a>
           </div>
           <div className="service-item">
            <div className="service-icon">
                <div><span><FaPaintRoller /></span></div>
            </div>
            <h3>Wall Painting</h3>
            <a href="#">View Detail<span><FaArrowRight /></span></a>
           </div>
           <div className="service-item">
            <div className="service-icon">
                <div><span><FaBrush /></span></div>
            </div>
            <h3>Floor Coating</h3>
            <a href="#">View Detail<span><FaArrowRight /></span></a>
           </div>
           <div className="service-item">
            <div className="service-icon">
                <div><span><FaEraser /></span></div>
            </div>
            <h3>Graffiti Removal</h3>
            <a href="#">View Detail<span><FaArrowRight /></span></a>
           </div>
           <div className="service-item">
            <div className="service-icon">
                <div><span><FaSprayCan /></span></div>
            </div>
            <h3>Mildew Removal</h3>
            <a href="#">View Detail<span><FaArrowRight /></span></a>
           </div>
           <div className="service-item">
            <div className="service-icon">
                <div><span><FaCity /></span></div>
            </div>
            <h3>Window Washing</h3>
            <a href="#">View Detail<span><FaArrowRight /></span></a>
           </div>

           </div>
        </div>
    </div>
  )
}

export default Professional