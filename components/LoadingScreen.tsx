'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TypeWriter } from './TypeWriter'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const portfolioText = 'PORTFOLIO'

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Ensure we start at top of page
    window.scrollTo(0, 0)
    
    // Complete loading after 1.8 seconds
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
      onLoadingComplete()
    }, 1800)

    return () => {
      clearTimeout(timer)
    }
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.6, ease: 'easeInOut' } }}
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-6xl md:text-7xl font-bold font-bebas leading-tight text-center mb-6"
        style={{
          letterSpacing: '0.08em',
          color: 'var(--text-primary)',
        }}
      >
        Welcome to
      </motion.div>

      {/* Portfolio text with letter by letter reveal */}
      <div className="flex gap-1 justify-center mb-6">
        {portfolioText.split('').map((letter, idx) => (
          <motion.span
            key={idx}
            className="text-6xl md:text-7xl font-bold font-bebas"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.35 + idx * 0.08,
              duration: 0.4,
              ease: 'easeOut',
            }}
            style={{
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Sweep line animation */}
      <motion.div
        className="relative h-1 mb-8 origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          delay: 1.0,
          duration: 0.7,
          ease: 'easeOut',
        }}
        style={{
          width: '128px',
          backgroundColor: 'rgba(255,255,255,0.5)',
          boxShadow: '0 0 20px rgba(255,255,255,0.1)',
        }}
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.3,
          ease: 'easeOut',
        }}
        className="text-sm md:text-base tracking-widest font-dm-sans"
        style={{ color: 'var(--text-muted)' }}
      >
        Just loading
      </motion.p>

      {/* Loading progress bar at bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 right-0 h-1.5 origin-left"
        style={{
          backgroundColor: 'rgba(255,255,255,0.4)',
          boxShadow: '0 0 15px rgba(255,255,255,0.08)',
        }}
      />
    </motion.div>
  )
}
