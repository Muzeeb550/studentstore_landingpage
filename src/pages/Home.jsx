import React from 'react'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import Screenshots from '../components/sections/Screenshots'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import Download from '../components/sections/Download'

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Screenshots />
      <FAQ />
      <FinalCTA />
      <Download />
    </div>
  )
}

export default Home
