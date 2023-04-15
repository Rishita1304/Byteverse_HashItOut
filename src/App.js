import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact'
import OfferRide from './pages/OfferRide/OfferRide';
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/offeraride" element={<OfferRide/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
