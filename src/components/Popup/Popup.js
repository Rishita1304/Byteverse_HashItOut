import { CButton } from "@coreui/react";
import "../Card/card.css";
import "./popup.css";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { publicRequest } from "../../Request";

const Popup = ({ data }) => {
  const {user} = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);



  const togglePopup = async() => {
    // const datacheck={
    //   email:user.email,
    //   start:data.pickup,
    //   destination:data.destination,
    //   date:data.date,
    //   vacancy:data.vacancy
    // }
    // publicRequest.post("api/auth/request", datacheck).then((e)=>{
    //   console.log(e.data);
    //   // setTimeout(() => {
    //     window.location.href("/");
    //   // }, 3000);
    // }).catch((err)=>{console.log(err.message);})
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <CButton onClick={togglePopup} className='card_button'>SHAREdfssedfa RIDE</CButton>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={togglePopup}>
              &times;
            </button>
            <div className="content">Dear {user.name}, Thank for connecting with us! <br/>
             We have informed your pooler {data.name} about your sharing.</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Popup;
