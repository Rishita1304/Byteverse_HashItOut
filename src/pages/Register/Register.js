import React, { useRef } from 'react';
import "./Register.css";
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import img1 from '../../images/registerpic.png'

const Register = () => {

    const name = useRef()
    const number = useRef()
    const email = useRef()
    const age = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const gender = useRef()
  
    const navigate = useNavigate();
  
    const handleClick = async(e) =>{
      e.preventDefault();
      if(passwordAgain.current.value !== password.current.value){
        passwordAgain.current.setCustomValidity("Passwords don't match!");
      }
      else{
        const user = {
        name: name.current.value,
        number:number.toString().current.value,
        age:age.current.value,
        email:email.current.value,
        password:password.current.value,
        passwordAgain: passwordAgain.current.value,
        gender: gender.current.value

        }
        try{
          const res = await axios.post("http://localhost:4000/api/auth/register", user)
          console.log(res);
          navigate("/login")
        }catch(err){
          console.log(err);
        }
      }
    } 
  return (
    <>
    
    <div className='registerUser'>    
    <div className="hide">
        <img src={img1} alt='' width={"580em"} />
    </div>
      <div className='registerControl'>
        <form className="registerPage">
            <div className='upper'>

            <div className='first3'>

            <input type="text" name="name" placeholder="Full Name" className="inputfieldss" ref={name}/>
            <input type="text" name="number" placeholder="Mobile Number" className="inputfieldss"ref={number}/>
            <input type="password" name="password" placeholder="Password" className="inputfieldss" ref={password}/>
            </div>
            <div className='second3'>
            <input type="text" name="age" placeholder="Age" className="inputfieldss" ref={age}/>
            <input type="text" name="email" placeholder="Email Address" className="inputfieldss" ref={email}/>
            <input type="password" name="passwordAgain" placeholder="Confirm Password" className="inputfieldss" ref={passwordAgain}/>
            </div>
            </div>
            <div className='lower'>

            <label id="gender"><strong>Gender</strong></label>
            <div className="genderControl">
                <div className="genderCategory">
                    <input type="radio" name="gender" value="Male" ref={gender}/>
                    <label>Male</label><br/>
                </div>
                <div className="genderCategory">
                    <input type="radio" name="gender" value="Female" ref={gender}/>
                    <label>Female</label><br/>
                </div>
                <div className="genderCategory">
                    <input type="radio" name="gender" value="Custom" ref={gender}/>
                    <label>Others</label><br/>
                </div>
            </div>
            </div>
            <button type="submit" className="inputfieldss registerbtn" onClick={handleClick}>Register</button>
        </form>
        <h4>Already Have An Account?<Link to='/login' className="loginback">LogIn</Link></h4>
      </div>
    </div>
    </>
  )
}

export default Register
