import React, {useState} from 'react';
import './Logo.css';
import { FaPaintRoller,FaMobileAlt,FaBars,FaTimes } from 'react-icons/fa';
import bars from '../../assets/bars.png'

const Logo = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='logo'>
        <div className="left-l">
             <div className="logo-sec">
                <span><FaPaintRoller /></span>
                <h1>Painter</h1>
             </div>
        </div>
        <div className="right-l">
  <input type="checkbox" id="check" />
  <label for="check" class="checkbtn"><span><FaBars /></span></label>
    
    <ul>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Pages</a></li>                
                <li><a href="#">Contact</a></li>
            </ul>


            <div className="call-now">
                <div className="left-sec">
                <span><FaMobileAlt /></span>
                </div>
               <div className="right-sec">
                <span>Call Now</span>
                <span>+012 345 6789</span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Logo