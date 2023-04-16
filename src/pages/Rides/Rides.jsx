import React, { useEffect, useState } from "react";
import "./rides.css";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
const Rides = () => {
  const [cards, setCards] = useState([]);
  const datacheck = {
    start: "AKGEC",
    destination: "New Delhi",
  };
  useEffect(() => {
    axios
      .post("https://carpooling-1sqz.onrender.com/api/allRides", datacheck)
      .then((response) => {
        response.json();
        console.log(response.data);
      })
      .then((data) => setCards(data));
  }, []);

  return (
    <>
      {" "}
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
