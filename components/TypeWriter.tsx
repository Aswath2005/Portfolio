'use client'

import { useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

interface TypeWriterProps {
  text?: string
  className?: string
}

export function TypeWriter({ text = 'Developer • Designer • Community Leader', className = '' }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      // If reduced motion is preferred, show full text immediately
      setDisplayedText(text)
      setIsComplete(true)
      return
    }

    if (displayedText.length === text.length) {
      setIsComplete(true)
      return
    }

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev.length < text.length) {
          return text.slice(0, prev.length + 1)
        }
        return prev
      })
    }, 70)

    return () => clearInterval(interval)
  }, [displayedText, text, prefersReducedMotion])

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`transition-opacity duration-300 ${
          isComplete ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ color: 'var(--accent)' }}
      >
        |
      </span>
    </span>
  )
}
