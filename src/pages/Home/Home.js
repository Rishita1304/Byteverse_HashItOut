import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Request from '../../components/Request/Request'
import Team from '../../components/Team/Team'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Request/>
      <Team/>
      <Footer/>
    </>
  )
}

export default Home
