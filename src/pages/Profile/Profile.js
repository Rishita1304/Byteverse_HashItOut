import { Link } from "react-router-dom";
import "./Profile.css";
import img1 from "../../images/user.png";
import axios from "axios";

export default function Profile() {
  let email="" 
  email = localStorage.getItem("email");
  const datacheck = {
    email: email,
  };
  // console.log(stringEmail);
  axios
    .get("https://carpooling-1sqz.onrender.com/api/auth/profile", datacheck)
    .then((e) => {
      console.log(e.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className="user">
      <div className="userTitleContainer">User Profile</div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={img1} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="first">
              <div className="userShowInfo1">
                <span className="userShowTitle">Mobile Number</span>
                <span className="userShowTitle">Email</span>
                <span className="userShowTitle">Gender</span>
              </div>
              <div className="userShowInfo2">
                <span className="userShowInfoTitle">9875443125</span>
                <span className="userShowInfoTitle">abc@gmail.com</span>
                <span className="userShowInfoTitle">Female</span>
              </div>
            </div>
            <div className="second">
              <div className="userShowInfo1">
                <span className="userShowTitle">Age</span>
                <span className="userShowTitle">Experience</span>
                <span className="userShowTitle">Drives</span>
              </div>
              <div className="userShowInfo2">
                <span className="userShowInfoTitle">29</span>
                <span className="userShowInfoTitle">2 Years</span>
                <span className="userShowInfoTitle">35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
