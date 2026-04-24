import React from 'react'
import NavigationBar from '../../components/Header/NavigationBar'
import Hero from '../../sections/Hero/Hero'
import Features from '../../sections/Features/Features'
import Pricing from '../../sections/Pricing/Pricing'
import Comparison from '../../sections/Comparison/Comparison'
import Footer from '../../sections/Footer/Footer'

export default function LandingPage() {
  return (
    <div className="bg-roz-dark min-h-screen" style={{ backgroundColor: '#101010' }}>
      <NavigationBar />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
