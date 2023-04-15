import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
