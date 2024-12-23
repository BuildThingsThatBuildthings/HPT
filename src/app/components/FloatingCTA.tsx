'use client'

import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce">
      <a
        href="/contact"
        className="bg-accent text-primary px-6 py-3 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform"
      >
        Start Your Journey
      </a>
    </div>
  )
}
