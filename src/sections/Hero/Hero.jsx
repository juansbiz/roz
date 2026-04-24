import React from 'react'
import { ArrowRight, CreditCard, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative bg-roz-dark overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32" style={{ backgroundColor: '#101010' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center bg-roz-yellow text-black text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                <Zap className="w-4 h-4 mr-2" />
                100% Free Forever
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-bebas text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 text-white"
              style={{ fontFamily: 'Bebas Neue, cursive', lineHeight: '1.05' }}
            >
              100% Free<br />
              Open Source<br />
              <span className="text-roz-yellow">Payment Processing</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-xl"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Stop paying $500/month to Stripe. ROZ is free, open source, and runs on your own infrastructure. No transaction fees. No limits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="bg-roz-yellow text-black font-bebas font-bold px-8 py-4 rounded-lg text-xl hover:bg-yellow-300 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-roz-yellow/30"
                style={{ fontFamily: 'Bebas Neue, cursive' }}
              >
                Start Free <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white/30 text-white font-bebas font-bold px-8 py-4 rounded-lg text-xl hover:bg-white/10 hover:border-white transition-all duration-300 inline-flex items-center justify-center"
                style={{ fontFamily: 'Bebas Neue, cursive' }}
              >
                View on GitHub
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-roz-yellow" />
                <span>PCI Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-roz-yellow" />
                <span>All Payment Methods</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-roz-yellow" />
                <span>Self-Hosted</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img 
                src="/assets/images/roz-hero-image.png" 
                alt="ROZ Payment Processing Dashboard" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-roz-yellow text-black px-4 py-2 rounded-lg shadow-lg">
              <span className="font-bebas font-bold text-lg" style={{ fontFamily: 'Bebas Neue, cursive' }}>
                $0/month
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
