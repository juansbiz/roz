import React from 'react'
import { Check, Github, ExternalLink } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-roz-dark py-20 lg:py-32" style={{ backgroundColor: '#101010' }}>
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: 'Bebas Neue, cursive' }}
          >
            Simple <span className="text-roz-yellow">Pricing</span>
          </h2>
          <p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            100% free. No hidden fees. No transaction costs. Forever.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="bg-gradient-to-b from-roz-yellow/10 to-transparent border border-roz-yellow/30 rounded-3xl p-10 lg:p-12 text-center">
          {/* Price */}
          <div className="mb-8">
            <span 
              className="font-bebas text-8xl lg:text-9xl text-roz-yellow"
              style={{ fontFamily: 'Bebas Neue, cursive' }}
            >
              FREE
            </span>
            <p 
              className="text-white/60 mt-2 text-lg"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              No credit card required
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto text-left">
            {[
              'Unlimited transactions',
              'No monthly fees',
              'No transaction fees',
              '100% open source',
              'Self-hosted deployment',
              'PCI compliant',
              'All payment methods',
              '24/7 community support',
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-roz-yellow flex-shrink-0" />
                <span className="text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-roz-yellow text-black font-bebas font-bold px-8 py-4 rounded-lg text-xl hover:bg-yellow-300 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-roz-yellow/30"
              style={{ fontFamily: 'Bebas Neue, cursive' }}
            >
              <Github className="w-5 h-5" />
              Get Started on GitHub
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white/30 text-white font-bebas font-bold px-8 py-4 rounded-lg text-xl hover:bg-white/10 hover:border-white transition-all duration-300 inline-flex items-center justify-center gap-2"
              style={{ fontFamily: 'Bebas Neue, cursive' }}
            >
              <ExternalLink className="w-5 h-5" />
              View Documentation
            </a>
          </div>
        </div>

        {/* Savings Callout */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/5 border border-white/10 rounded-2xl px-8 py-6">
            <p 
              className="text-white text-lg lg:text-xl"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <span className="text-roz-yellow font-bold">Average savings:</span> $500+/month compared to Stripe
            </p>
            <p 
              className="text-white/60 text-sm mt-2"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Process 1,000 transactions and save $870 with ROZ
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
