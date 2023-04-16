import React from 'react';
import "./Member.css";
import facebook from "../../images/facebook.png";
import insta from "../../images/instagram.png";
import twitter from "../../images/twitter.png";

const Member = (props) => {
  return (
    <div className='member'>
        <div className='memberImg'>
          <img src={props.imgsrc} alt=''/>
          </div>
        <div className='memberInfo'>
            <div className='memberDetails'>
                <h2>{props.title}</h2>
                <p>{props.post}</p>
                <hr/>
            <div className='memberMedia'>
              <div className='f'>
                <p>{props.name}</p>
                </div>
                <div className='s'>

            <p>{props.date}</p>
            <p>{props.time}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Member