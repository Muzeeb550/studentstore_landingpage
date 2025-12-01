import React from 'react'
import { Helmet } from 'react-helmet-async'
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
    <>
      <Helmet>
        <title>StudentStore - India's #1 Student Shopping & Learning Platform</title>
        <meta 
          name="description" 
          content="StudentStore: Smart shopping for students with product reviews, AI recommendations, and free SkillStore courses. Trusted by 10,000+ students across India. Download free!" 
        />
        <meta 
          name="keywords" 
          content="StudentStore, student shopping app India, college essentials, student deals, SkillStore, student products, AI shopping assistant, student community India" 
        />
        <link rel="canonical" href="https://studentstore-landingpage.vercel.app/" />
        
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="StudentStore - By Students, For Students" />
        <meta property="og:description" content="India's #1 student platform for smart shopping, product reviews, and free learning. Join 10,000+ students!" />
        <meta property="og:url" content="https://studentstore-landingpage.vercel.app/" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data for Home Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "StudentStore",
            "alternateName": "StudentStore India",
            "url": "https://studentstore-landingpage.vercel.app",
            "description": "India's #1 student shopping and learning platform",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://studentstore-landingpage.vercel.app/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

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
    </>
  )
}

export default Home
