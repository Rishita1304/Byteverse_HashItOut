import React from "react";
import "./blog.css";
import logo from "../../images/logo1.png";
import "@blueprintjs/core/lib/css/blueprint.css";
import p1 from "../../images/blog-img/blog-1.jpg";
const Blog = () => {
  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <div className="date bp4-heading">20 Jan,2022 * 10 min read </div>
          <div className="heading-main">
            <h1 className="bp4-heading">Discussing everything</h1>
          </div>
          <div className="side-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="info">
            <div className="avatar">
              <img src={logo} alt=" " />
            </div>
            <div className="name">Rishita</div>
          </div>
        </div>
        <div className="right-container">
          <img src={p1} alt="" />
        </div>
      </div>
      <div className="main-container-text">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, obcaecati
          ea. Laudantium facere asperiores nulla modi vero fugiat
          necessitatibus. Corrupti qui provident, dicta delectus minima eos
          animi tempora aliquid optio.
        </div>
      </div>
    </>
  );
};

export default Blog;
