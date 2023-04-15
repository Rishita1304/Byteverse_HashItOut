import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "./Login.css";

export let profile_data={
    id:"",
    name:"",
    email:"",
    mobile_no:"",
    age:"",
}

const Login = () => {
    const initialvalues={
        mobile_number:"",
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
    const error=()=>{
        const errors={}
        setnoerror(true);
        const cmobile_num= /^[7-9]([0-9]){9}$/;

        if(cmobile_num.test(formvalues.mobile_number)){
            errors.mobile_number="";
        }
        else{
            setnoerror(false)
            errors.mobile_number="**Invalid Mobile Number";
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




    return(
        <>
    <div className='login'>       
        <div class="loginControls">
            <form className="loginPage">
                <input type="email" name="email" value={formvalues.mobile_number} placeholder="Email" onChange={userHandler}/>
                <p className='loginerror'>{formerror.mobile_number}</p>
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