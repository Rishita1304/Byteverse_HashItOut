import React from 'react';
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='footer'>
      <div className='mainn'>

        <div className='footertxt'>
           <img src={logo} alt='' className='img56'/>
           <p>With so many options for rental service, you must choose the best company. We give you a wide range of quality rides!</p>
        </div>

        <div className='footerOpt'>
           <h2>Discover</h2>
          <Link to="/" className='links'>How to Rent</Link>
          <Link to="/" className='links'>Privacy Policy</Link>
          <Link to="/contact" className='links'>Contact Us</Link>
          <Link to="/" className='links'>Be A member</Link>
        </div>

        <div className='footerContact'>
           {/* <h2>Contact Us</h2> */}
           <h3>Our Address</h3>
           <p>Ajay Kumar Garg Enginnering College, Ghaziabad-201009</p>
           <h3>Phone No.</h3>
           <p>+91 9151270246</p>
           <h3>Email</h3>
           <p>abc@gmail.com</p>
        </div>
      </div>
        <div className="footer__bottom">
              <p className="section__descriptionnnnn">
                <AiOutlineCopyrightCircle/>Copyright {year}, Developed by
                Team HashItOut. All rights reserved.
              </p>
            </div>
    </div>
  )
}

export default Footer