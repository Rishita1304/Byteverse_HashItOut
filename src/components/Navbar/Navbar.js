import "./Navbar.css";
import logo from "../../images/carlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  
  return (
    <div className="navbar">
        <img src={logo} alt="" className="carlogo"/>
        <nav>
        <Link to="/" className='link'>Home</Link>
          <Link to="/contact" className='link'>Contact Us</Link>
          <Link to="/register" className='link'>Register</Link>          
          <Link to="/login" className='link'>Login</Link>                   

          
        </nav> 
    </div>
  )
}

export default Navbar