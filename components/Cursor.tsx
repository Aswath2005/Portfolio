'use client'

import { useEffect, useState } from 'react'

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isOver, setIsOver] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if touch device
    const checkTouching = () => {
      setIsTouchDevice(window.matchMedia('(hover: none)').matches)
    }
    checkTouching()

    if (isTouchDevice) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsOver(true)
    const handleMouseLeave = () => setIsOver(false)

    window.addEventListener('mousemove', handleMouseMove)

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isTouchDevice])

  if (isTouchDevice) {
    return null
  }

  return (
    <>
      {/* Main dot cursor */}
      <div
        className={`pointer-events-none fixed w-1.5 h-1.5 bg-white rounded-full z-50 transition-opacity duration-200 ${
          isOver ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Outer ring cursor */}
      <div
        className="pointer-events-none fixed border border-white rounded-full z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isOver ? '48px' : '32px',
          height: isOver ? '48px' : '32px',
          backgroundColor: isOver ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </>
  )
}
