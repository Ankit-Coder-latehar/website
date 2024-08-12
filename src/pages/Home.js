import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServiceSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <ContactHeader/>
        <Header/>
        <HeroSection/>
        <ServicesSection/>
        <Footer/>
    </div>
  )
}

export default Home