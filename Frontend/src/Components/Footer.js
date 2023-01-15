import React from 'react';
import './css/Footer.css';

export const Footer = () => {
  return (
    <div className='footer_container'>
        <div className='allrights'>
          <p>All rights reserved</p>
        </div>

        <div className='group344'>
          <div className='group344-text'>
            <h2>Download Our App.</h2>
            <p>Our app is for everyone 13+. Make an account today and reap rewards for every transaction you make!</p>
          </div>


          <div className='socialsVector'>
              <img src={require("./css/svg/vectorfooter1.png")} id='vectorfooter1' alt=""></img>
              <img src={require("./css/svg/vectorfooter2.png")} id='vectorfooter2' alt=""></img>
              <img src={require("./css/svg/vectorfooter3.png")} id='vectorfooter3' alt=""></img>
          </div>
        </div>
        
        <div className='group333'>
          <h3>Join our newsletter</h3>
          <p>Receive latest news, promotions, and much more.</p>
          <input placeholder='example@email.com'></input>
          <button>Subscribe</button>
          </div>
        
        
        <img src={require("./css/svg/Line 2.png")} id='line2' alt=""></img>

    </div>
  )
}
