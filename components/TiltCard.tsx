'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)
  const [supportsHover, setSupportsHover] = useState(true)

  // Check if device supports hover on mount
  useState(() => {
    if (typeof window !== 'undefined') {
      setSupportsHover(window.matchMedia('(hover: hover)').matches)
    }
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!supportsHover || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const x = e.clientX - rect.left - centerX
    const y = e.clientY - rect.top - centerY

    // Calculate rotation (max 15 degrees)
    const rotX = (y / centerY) * -15
    const rotY = (x / centerX) * 15

    setRotateX(rotX)
    setRotateY(rotY)

    // Calculate shine position
    const shineX = ((e.clientX - rect.left) / rect.width) * 100
    const shineY = ((e.clientY - rect.top) / rect.height) * 100
    setShinePos({ x: shineX, y: shineY })
  }

  const handleMouseEnter = () => {
    if (supportsHover) {
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative transition-transform duration-500 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: supportsHover
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovering ? 1.02 : 1})`
          : 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Content */}
      <div
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>

      {/* Glossy Shine Overlay */}
      {supportsHover && (
        <div
          className="pointer-events-none absolute inset-0 rounded-none transition-opacity duration-300"
          style={{
            opacity: isHovering ? 0.15 : 0,
            background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
            transformStyle: 'preserve-3d',
            transform: 'translateZ(1px)',
          }}
        />
      )}
    </motion.div>
  )
}
