import React from "react";
import './css/LandingPage.css';

import {Footer} from './Footer';
import Header from '../Components/Header';


function LandingPage() {
    return (
    <>
        <Header />
        <body>
            
            <div className="LHeading1">
                <h4>Do more with your money</h4>
                <p>Send and spend, bank* and buy stocks or bitcoin</p>
            </div>
            <div id="bgshapesdiv">
               
                <div className="bgshapesbelow">
                    <img src={require("./css/svg/rectangle1.png")} id='rectangle1' alt=""></img> 
                    <img src={require("./css/svg/rectangle2.png")} id='rectangle2' alt=""></img> 
                    <img src={require("./css/svg/rectangle3.png")} id='rectangle3' alt=""></img> 
                    <img src={require("./css/svg/rectangle5.png")} id='rectangle5' alt=""></img> 
                    <img src={require("./css/svg/Vector1.png")} id='vector1' alt=""></img> 
                     
                    <img src={require("./css/svg/Group349.png")} id='group349' alt=""></img> 
                    <img src={require("./css/svg/Group100.png")} id='group100' alt=""></img> 
                
                    <img src={require("./css/svg/Ellipse-3.png")} id ='ellipse3' alt=""></img>
                    <img src={require("./css/svg/Ellipse-4.png")} id ='ellipse4' alt=""></img>
                    <img src={require("./css/svg/Ellipse-5.png")} id ='ellipse5' alt=""></img>

                    <img src={require("./css/svg/socialvectors.png")} id ='socialvectors' alt=""></img>

                    
                    

                </div>
                <div className="phoneimgs">
                    
                    <img src={require("./css/svg/iPhone 14 - 1_google-pixel5-justblack-portrait-2.png")} id ='iphoneimg2' alt=""></img>
                    <img src={require("./css/svg/iPhone 14 - 1_google-pixel5-justblack-portrait-1.png")} id ='iphoneimg1' alt=""></img>
                    <img src={require("./css/svg/rectangle4.png")} id='rectangle4' alt=""></img>
                
                </div>
                </div>
                <div className="section2-img">
                    <img src={require("./css/svg/rectangle3-1.png")} id='rectangle3-1' alt=""></img>
                    <img src={require("./css/svg/rectangle-41.png")} id='rectangle41' alt=""></img>
                    <img src={require("./css/svg/Paying with card online.png")} id='illustration1' alt=""></img>
                    <img src={require("./css/svg/rectangle3-2.png")} id='rectangle3-2' alt=""></img>                    
                    <img src={require("./css/svg/rectangle2-1.png")} id='rectangle2-1' alt=""></img>                    


                </div>
                <div className="section2-text">
                    <h4>Pay anyone instantly.</h4>
                    <p>Its always free to send or receive Money, Crypto, and Stocks with CashApp</p>
                </div>

                <div className="section3-text">
                    <h4>Bank the way you want.</h4>
                    <p>A faster, and way simpler way to bank without so many fees.</p>
                </div>
                <div className="section3-img">
                <img src={require("./css/svg/rectangle3-4.png")} id='rectangle3-4' alt=""></img>
                <img src={require("./css/svg/rectangle-41.png")} id='rectangle41-1' alt=""></img>
                <img src={require("./css/svg/rectangle3-3.png")} id='rectangle3-3' alt=""></img>
                <img src={require("./css/svg/rectangle2-2.png")} id='rectangle2-2' alt=""></img>
                <img src={require("./css/svg/Bank.png")} id='illustration-bank' alt=""></img>

                </div>

                <div className="section4-img">
                    <div className="section4-text">
                        <h3>Save on everyday spending.</h3>
                        <p>Its always free to send or receive Money, Crypto, and Stocks with CashApp</p>
                    </div>
                    
                </div>
              
                <div className="section4-text"></div>
                <Footer/>
            
        </body>
        </>
    );

}

export default LandingPage

