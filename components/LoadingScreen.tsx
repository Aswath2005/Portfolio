'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    const expandTimer = setTimeout(() => setExpanded(true), 800)
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
      onLoadingComplete()
    }, 2500)

    return () => {
      clearTimeout(expandTimer)
      clearTimeout(timer)
    }
  }, [onLoadingComplete])

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-8%', transition: { duration: 0.55, ease: 'easeInOut' } }}
    >
      <div className="loading-orbit loading-orbit-one" />
      <div className="loading-orbit loading-orbit-two" />

      <motion.div
        className="loading-mark"
        initial={{ opacity: 0, scale: 0.75, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.span layout className="loading-name">
          {(expanded ? ['A', 'S', 'W', 'A', 'T', 'H', ' ', 'S', ' ', 'A'] : ['A', 'S']).map((letter, index) => (
            <motion.span
              layout
              key={`${letter}-${index}`}
              className={expanded && index > 6 ? 'loading-name-accent' : ''}
              initial={{ opacity: 0, scale: 0.5, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: expanded ? index * 0.045 : index * 0.08, duration: 0.32 }}
            >
              {letter === ' ' ? '\u00a0' : letter}
            </motion.span>
          ))}
          <motion.span layout className="loading-name-accent">.</motion.span>
        </motion.span>
      </motion.div>

      <motion.div
        className="loading-label"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.35 }}
      >
        Loading<span className="loading-dots"><i /> <i /> <i /></span>
      </motion.div>

      <motion.div
        className="loading-signal"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
      >
        <i />
        <i />
        <i />
        <i />
      </motion.div>

      <motion.div
        className="loading-progress"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.4, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
