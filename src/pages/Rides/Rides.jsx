import React, { useEffect, useState } from "react";
import "./rides.css";
import Card from "../../components/Card/Card";

import Navbar from "../../components/Navbar/Navbar";
const Rides = () => {
  const [cards, setCards] = useState([]);
  const datacheck = {
    start: "AKGEC",
    destination: "New Delhi",
  };
  const url = `https://carpooling-1sqz.onrender.com/api/auth/allRides`;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://carpooling-1sqz.onrender.com/api/auth/allRides",
          {
            method: "POST",
            body: JSON.stringify(datacheck),
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        console.log(response);
        const json = await response.json();
        console.log(json);
        setCards(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url]);

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
