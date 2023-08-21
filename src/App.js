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
import ForgotPass from './pages/ForgotPassword/ForgotPass';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import BlogPage from './pages/Blog/BlogPage';
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
         <Route path="/blog" element={<BlogPage/>}/>
         <Route path="/offeraride" element={user? <OfferRide/>: <Login/>}/>
         <Route path="/rides" element={user? <Rides/>: <Login/>}/>
         <Route path="/profile" element={user? <Profile/>: <Login/>}/>
         <Route path="/forgot-password" element={user? <Profile/>: <ForgotPass/>}/>
         <Route path="/reset-password/" element={user? <Profile/>: <ResetPassword/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
