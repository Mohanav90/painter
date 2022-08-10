import React from 'react';
import './GetAQuote.css';

const GetAQuote = () => {
  return (
    <div className='getQuote'>
        <div className="quote-sec">            
            <form action="#">
                <h1>Get A Quote</h1>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" /><br/>
                <textarea name="msg" id="msg" placeholder="Message"></textarea><br />
                <button>Get a Quote</button>
            </form>
        </div>
    </div>
  )
}

export default GetAQuote