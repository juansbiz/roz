import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Compare', href: '#compare' },
      { name: 'Documentation', href: '#' },
    ],
    Resources: [
      { name: 'GitHub', href: 'https://github.com' },
      { name: 'API Reference', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'License', href: '#' },
    ],
  }

  return (
    <footer className="bg-roz-dark border-t border-white/10" style={{ backgroundColor: '#101010' }}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="/" className="inline-block mb-4">
              <img 
                src="/assets/images/main-logo.png" 
                alt="ROZ Logo" 
                className="h-10 w-auto"
              />
            </a>
            <p 
              className="text-white/60 text-sm mb-6 max-w-xs"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              100% Free Open Source Payment Processing. No fees. No limits. No compromises.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-roz-yellow transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-roz-yellow transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-roz-yellow transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 
                className="font-bebas text-lg text-white mb-4"
                style={{ fontFamily: 'Bebas Neue, cursive' }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-roz-yellow transition-colors text-sm"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-white/60 text-sm"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            © {currentYear} ROZ. All rights reserved. Open source under MIT License.
          </p>
          <p 
            className="text-white/40 text-xs"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Built with ❤️ by the community
          </p>
        </div>
      </div>
    </footer>
  )
}
