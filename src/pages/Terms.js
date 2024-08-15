import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import HeadingTerms from '../components/HeadingTerms'
import TermsServices from '../components/Termscontent'
import Footer from '../components/Footer'

const Terms = () => {
  return (
    <div>
        <ContactHeader/>
        <Header/>
        <HeadingTerms/>
        <TermsServices/>
        <Footer/>
    </div>
  )
}

export default Terms