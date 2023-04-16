import React, { useEffect, useState } from "react";
import "./rides.css";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios"
const Rides = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .post("https://carpooling-1sqz.onrender.com/api/")
      .then((response) => response.json())
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
