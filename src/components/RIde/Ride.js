import React, { useState } from "react";
import img1 from "../../images/Carpool-rafiki.png";
import "./Ride.css";
import axios from "axios";
const Ride = () => {
  const initialvalues = {
    pickup: "",
    destination: "",
    date: "",
    time: "",
    vacancy: "",
  };

  const [formvalues, setformvalues] = useState(initialvalues);
  const [error, seterror] = useState(true);
  const [formerror, setformerror] = useState({});

  const userHandler = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const errors_form = () => {
      const errors = {};

      if (formvalues.pickup !== "") {
        errors.pickup = "";
        seterror(true);
        console.log(error.pickup);
      } else {
        seterror(false);
        errors.pickup = "Please enter pickup";
      }

      if (formvalues.destination !== "") {
        errors.destination = "";
        seterror(true);
        console.log(error.destination);
      } else {
        seterror(false);
        errors.destination = "Please enter destination";
      }

      if (formvalues.date === "") {
        seterror(false);
        errors.year = "Please select Date";
      } else {
        errors.year = "";
      }

      if (formvalues.vacancy === "") {
        seterror(false);
        errors.branch = "Please select Vacancy";
      } else {
        errors.branch = "";
      }

      return errors;
    };
    const validateform = (e) => {
      e.preventDefault();
      setformerror(errors_form());
      if (error == true) {
        console.log(formvalues);
      }
    };
    const email=localStorage.getItem("email");
    console.log(email);
    const datacheck={
      email:email,
      start:formvalues.pickup,
      destination:formvalues.destination,
      date:formvalues.date,
      vacancy:formvalues.vacancy,
      price:formvalues.price,
      type:formvalues.type,
      time:formvalues.time
    }
    axios.post("https://carpooling-1sqz.onrender.com/api/auth/offerRide",datacheck).then((e)=>{
      console.log(e.data);
    }).catch((err)=>{console.log(err);})
  };
  return (
    <section className="ride section">
      <h2 className="section__title">Create A Ride!</h2>
      <div className="ride__container container grid">
        <div className="ride__content">
          <form className="ride__form" onSubmit={submitHandler}>
            <div className="ride__form-div">
              <label className="ride__form-tag">Pickup</label>
              <input
                type="text"
                placeholder="Select Pickup"
                name="pickup"
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
