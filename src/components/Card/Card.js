import React from 'react'
import "./card.css"
import { CCard,CCardImage,CCardBody,CButton,CCardText,CCardTitle } from '@coreui/react'
import logo from "../../images/drive.jpg";
import Popup from '../Popup/Popup';
const Card = ({data}) => {
  return (
    <CCard style={{ width: '18rem', height:"auto", paddingBottom:"1rem"}} className='main'>
  <CCardImage orientation="top" src={logo} className='card_logo'/>
  <CCardBody>
    <CCardTitle style={{ fontWeight:"bold",padding:"0.5rem",fontSize:"1rem" }}>{data.date}</CCardTitle>
    <CCardText>
    <div className="card_content">Pooler Name: <strong>{data.name}</strong></div>
     {/* <div className="card_content">Starting At: 400pm</div> */}
     <div className="card_content">Starting:  <strong>{data.start}</strong></div>
     <div className="card_content">Destination: <strong>{data.destination}</strong> </div>
     <div className="card_content">Vacancy: <strong>{data.vacancy}</strong> </div>
     <div className="card_content">Price: <strong>₹{data.price}</strong> </div>
     <Popup data={data} className='card_button'/>
    </CCardText>
    {/* <CButton className='card_button'>SHARE RIDE</CButton> */}
  </CCardBody>
</CCard>
  )
}

export default Card