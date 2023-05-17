import React, { useEffect, useState } from "react";
import "./rides.css";
import Card from "../../components/Card/Card";
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Navbar from "../../components/Navbar/Navbar";
const Rides = () => {
  const [cards, setCards] = useState([]);

  const datacheck = {
    start: localStorage.getItem("pickup"),
    destination: localStorage.getItem("destination"),
    time:localStorage.getItem("time"),
    date:localStorage.getItem("date")    
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const res = axios.post("https://carpooling-1sqz.onrender.com/api/auth/allRides", datacheck)
        console.log(res.data);
        setCards(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

  return (
    <>

      <Navbar />
      <div className="card_container">
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </>
  );
};

export default Rides;
