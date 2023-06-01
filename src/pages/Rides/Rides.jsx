import React, { useEffect, useState } from "react";
import "./rides.css";
import Card from "../../components/Card/Card";
import 'reactjs-popup/dist/index.css';
import Navbar from "../../components/Navbar/Navbar";
import { publicRequest } from "../../Request";
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

        publicRequest
          .post(
            "api/auth/allRides",
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
