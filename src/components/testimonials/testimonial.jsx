import React from "react";
import "./testimonials.css";
export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Akshat Mishra",
      title: "Developer",
      img: "img/myself.jpg",
      icon: "img/download1.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio dolorum optio facere ab provident, ",
      featured:false,
    },
    {
      id: 2,
      name: "Akshat Mishra",
      title: "Developer",
      img: "img/myself.jpg",
      icon: "img/download1.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio dolorum optio facere ab provident, ",
      featured:true,
    },
    {
      id: 3,
      name: "Akshat Mishra",
      title: "Developer",
      img: "img/myself.jpg",
      icon: "img/download1.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio dolorum optio facere ab provident, ",
      featured:false,
    },
  ];
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container3">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="img/down.png" className="rg" alt="" />
              <img src={d.img} className="user" id="user" alt="" />
              <img src={d.icon} className="lf" alt="" />
            </div>
            <div className="center">
              {d.desc}            </div>
            <div className="bottom">
              <h2>{d.name}</h2>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
