import { Link } from "react-router-dom";
import "./Profile.css";
import img1 from "../../images/user.png";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {AuthContext} from "../../context/AuthContext"

export default function Profile() {

  // const {user} = useContext(AuthContext)
  const res = JSON.parse(localStorage.getItem("user"));
  const email = res.email;
  // console.log(res.email)

  const [user, setUser] = useState({})
  useEffect(()=>{
    const fetchUser = async () => {

      const rest =await axios.get("http://localhost:4000/api/auth/profile/" + email );
      console.log(rest.data);
      setUser(rest.data)
    };
    fetchUser();
  },[])

  return (
    <div className="user">
      <div className="userTitleContainer">User Profile</div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={img1} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.name}</span>
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
                <span className="userShowInfoTitle">{user.number}</span>
                <span className="userShowInfoTitle">{user.email}</span>
                <span className="userShowInfoTitle">{user.gender}</span>
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
