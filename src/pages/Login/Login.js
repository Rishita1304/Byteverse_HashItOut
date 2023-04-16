import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "./Login.css";
// import { email } from '../Register/Register';
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
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
    // const dataCheck={
    //     email:formvalues.email,
    //     password:formvalues.password
    // }
    // console.log(dataCheck);
    // axios.get("https://carpooling-1sqz.onrender.com/api/auth/login",dataCheck).then((e)=>{
    //     console.log(e.data);
    //     localStorage.setItem("FullName", dataCheck.full_name);
    // }).catch((err)=>{console.log(err)});
}
    const {loading, error,dispatch} = useContext(AuthContext)
    const [credentials, setCredentials] = useState({
        email:formvalues.email,
        password:formvalues.password
      })

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"})
        try {
          const res = await axios.get("https://carpooling-1sqz.onrender.com/api/auth/login", credentials);
          dispatch({type: "LOGIN_SUCCESS", payload: res.data})
          console.log(res);
          navigate("/");
        } catch (error) {
          dispatch({ type: "LOGIN_FAILURE", payload: error });
        }
      };
    return(
        <>
    <div className='login'>       
        <div class="loginControls">
            <form className="loginPage" onSubmit={loginSubmitHandler}>

                <input type="email" name="email" value={formvalues.email} placeholder="Email" onChange={userHandler}/>
                <p className='loginerror'>{formerror.email}</p>
                <input type="password" name="password" value={formvalues.password} placeholder="Password" onChange={userHandler}/>
                <p className='loginerror'>{formerror.password}</p>
                <button type="submit" className='logInsubmit' onClick={handleClick}>Login</button>
            </form>
            <NavLink to="/forgetPassword" className="forgetPassword">Forgotten Password?</NavLink>
            <h4>Not Have An Account? <Link className="register">Register</Link></h4>
            
        </div>
    </div>
    </>
  )
}

export default Login