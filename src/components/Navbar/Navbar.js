import "./Navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const {user} = useContext(AuthContext);
  const user = false;

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
    backgroundColor: scrollPosition > 20 ? "rgb(32, 109, 197)" : "transparent",
    transition: "background-color 1s ease-in-out", 
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <img src={logo} alt="" className="carlogo" />
      <nav >
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/contact" className="link">
          Contact Us
        </Link>
        { user? (
          <>
          <Link to="/profile" className="link">
          View Profile
        </Link>
        <Link to="/login" className="link">
          Logout
        </Link>
          </>
        ):(
          <>
        <Link to="/register" className="link">
          Register
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
