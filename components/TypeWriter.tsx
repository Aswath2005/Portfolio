'use client'

import { useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

interface TypeWriterProps {
  words: string[]
  className?: string
}

export function TypeWriter({ words, className = '' }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // TypeWriter effect
  useEffect(() => {
    if (prefersReducedMotion) {
      // If reduced motion is preferred, just show the first word
      setDisplayedText(words[0])
      return
    }

    const currentWord = words[wordIndex]
    const typingSpeed = isDeleting ? 50 : 80
    const delayBeforeDelete = 1500

    let timeout: NodeJS.Timeout

    if (!isDeleting && displayedText === currentWord) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete)
    } else if (isDeleting && displayedText === '') {
      // Move to next word
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      // Type or delete
      timeout = setTimeout(
        () => {
          setDisplayedText((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : currentWord.slice(0, prev.length + 1)
          )
        },
        typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [displayedText, wordIndex, isDeleting, words, prefersReducedMotion])

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`${
          showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-200`}
      >
        |
      </span>
    </span>
  )
}
