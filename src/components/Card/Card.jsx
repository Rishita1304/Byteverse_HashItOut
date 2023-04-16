import React from 'react'
import "./card.css"
import { CCard,CCardImage,CCardBody,CButton,CCardText,CCardTitle } from '@coreui/react'
import logo from "../../images/logo.png";
const Card = ({data}) => {
  return (
    <CCard style={{ width: '18rem' }} className='main'>
  <CCardImage orientation="top" src={logo} className='card_logo'/>
  <CCardBody>
    <CCardTitle style={{ fontWeight:"bold",padding:"0.5rem",fontSize:"1rem" }}>16th April</CCardTitle>
    <CCardText>
    <div className="card_content">Pooler Name:-{data.email}</div>
     <div className="card_content">Starting At:400pm</div>
     <div className="card_content">Starting from:{data.start}</div>
     <div className="card_content">Destination:{data.destination} </div>
     <div className="card_content">Vacancy:{data.vacancy} </div>
     <div className="card_content">Price: ₹{data.price} </div>
    </CCardText>
    <CButton href="/success" className='card_button'>SHARE RIDE</CButton>
  </CCardBody>
</CCard>
  )
}

export default Card