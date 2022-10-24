import React from 'react';
import pic2 from '../assets/pic2.jpg';
import linkedinbtn from '../assets/Button.png';
import About from './About';
import Interest from './Interest';
import Footer from './Footer';


function Info() {
    return (
        <div className='profile'>
            <div className="info-pic"></div> 
            <div className="info-section">
            <h4>Quinton Spivey</h4>
            <h5>Frontend Developer</h5>
            <h6>quinton.website</h6>
            <div className='button-line'>
                <button className='email-button'>
                    <span>
                    <i className="fa-solid fa-envelope" />
                    </span>
                    Email
                </button>
               
                
                <button className='linkedinbtn' >
                   
                </button>
            </div>
            <About/>
            <Interest/>
            <Footer/>
            </div>

            
        </div>
    )
}

export default Info
