'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Complete loading after 2.5 seconds
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 2500)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-dark-bg z-[9999] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-6xl md:text-7xl font-bold text-white font-bebas leading-tight text-center mb-6"
        style={{ letterSpacing: '0.08em' }}
      >
        Welcome to<br />
        My Portfolio
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-text-muted text-sm md:text-base tracking-widest font-dm-sans"
      >
        Just loading
      </motion.p>

      {/* Loading indicator - simple line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-accent-color origin-left shadow-lg"
        style={{
          boxShadow: '0 0 20px rgba(228,228,231,0.12)'
        }}
      />
    </motion.div>
  )
}
