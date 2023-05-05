import React from 'react'
import aboutImg from '../../images/bmw-offer.png'
import driveImg from '../../images/drive.jpg'
import './About.css'
import {RiCheckboxCircleLine} from 'react-icons/ri'

const About = () => {
  return (
    <div className='aboutPage'>
      <section className="about__section">
      <div className='containerr'>
        <div className='roww'>
          <div className='col'>
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__titlee">Welcome to Carpooling</h2>
              <p className="section__description">
              Carpooling, also known as ride-sharing or car-sharing, is the practice of sharing a car with other people to travel together to the same destination. Carpooling can help reduce traffic congestion, air pollution, and the overall cost of transportation. It also provides a more social and environmentally friendly way of commuting.In a typical carpooling scenario, a driver with an empty seat in their car will offer to share their ride with others who are travelling in the same direction. 
              </p>
              <div className='about__top'>
              <div className="about__section-item">
                <p className="section__descriptionn">
                  <RiCheckboxCircleLine className='iconn'/> Reducing traffic congestion.
                </p>

                <p className="section__descriptionn">
                <RiCheckboxCircleLine className='iconn'/> Saving energy.
                </p>
              </div>

              <div className="about__section-item">
                <p className="section__descriptionn">
                <RiCheckboxCircleLine className='iconn'/> Cost Savings.
                </p>
                <p className="section__descriptionn">
                <RiCheckboxCircleLine className='iconn'/> Enhancing social connections.
                </p>

              </div>
              </div>
            </div>
          </div>

          <div className='col' >
            <div className="about__img">
              <img src={aboutImg} alt="" className="imgg" />
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="about__page-section">
        <div className='contain'>
          <div className='roww'>
            <div className='coll' lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="imggg" />
              </div>
            </div>

            <div className='coll' lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__titlee">
                  We Provide Safe Rides
                </h2>

                <p className="section__descriptionn">
                Background checks: Drivers who provide safe ride solutions may undergo a thorough background check to ensure that they have a clean driving record and no criminal history that could put passengers at risk.
                </p>

                <p className="section__descriptionn">
                Vehicle inspection: Drivers may also be required to have their vehicle inspected regularly to ensure that it is safe and reliable for passengers.
                </p>
                <p className="section__descriptionn">
                GPS tracking: Some safe ride solutions may include GPS tracking, which allows passengers to monitor the driver's location and ensure that they are taking the most direct route.
                </p>
                <p className="section__descriptionn">
                Driver ratings: Many safe ride solutions allow passengers to rate their driver based on their experience, which can help other passengers make informed decisions about who to ride with.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    {/* <h6 className="section__subtitle">Need Any Help?</h6> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
