'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function MobileLoadingBar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      if (isMobile) {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = windowHeight > 0 ? window.scrollY / windowHeight : 0
        setScrollProgress(scrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  if (!isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-accent-yellow md:hidden z-50"
      style={{ width: `${scrollProgress * 100}%` }}
      initial={{ width: '0%' }}
      animate={{ width: `${scrollProgress * 100}%` }}
      transition={{ duration: 0.1, ease: 'linear' }}
    />
  )
}
