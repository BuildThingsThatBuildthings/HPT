'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image
                src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/676947e70bcca05b0b805740.png"
                alt="Hershey Personal Training Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <a href="/about" className="hover:text-accent transition-colors">About</a>
            <a href="/services" className="hover:text-accent transition-colors">Services</a>
            <a href="/testimonials" className="hover:text-accent transition-colors">Testimonials</a>
            <a href="/contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute left-0 right-0 bg-primary px-2 pt-2 pb-3 shadow-lg`}>
          <div className="space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md text-white hover:text-accent transition-colors">Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-white hover:text-accent transition-colors">About</a>
            <a href="/services" className="block px-3 py-2 rounded-md text-white hover:text-accent transition-colors">Services</a>
            <a href="/testimonials" className="block px-3 py-2 rounded-md text-white hover:text-accent transition-colors">Testimonials</a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-white hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
