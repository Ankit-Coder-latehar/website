import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import HeadingDirectTax from '../components/HeadingDirectTax'
import TaxServices from '../components/TaxServices'
import Footer from '../components/Footer'

const DirectTaxServices = () => {
  return (
    <div>
      <ContactHeader/>
      <Header/>
      <HeadingDirectTax/>
      <TaxServices/>
      <Footer/>
    </div>
  )
}

export default DirectTaxServices