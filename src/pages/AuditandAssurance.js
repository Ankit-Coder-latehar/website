import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import HeadingAssuranceTax from '../components/HeadingAssurance'
import AuditServices from '../components/AuditandAssuranceService'
import Footer from '../components/Footer'

const AuditandAssurance = () => {
  return (
    <div>
        <ContactHeader/>
        <Header/>
        <HeadingAssuranceTax/>
        <AuditServices/>
        <Footer/>
    </div>
  )
}

export default AuditandAssurance