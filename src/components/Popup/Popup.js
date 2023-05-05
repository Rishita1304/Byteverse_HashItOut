import "../Card/card.css";
import "./popup.css";
import React, { useState } from "react";

const Popup = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Share Ride</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={togglePopup}>
              &times;
            </button>
            <div className="content">Thank for connecting with us! 
            Dear {data.name},we have informed your pooler and the appropriate time he will be there is 17 pm(24 hours)</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Popup;
