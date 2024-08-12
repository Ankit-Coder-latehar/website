import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import HeadingInsolvencyLaws from '../components/HeadingInsolvencyLaws'
import LawsService from '../components/LawsService'
import Footer from '../components/Footer'

const InsolvencyLaws = () => {
  return (
    <div>
        <ContactHeader/>
        <Header/>
        <HeadingInsolvencyLaws/>
        <LawsService/>
        <Footer/>
    </div>
  )
}

export default InsolvencyLaws