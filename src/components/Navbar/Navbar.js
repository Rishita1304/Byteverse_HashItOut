import "./Navbar.css";
import logo from "../../images/logo1.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const {user} = useContext(AuthContext);
  const user = localStorage.getItem("email");
  const removeUser = () => {
    localStorage.removeItem("email");
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
    backgroundColor: scrollPosition > 20 ? "rgb(32, 109, 197)" : "transparent",
    transition: "background-color 1s ease-in-out",
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <div className="this">

      <img src={logo} alt="" className="carlogo" />
      <h2>Updriven</h2>
      </div>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/contact" className="link">
          Contact Us
        </Link>
        {user ? (
          <>
            <Link to="/profile" className="link">
              View Profile
            </Link>
            <Link to="/login" className="link" onClick={removeUser}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" className="link">
              Register
            </Link>
            <Link to="/login" className="link">
              Login
            </Link>
            <Link to="/profile" className="profile">
              Profile
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
