import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Request from '../../components/Request/Request'
import Team from '../../components/Team/Team'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Testimonials from '../../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Request/>
      <About/>
      <Testimonials/>
      <Team/>
      <Footer/>
    </>
  )
}

export default Home
