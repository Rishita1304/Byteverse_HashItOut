import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "./Login.css";
// import { email } from '../Register/Register';
import axios from "axios";
export let profile_data={
    id:"",
    name:"",
    email:"",
    mobile_no:"",
    age:"",
}

const Login = () => {
    const initialvalues={
        email:"",
        password:""
    }
    const navigate=useNavigate();
    const [formvalues,setformvalues]=useState(initialvalues);
    const [formerror,setformerror]=useState({});
    const [noerror,setnoerror]=useState(false);

    const userHandler=(e)=>{
        const {name,value}=e.target;
        setformvalues({...formvalues,[name]:value});
    }
    const loginSubmitHandler=(e)=>{
        e.preventDefault();
    const error=()=>{
        const errors={}
        setnoerror(true);
        const cmobile_num= /^[7-9]([0-9]){9}$/;

        if(cmobile_num.test(formvalues.mobile_number)){
            errors.email="";
        }
        else{
            setnoerror(false)
            errors.email="**Invalid Mobile Number";
        }

        if(formvalues.password==""){
            errors.password="**This field is required"
            setnoerror(false)
        }
        else{
            errors.password="";
        }

        return errors;
    }
    const dataCheck={
        email:formvalues.email,
        password:formvalues.password
    }
   console.log(dataCheck);
    axios.get("https://carpooling-1sqz.onrender.com/api/auth/login",dataCheck).then((e)=>{
        console.log(e.data);
    }).catch((err)=>{console.log(err)});}

    return(
        <>
    <div className='login'>       
        <div class="loginControls">
            <form className="loginPage" onSubmit={loginSubmitHandler}>

                <input type="email" name="email" value={formvalues.email} placeholder="Email" onChange={userHandler}/>
                <p className='loginerror'>{formerror.email}</p>
                <input type="password" name="password" value={formvalues.password} placeholder="Password" onChange={userHandler}/>
                <p className='loginerror'>{formerror.password}</p>
                <input type="submit" value="LogIn" className='logInsubmit'/>
            </form>
            <NavLink to="/forgetPassword" className="forgetPassword">Forgotten Password?</NavLink>
            <h4>Not Have An Account? <Link className="register">Register</Link></h4>
            
        </div>
    </div>
    </>
  )
}

export default Login