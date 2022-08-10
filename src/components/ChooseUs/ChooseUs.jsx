import React from 'react';
import './ChooseUs.css';
import about_2 from '../../assets/about_2.jpg';

const ChooseUs = () => {
  return (
    <div>
        <div className="choose-us">
            <div className="left-c">
                <img src={about_2} alt="" />
            </div>
            <div className="right-c">
                <h1>Why Choose Us?</h1>
                <p>Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et, tempor sit sit diam amet et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor magna dolore erat amet</p>
                <a href="#">Get a Quote</a>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs