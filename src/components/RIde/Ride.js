import React, { useState } from "react";
import img1 from "../../images/Carpool-rafiki.png";
import "./Ride.css";
import { publicRequest } from "../../Request";
const Ride = () => {
  const initialvalues = {
    pickup: "",
    destination: "",
    date: "",
    time: "",
    vacancy: "",
  };

  const [formvalues, setformvalues] = useState(initialvalues);

  const userHandler = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
    console.log({name,value});
  };
  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    const email=JSON.parse(localStorage.getItem("user"))?.email;
    const name=JSON.parse(localStorage.getItem("user"))?.name;
    console.log(name);
    console.log(email);
    const datacheck={
      email:email,
      name:name,
      start:formvalues.pickup,
      destination:formvalues.destination,
      date:formvalues.date,
      vacancy:formvalues.vacancy,
      price:formvalues.price,
      type:formvalues.type,
      time:formvalues.time
    }
    publicRequest.post("auth/offerRide",datacheck).then((e)=>{
      console.log(e.data);
      window.location.assign('/');
      alert("Ride Created");
    }).catch((err)=>{console.log(err.message);})
  };
  return (
    <section className="ride section">
      <h2 className="section__title">Create A Ride!</h2>
      <div className="ride__container containeer grid">
        <div className="ride__content">
          <form className="ride__form" onSubmit={submitHandler}>
          <div className="ride__form-div">
              <label className="ride__form-tag">Pickup</label>
              <input
                type="text"
                placeholder="Select Pickup"
                name="pickup"
                value={formvalues.pickup}
                onChange={userHandler}
                className="ride__form-input"
              />
            </div>
            <div className="ride__form-div">
              <label className="ride__form-tag">Destination</label>
              <input
                type="text"
                placeholder="Select Destination"
                name="destination"
                onChange={userHandler}
                className="ride__form-input"
              />
            </div>
            <div className="ride__form-div">
              <label className="ride__form-tag">Date</label>
              <input
                type="date"
                placeholder="Select Date"
                name="date"
                onChange={userHandler}
                className="ride__form-input"
              />
            </div>
            <div className="ride__form-div">
              <label className="ride__form-tag">Time</label>
              <input
                type="string"
                placeholder="Time of your journey"
                name="time"
                onChange={userHandler}
                className="ride__form-input"
              />
            </div>
            <div className="ride__form-div">
              <label className="ride__form-tag">Vacancy</label>
              <input
                type="number"
                placeholder="Select Vacancy"
                name="vacancy"
                onChange={userHandler}
                className="ride__form-input"
              />
            </div>
            <div className="ride__form-div">
              <label className="ride__form-tag">Price</label>
              <input
                type="number"
                placeholder="Select Price"
                name="price"
                onChange={userHandler}
                className="ride__form-input"
              />
            </div>
            <div className="ride__form-div">
              <label className="ride__form-tag">Type of Transport</label>
              <input
                type="string"
                placeholder="Car,Bike,Scooty,etc"
                name="type"
                onChange={userHandler}
                className="ride__form-input"
              />
            </div>
            <input className="ride__button" type="submit" value="Send" />
          </form>
        </div>
        <div className="ride__content" data-aos="flip-up">
          <div className="svg">
            <img className="img23" src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ride;
