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
  const url = `https://carpooling-1sqz.onrender.com/api/auth/allRides`;
  useEffect(() => {
    async function fetchData() {
      try {

        axios
          .post(
            "https://carpooling-1sqz.onrender.com/api/auth/allRides",
            datacheck
          )
          .then((e) => {
            console.log(e.data);
            setCards(e.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url]);

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
