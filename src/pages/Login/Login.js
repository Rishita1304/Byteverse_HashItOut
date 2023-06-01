import React, { useContext, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext'
import "./Login.css";
import axios from "axios";
import { publicRequest } from '../../Request';

const Login = () => {
    const initialvalues={
        email:"",
        password:""
    }
    const [formvalues,setformvalues]=useState(initialvalues);

    const userHandler=(e)=>{
        const {name,value}=e.target;
        setformvalues({...formvalues,[name]:value});
    }

    const email = useRef();
    const password = useRef();

    const {user, isFetching, error, dispatch} = useContext(AuthContext);
    console.log(user);
    const handleClick = async(e) => {
      e.preventDefault();
      dispatch({type: "LOGIN_START"});
      try{
          const res = await publicRequest.post("api/auth/login", {email: email.current.value,password: password.current.value});
          dispatch({type: "LOGIN_SUCCESS", payload: res.data});
      }catch(err){
          dispatch({type: "LOGIN_FAILURE", payload: err});
      }
    }

    return(
        <>
    <div className='login'>       
        <div class="loginControls">
            <form className="loginPage" onSubmit={handleClick}>

                <input type="email" name="email" placeholder="Email" onChange={userHandler} ref={email}/>
                <input type="password" name="password" placeholder="Password" onChange={userHandler} ref={password}/>
                <button type="submit" className='logInsubmit'>Log in</button>
            </form>
            <NavLink to="/forgetPassword" className="forgetPassword">Forgotten Password?</NavLink>
            <h4>Not Have An Account? <Link className="register" to="/register" disabled={isFetching}>Register</Link></h4>
            
        </div>
    </div>
    </>
  )
}

export default Login