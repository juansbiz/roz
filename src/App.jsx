import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  return (
    <div className="bg-roz-dark min-h-screen" style={{ backgroundColor: '#101010' }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
