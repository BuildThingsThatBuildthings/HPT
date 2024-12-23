'use client'

import { useEffect, useState } from 'react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're at the top of the page
      const atTop = window.scrollY < 100
      setIsAtTop(atTop)

      // Show button when scrolling down and not at top
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight
      
      // Show the button when we've scrolled 25% of the viewport height
      // and we're not at the very bottom of the page
      const shouldShow = !atTop && 
        scrollPosition > windowHeight * 0.25 && 
        scrollPosition + windowHeight < fullHeight - 100

      if (shouldShow !== isVisible) {
        setIsVisible(shouldShow)
      }
    }

    // Handle initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <a
        href="/contact"
        className="bg-accent text-primary font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2 group"
      >
        <span className="group-hover:scale-105 transition-transform duration-300">
          Change Your Health Today
        </span>
        <svg 
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </a>
    </div>
  )
}
