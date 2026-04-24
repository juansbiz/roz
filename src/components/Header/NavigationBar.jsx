import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Compare', href: '#compare' },
    { name: 'GitHub', href: 'https://github.com' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-roz-dark border-b border-white/10" style={{ backgroundColor: '#101010' }}>
      <nav className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/assets/images/main-logo.png" 
              alt="ROZ Logo" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bebas text-xl uppercase text-white hover:text-roz-yellow transition-colors duration-300"
                style={{ fontFamily: 'Bebas Neue, cursive' }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-roz-yellow text-black font-bebas font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-300"
              style={{ fontFamily: 'Bebas Neue, cursive' }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-bebas text-xl uppercase text-white hover:text-roz-yellow transition-colors duration-300 py-2"
                  style={{ fontFamily: 'Bebas Neue, cursive' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#pricing"
                className="bg-roz-yellow text-black font-bebas font-bold px-6 py-3 rounded-lg text-center hover:bg-yellow-300 transition-all duration-300 mt-2"
                style={{ fontFamily: 'Bebas Neue, cursive' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
