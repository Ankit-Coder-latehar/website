import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import Contactus from '../components/ContactUs'
import Offices from '../components/Offices'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'


const Contact = () => {
  return (
    <div>
        <ContactHeader/>
        <Header/>
        <Contactus/>
        <Offices/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact