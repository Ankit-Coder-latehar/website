import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import HeadingServices from '../components/HeadingServices'
import AssistanceSection from '../components/AssistanceSection'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
        <ContactHeader/>
        <Header/>
        <HeadingServices/>
        <AssistanceSection/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Services;