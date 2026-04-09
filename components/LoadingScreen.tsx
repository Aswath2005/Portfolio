'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TypeWriter } from './TypeWriter'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const portfolioText = 'PORTFOLIO'

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [showSweepLine, setShowSweepLine] = useState(false)

  useEffect(() => {
    // Show sweep line after text types
    const sweepTimer = setTimeout(() => {
      setShowSweepLine(true)
    }, 1000)

    // Complete loading after 2.5 seconds
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 2500)

    return () => {
      clearTimeout(sweepTimer)
      clearTimeout(timer)
    }
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-dark-bg z-[9999] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.6 } }}
    >
      {/* Main heading with typing animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-6xl md:text-7xl font-bold text-white font-bebas leading-tight text-center mb-6"
        style={{ letterSpacing: '0.08em' }}
      >
        Welcome to
      </motion.div>

      {/* Portfolio text with letter by letter reveal */}
      <div className="flex gap-1 justify-center mb-6">
        {portfolioText.split('').map((letter, idx) => (
          <motion.span
            key={idx}
            className="text-6xl md:text-7xl font-bold text-white font-bebas glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.05, duration: 0.4 }}
            style={{ letterSpacing: '0.08em' }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Sweep line animation */}
      {showSweepLine && (
        <motion.div
          className="relative w-32 h-1 bg-white mb-8 origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            boxShadow: '0 0 20px rgba(255,255,255,0.3)'
          }}
        />
      )}

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-text-muted text-sm md:text-base tracking-widest font-dm-sans"
      >
        Just loading
      </motion.p>

      {/* Loading indicator - progress line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-accent-color origin-left shadow-lg"
        style={{
          boxShadow: '0 0 20px rgba(228,228,231,0.12)'
        }}
      />
    </motion.div>
  )
}
