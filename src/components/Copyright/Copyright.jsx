import React from 'react';
import './Copyright.css';
import ScrollToTop from "react-scroll-to-top";

const Copyright = () => {
  return (
    <div className='copyright'>
        <div className="left-sec-cop">
        Copyright © <b>Site Name</b>. All Rights Reserved.
        </div>
        <div className="right-sec cop">
          Designed by <b>Mona</b>
          <div className="scroll-to-top" style={{ marginTop: "150vh",opacity:0 }} />
           <ScrollToTop smooth />
        </div>
    </div>
  )
}

export default Copyright