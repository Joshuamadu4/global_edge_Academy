import AboutAndMission from '@/sections/AboutAndMission'
import ContactUs from '@/sections/ContactUs'
import CurriculumSection from '@/sections/CurriculumSection'
import Features from '@/sections/Features'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Pricing from '@/sections/Princing'
import Programs from '@/sections/Program'
import Testimonials from '@/sections/Testimonials'
import React from 'react'

const page = () => {
  return (
    <main className='overflow-hidden'>
      <Header/>
      <Hero/>
      <AboutAndMission/>
      <Features/>
      <Programs/>
      <CurriculumSection/>
      <Testimonials/>
      <Pricing/>
      <ContactUs/>
      <Footer/>


    </main>
  )
}

export default page