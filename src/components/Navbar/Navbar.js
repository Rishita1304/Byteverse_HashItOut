import "./Navbar.css";
import logo from "../../images/logo1.png";
import { Link } from "react-router-dom";
import img1 from '../../images/noAvatar.png'
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import {AiOutlineLogin, AiOutlinePhone} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const {user} = useContext(AuthContext);
  const removeUser = () => {
    localStorage.clear();
    window.location.reload();
  };
  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarStyle = {
    backgroundColor: scrollPosition > 20 ? "#879ac1" : "transparent",
    transition: "background-color 1s ease-in-out",
  };

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef?.current?.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }
})

  return (
    <div className="navbar" style={navbarStyle}>
      <div className="this">

      <img src={logo} alt="" className="carlogo" />
      <Link to="/" className="link" id="logo">
      <h2>Updriven</h2>
        </Link>
      </div>
      <nav>
      <Link to="/" className="link">
        <BsHouseDoor size={30} className='icoon'/>
        <span>Home</span>
        </Link>
        <Link to="/contact" className="link">
        <AiOutlinePhone size={30} className='icoon'/>
          <span>Contact Us</span>
        </Link>

        {user ? (
          <>
            {/* <Link to="/profile" className="link">
              View Profile
            </Link>
            <Link to="/login" className="link" onClick={removeUser}>
              Logout
            </Link> */}
            <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={img1} alt=""></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
          <Link to="/profile" className="links">
              View Profile
            </Link>
            <hr/>
            <Link to="/login" className="links" onClick={removeUser}>
              Logout
            </Link>
          </ul>
        </div>
      </div>
          </>
        ) : (
          <>
            <Link to="/login" className="link">
            <AiOutlineLogin size={30} className='icoon'/>
            <span>Login</span> 
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
