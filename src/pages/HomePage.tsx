import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Speakers from '../components/Speakers'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default HomePage