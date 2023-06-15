import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact'
import OfferRide from './pages/OfferRide/OfferRide';
import Login from "./pages/Login/Login.jsx"
import Rides from './pages/Rides/Rides';
import Profile from './pages/Profile/Profile';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
    <div className="App">
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/register" element={user? <Navigate to='/'/>:<Register/>}/>
         <Route path="/login" element={user? <Navigate to='/'/>:<Login/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/offeraride" element={user? <OfferRide/>: <Login/>}/>
         <Route path="/rides" element={user? <Rides/>: <Login/>}/>
         <Route path="/profile" element={user? <Profile/>: <Login/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
