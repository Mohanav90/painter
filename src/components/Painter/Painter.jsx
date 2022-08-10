import React from 'react';
import './Painter.css';
import about_1 from '../../assets/about_1.jpg';

const Painter = () => {
  return (
    <div className='painter'>
       <div className="left-p">
         <h1>Welcome To Painter</h1>
         <p>Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et, tempor sit sit diam amet et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. 
          Sanctus clita duo justo et tempor magna dolore erat amet</p>
          <a href="#">Contact Us</a>
       </div>
       <div className="right-p">
         <img src={about_1} alt="" />
       </div>
      
    </div>
  )
}

export default Painter