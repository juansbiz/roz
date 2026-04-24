import React from 'react'
import { CreditCard, Code, Server, Infinity, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'No Transaction Fees',
    description: 'Process unlimited payments without paying a single fee to Stripe, PayPal, or anyone else.'
  },
  {
    icon: Code,
    title: '100% Open Source',
    description: 'Full source code available on GitHub. Audit, modify, and deploy without restrictions.'
  },
  {
    icon: Server,
    title: 'Self-Hosted',
    description: 'Run on your own servers or cloud infrastructure. Your data never leaves your control.'
  },
  {
    icon: Infinity,
    title: 'Unlimited Transactions',
    description: 'No caps, no limits, no tiered pricing. Process 1 or 1 million transactions for free.'
  },
  {
    icon: Shield,
    title: 'PCI Compliant',
    description: 'Built with enterprise-grade security. Achieve PCI compliance with self-hosted deployment.'
  },
  {
    icon: Zap,
    title: 'Fast Setup',
    description: 'Get up and running in minutes with our Docker containers and one-click deployments.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-roz-dark py-20 lg:py-32" style={{ backgroundColor: '#101010' }}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: 'Bebas Neue, cursive' }}
          >
            Why Choose <span className="text-roz-yellow">ROZ</span>?
          </h2>
          <p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            The only payment processor you'll ever need. No monthly fees, no transaction costs, no compromises.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-roz-yellow/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-roz-yellow/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-roz-yellow" />
              </div>
              <h3 
                className="font-bebas text-2xl text-white mb-3"
                style={{ fontFamily: 'Bebas Neue, cursive' }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-white/60 leading-relaxed"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
