import React from "react";
import "./Member.css";
import { BiUser } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";

const Member = (props) => {
  return (
    <div className="member">
      <div className="memberImg">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="memberInfo">
        <div className="memberDetails">
          <h2 className="section__titleee">{props.title}</h2>
          <p className="section__descriptionnn">{props.post}</p>
          <div className="blog_btn">
            <button className="read_button">Read More</button>
          </div>
          <hr />
          <div className="memberMedia">
            <div className="f">
              <p>
                <BiUser className="iconnn" />
                {props.name}
              </p>
            </div>
            <div className="s">
              <p>
                <SlCalender className="iconnn" />
                {props.date}
              </p>
              <p>
                <AiOutlineClockCircle className="iconnn" />
                {props.time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
