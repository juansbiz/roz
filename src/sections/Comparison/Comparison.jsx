import React from 'react'
import { Check, X } from 'lucide-react'

const comparisons = [
  { feature: 'Monthly Fee', stripe: '$500+', roz: '$0' },
  { feature: 'Transaction Fees', stripe: '2.9% + 30¢', roz: '$0' },
  { feature: 'Unlimited Transactions', stripe: 'X', roz: 'Check' },
  { feature: 'Open Source', stripe: 'X', roz: 'Check' },
  { feature: 'Self-Hosted', stripe: 'X', roz: 'Check' },
  { feature: 'Data Ownership', stripe: 'X', roz: 'Check' },
  { feature: 'PCI Compliance', stripe: 'Yes', roz: 'Yes' },
  { feature: 'Setup Time', stripe: 'Days', roz: 'Minutes' },
]

export default function Comparison() {
  return (
    <section id="compare" className="relative bg-roz-dark py-20 lg:py-32 border-y border-white/10" style={{ backgroundColor: '#101010' }}>
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: 'Bebas Neue, cursive' }}
          >
            Stripe vs <span className="text-roz-yellow">ROZ</span>
          </h2>
          <p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            See why thousands of businesses are switching to ROZ
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-white/10 border-b border-white/10">
            <div className="p-6 font-bebas text-xl text-white/60" style={{ fontFamily: 'Bebas Neue, cursive' }}>
              Feature
            </div>
            <div className="p-6 font-bebas text-xl text-white text-center" style={{ fontFamily: 'Bebas Neue, cursive' }}>
              Stripe
            </div>
            <div className="p-6 font-bebas text-xl text-roz-yellow text-center" style={{ fontFamily: 'Bebas Neue, cursive' }}>
              ROZ
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 border-b border-white/10 last:border-b-0 ${index % 2 === 0 ? 'bg-transparent' : 'bg-white/5'}`}
            >
              <div className="p-6 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {row.feature}
              </div>
              <div className="p-6 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {row.stripe === 'X' ? (
                  <X className="w-6 h-6 text-red-400 mx-auto" />
                ) : row.stripe === 'Check' ? (
                  <Check className="w-6 h-6 text-white/40 mx-auto" />
                ) : (
                  <span className="text-white/60">{row.stripe}</span>
                )}
              </div>
              <div className="p-6 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {row.roz === 'Check' ? (
                  <Check className="w-6 h-6 text-roz-yellow mx-auto" />
                ) : (
                  <span className="text-roz-yellow font-bold">{row.roz}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-block bg-roz-yellow text-black font-bebas font-bold px-10 py-4 rounded-lg text-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-roz-yellow/30"
            style={{ fontFamily: 'Bebas Neue, cursive' }}
          >
            Start Saving Today →
          </a>
        </div>
      </div>
    </section>
  )
}
