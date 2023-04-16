import React from 'react';
import "./Register.css";
import { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from "axios";
export var email;
const Register = () => {

    const initialvalues={
        full_name:"",
        mobile_number:"",
        email:"",
        gender:"",
        age:"",
        password:"",
        password2:"",
    }
    const [formvalues,setformvalues]=useState(initialvalues);
    const [formerror,setformerror]=useState({});
    const [noerror,setnoerror]=useState(false);

    const userHandler=(e)=>{
        const {name,value}=e.target;
        setformvalues({...formvalues,[name]:value});
    }
    const submitHandler=(e)=>{
        console.log("HI");
        e.preventDefault();
    const error=()=>{
        const errors={}
        setnoerror(true);

        const cname=/^[a-zA-Z\.\'\-]{3,50}(?: [a-zA-Z\.\'\-]{3,50})+$/;
        const cmobile_num= /^[7-9]([0-9]){9}$/;
        const cemail=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        const cage=/^[1-9]([0-9]){1}$/;
        const password=/^[a-zA-z0-9*#_$]{5,20}$/

        if(formvalues.full_name===""){
            errors.full_name="This field can't be empty";
            setnoerror(false);
        }
        else if(cname.test(formvalues.full_name)){
            errors.full_name=""
        }
        else{
            errors.full_name="Invalid name";
            setnoerror(false);
            
        }

        if(cmobile_num.test(formvalues.mobile_number)){
            errors.mobile_number="";
        }
        else{
            setnoerror(false);
            errors.mobile_number="Invalid Mobile Number"
        }

        if(cemail.test(formvalues.email)){
            errors.email="";
        }
        else{
            setnoerror(false)
            errors.email="Invalid Email Address";
        }
        if(!cage.test(formvalues.age)){
            setnoerror(false);
            errors.age="Enter your Age";
        }
        else{
            errors.age="";
        }

        if(formvalues.gender===""){
            setnoerror(false);
            errors.gender="This field is required"
        }
        else{
            errors.gender="";
        }


        if(formvalues.password===""){
            errors.password="This field is required"
            setnoerror(false)
        }
        else{
            errors.password="";
        }

        if(formvalues.password2==="")
        {
            setnoerror(false);
            errors.password2="Enter Confirm Password"
        }
        else if(formvalues.password!=formvalues.password2){
            setnoerror(false);
            errors.password2="Password Not Matched"
        }
        else{
            errors.password2="";
        }

        return errors;
    }
    const dataCheck = {
        full_name: formvalues.full_name,
        mobile_number:formvalues.mobile_number.toString(),
        email:formvalues.email,
        gender:formvalues.gender,
        password:formvalues.password
        // password2: formValues.confirmPassword,
      };

    axios.post("https://carpooling-1sqz.onrender.com/api/auth/register",dataCheck).then((e)=>{
        console.log(e.data);
        email=e.data.email
        console.log(email);
        localStorage.setItem("email", dataCheck.email);
    }).catch((err)=>{console.log(err)});}
  return (
    <>
    <div className="hide">
    </div>
    <div className='registerUser'>    
      <div className='registerControl'>
        <form className="registerPage" onSubmit={submitHandler}>
            <input type="text" name="full_name" value={formvalues.full_name} placeholder="Full Name" className="inputfieldss" onChange={userHandler}/>
            <p className='registererror'>{formerror.full_name}</p>
            <input type="text" name="mobile_number" value={formvalues.mobile_number} placeholder="Mobile Number" className="inputfieldss" onChange={userHandler}/>
            <p className='registererror'>{formerror.mobile_number}</p>
            <input type="text" name="email" value={formvalues.email} placeholder="Email Address" onChange={userHandler} className="inputfieldss"/>
            <p className='registererror'>{formerror.email}</p>
            <input type="text" name="age" value={formvalues.age} placeholder="Age" onChange={userHandler} className="inputfieldss"/>
            <p className='registererror'>{formerror.age}</p>
            <input type="password" name="password" value={formvalues.password} placeholder="Password" onChange={userHandler} className="inputfieldss"/>
            <p className='registererror'>{formerror.password}</p>
            <input type="password" name="password2" value={formvalues.password2} placeholder="Confirm Password" onChange={userHandler} className="inputfieldss"/>
            <p className='registererror'>{formerror.password2}</p>
            <label id="gender">Gender</label>
            <div className="genderControl">
                <div className="genderCategory">
                    <input type="radio" name="gender" value="Male" onChange={userHandler}/>
                    <label>Male</label><br/>
                </div>
                <div className="genderCategory">
                    <input type="radio" name="gender" value="Female" onChange={userHandler}/>
                    <label>Female</label><br/>
                </div>
                <div className="genderCategory">
                    <input type="radio" name="gender" value="Custom" onChange={userHandler}/>
                    <label>Others</label><br/>
                </div>
            </div>
            <p className='registererror'>{formerror.gender}</p>
            <button type="submit" className="inputfieldss registerbtn">Register</button>
        </form>
        <h4>Already Have An Account?<Link to='/login' className="loginback">LogIn</Link></h4>
      </div>
    </div>
    </>
  )
}

export default Register
