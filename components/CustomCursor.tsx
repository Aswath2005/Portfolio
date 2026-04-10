'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 })
  const [isHoveringLink, setIsHoveringLink] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = () => {
      return (
        typeof window !== 'undefined' &&
        navigator.maxTouchPoints > 0
      )
    }

    setIsMobile(isTouchDevice())
  }, [])

  useEffect(() => {
    if (isMobile) return

    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      if (ringRef.current) {
        animationFrameId = requestAnimationFrame(() => {
          setRingPos((prev) => ({
            x: prev.x + (e.clientX - prev.x) * 0.1,
            y: prev.y + (e.clientY - prev.y) * 0.1,
          }))
        })
      }
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHoveringLink(true)
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHoveringLink(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 flex items-center justify-center"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#ffffff' }} />
      </div>

      {/* Ring that follows */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-50 border-2 rounded-full transition-all duration-200"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHoveringLink ? '40px' : '32px',
          height: isHoveringLink ? '40px' : '32px',
          borderColor: isHoveringLink ? '#ffffff' : 'rgba(255,255,255,0.2)',
          backgroundColor: isHoveringLink ? 'rgba(255,255,255,0.08)' : 'transparent',
        }}
      />
    </>
  )
}
