import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import HeadingPrivacy from '../components/HeadingPrivacy'
import Privacy from '../components/Privacycontent'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  return (
    <div>
        <ContactHeader/>
        <Header/>
        <HeadingPrivacy/>
        <Privacy/>
        <Footer/>
    </div>
  )
}

export default PrivacyPolicy