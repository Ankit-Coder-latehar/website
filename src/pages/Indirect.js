import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import HeadingInDirectTax from '../components/HeadingIndirectTax'
import IndirectTaxServices from '../components/IndirectTaxServices'
import Footer from '../components/Footer'

const Indirect = () => {
  return (
    <div>
        <ContactHeader/>
        <Header/>
        <HeadingInDirectTax/>
        <IndirectTaxServices/>
        <Footer/>
    </div>
  )
}

export default Indirect