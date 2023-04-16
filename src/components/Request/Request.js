import React,{useState} from 'react';
import "./Request.css";
import {GrLocationPin} from 'react-icons/gr'
import {MdLocationOn} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Request = () => {
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
  }

  const errors_form=()=> {
    const errors = {};


    if (formvalues.pickup!="") {
      errors.pickup= "";
      seterror(true);
      console.log(error.pickup)
    }
    else {
      seterror(false);
      errors.pickup = "Please enter pickup";
    }



    if (formvalues.destination!="") {
      errors.destination = "";
      seterror(true);
      console.log(error.destination)
    }
    else {
      seterror(false);
      errors.destination = "Please enter destination";
    }


    if (formvalues.date=="") {
      seterror(false);
      errors.year = "Please select Date";
    }
    else {
      errors.year = "";
    }

    if (formvalues.vacancy == "") {
      seterror(false);
      errors.branch = "Please select Vacancy";
    }
    else {
      errors.branch = "";
    }

    return errors;
  }
  const validateform = (e) => {
    e.preventDefault();
    setformerror(errors_form());
    if(error==true){
      console.log(formvalues);
    }
  }
  localStorage.setItem("pickup",formvalues.pickup)
  localStorage.setItem("destination",formvalues.destination)
  localStorage.setItem("time",formvalues.time)
  localStorage.setItem("vacancy",formvalues.vacancy)

  return (
    <div className='request'>
      <div className='requestTextArea'>
         <h3>
           Earn. Meet new people. Connect!
         </h3>
         <p>We let you CREATE a ride that will save fuel and money.
            Register here to offer a ride.</p>
            <div className="btn reserve__btn mt-4">
              <Link to="/offeraride">Register Now</Link>
            </div>
      </div>
      <div className='requestSec'>
          <div className='requestCar'>
          <h2>Book Your Ride</h2>
 
     <form onSubmit={validateform}>

       <div className="signinputs">
         <div className="pickup registerfield">
         <GrLocationPin/>
         <input type="text" placeholder="Select Pickup" name="pickup" value={formvalues.pickup} onChange={userHandler} />
         <p className='throwerror'>{formerror.pickup}</p>
       </div>

     <div className="destination registerfield">
        <MdLocationOn/>
        <input type="text" name="destination" placeholder="Select Destination" value={formvalues.destination} onChange={userHandler} />
        <p className='throwerror'>{formerror.destination}</p>
     </div>

     <div className="date registerfield">
       <input type="date" name="date" placeholder="Select Date" value={formvalues.date} onChange={userHandler} />
       <p className='throwerror'>{formerror.date}</p>
     </div>

     <div className="vacancy registerfield">
       <input type="number" name="vacancy" placeholder="Passenger" onChange={userHandler} value={formvalues.vacancy} />
       <p className='throwerror'>{formerror.vacancy}</p>
     </div>


   <div>
     <Link to="/rides" type="submit" className="submit">Search</Link>
   </div>
   </div>

 </form>
          </div>
      </div>
    </div>
  )
}

export default Request