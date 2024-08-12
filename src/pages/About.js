import React from 'react'
import ContactHeader from '../components/Header/Header'
import Header from '../components/Navigation'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'
import AdvisoryFirm from '../components/AdvisoryFirm'
import Whatdrivesus from '../components/WhatDrivesus'
import TeamSection from '../components/OurTeam'

const About = () => {
  return (
    <div>
        <ContactHeader/>
        <Header/>
        <Aboutus/>
        <AdvisoryFirm/>
        <Whatdrivesus/>
        <TeamSection/>
        <Footer/>
    </div>
  )
}

export default About