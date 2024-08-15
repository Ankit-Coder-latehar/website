import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServiceSection'
import Footer from '../components/Footer'
import Disclaimer from '../components/Disclaimer'

const Home = () => {
  return (
    <div>
      <Disclaimer/>
        <ContactHeader/>
        <Header/>
        <HeroSection/>
        <ServicesSection/>
        <Footer/>
    </div>
  )
}

export default Home