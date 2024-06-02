import React, { useEffect, useState } from "react";
import "./rides.css";
import Card from "../../components/Card/Card";
import "reactjs-popup/dist/index.css";
import Navbar from "../../components/Navbar/Navbar";
import { publicRequest } from "../../Request";
import Footer from '../../components/Footer/Footer.js'
import Spinner from "../../components/spinner/Spinner";
const Rides = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const datacheck = {
    start: localStorage.getItem("pickup") ,
    destination: localStorage.getItem("destination"),
    time: localStorage.getItem("time"),
    date: localStorage.getItem("date"),
  };
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        publicRequest
          .post("auth/allRides", datacheck)
          .then((e) => {
            console.log(e.data);
            setCards(e.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, );

  return (
    <>
      <Navbar />
      {loading? <Spinner/>:(

        <div className="card_container">
          {cards.map((card) => (
            <Card key={card.id} data={card} />
            ))}
        </div>
            )}
      <Footer/>
    </>
  );
};

export default Rides;
