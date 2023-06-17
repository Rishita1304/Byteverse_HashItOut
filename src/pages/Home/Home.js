import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Request from '../../components/Request/Request'
import Team from '../../components/Team/Team'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Test from '../../components/test/Test'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Request/>
      <About/>
      <Team/>
      <Test/>
      <Footer/>
    </>
  )
}

export default Home