'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { TypeWriter } from './TypeWriter'
import { StatsCounter } from './StatsCounter'

interface Particle {
  id: number
  x: number
  y: number
  duration: number
  delay: number
}

export function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    // Generate floating particles
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 lg:pt-0"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Floating particles background */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="floating-particle fixed w-1 h-1 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: Math.random() * 0.1 + 0.05,
            backgroundColor: 'rgba(255,255,255,0.8)',
          }}
          animate={{
            y: [0, -80],
            opacity: [Math.random() * 0.1 + 0.05, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle background glow blob */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%)',
          opacity: 0.03,
          zIndex: -2,
        }}
        animate={{
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 px-6 lg:px-12 min-h-screen flex items-center">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Small tag */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm uppercase tracking-widest font-dm-sans"
              style={{ color: 'var(--accent-color)' }}
            >
              Hello, I'm
            </motion.p>

            {/* Large name heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl lg:text-7xl xl:text-8xl font-bold font-bebas leading-tight"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: '0.05em',
                textShadow: '0 0 40px var(--accent-color)',
              }}
            >
              Aswath S A
            </motion.h1>

            {/* Mobile Profile Image - appears between name and role */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:hidden flex justify-center mt-10 pb-8"
            >
              <div className="relative" style={{ width: '260px', height: '340px' }}>
                {/* Primary rotating ring */}
                <div
                  className="hero-photo-primary-ring absolute inset-0 rounded-lg z-0"
                  style={{
                    width: 'calc(100% + 40px)',
                    height: 'calc(100% + 40px)',
                    left: '-20px',
                    top: '-20px',
                    borderRadius: '16px',
                    background: 'conic-gradient(from var(--angle, 0deg), rgba(255,255,255,0.15), transparent 30%, rgba(255,255,255,0.15) 60%, transparent)',
                    backgroundClip: 'border-box',
                  }}
                />

                {/* Secondary dashed ring */}
                <div
                  className="hero-photo-secondary-ring absolute rounded-lg z-0"
                  style={{
                    width: 'calc(100% + 70px)',
                    height: 'calc(100% + 70px)',
                    left: '-35px',
                    top: '-35px',
                    borderRadius: '20px',
                    border: `1px dashed rgba(255,255,255,0.06)`,
                  }}
                />

                {/* Background glow */}
                <div className="absolute inset-0 rounded-lg" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

                {/* Profile image with portrait frame */}
                <div
                  className="relative w-full h-full rounded-lg overflow-hidden border z-10"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'rgba(255,255,255,0.15)',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  {/* Dark gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-20"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)',
                    }}
                  />

                  <Image
                  src="/IMG_20260404_122553.jpg"
                  alt="Profile"
                    fill
                    className="object-cover w-full h-full"
                    style={{
                      objectPosition: 'center top',
                      objectFit: 'cover',
                    }}
                    priority
                  />
                </div>

                {/* Corner brackets */}
                {[
                  { top: '-8px', left: '-8px', borderTopWidth: '2px', borderLeftWidth: '2px' },
                  { top: '-8px', right: '-8px', borderTopWidth: '2px', borderRightWidth: '2px' },
                  { bottom: '-8px', left: '-8px', borderBottomWidth: '2px', borderLeftWidth: '2px' },
                  { bottom: '-8px', right: '-8px', borderBottomWidth: '2px', borderRightWidth: '2px' },
                ].map((style, idx) => (
                  <div
                    key={idx}
                    className={`hero-photo-bracket hero-photo-bracket-${idx + 1} absolute w-4 h-4 z-20`}
                    style={{
                      ...style,
                      border: '2px solid rgba(255,255,255,0.4)',
                      borderTopColor: style.borderTopWidth ? 'rgba(255,255,255,0.4)' : 'transparent',
                      borderRightColor: style.borderRightWidth ? 'rgba(255,255,255,0.4)' : 'transparent',
                      borderBottomColor: style.borderBottomWidth ? 'rgba(255,255,255,0.4)' : 'transparent',
                      borderLeftColor: style.borderLeftWidth ? 'rgba(255,255,255,0.4)' : 'transparent',
                    } as any}
                  />
                ))}
              </div>
            </motion.div>

            {/* Typing animation for roles */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl font-bebas"
              style={{
                color: 'var(--accent-color)',
                letterSpacing: '0.05em',
              }}
            >
              <TypeWriter
                text="Developer • Designer • Community Leader"
                className="text-2xl font-bebas"
              />
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-lg leading-relaxed font-dm-sans max-w-md"
              style={{ color: 'var(--text-secondary)' }}
            >
              I build modern web experiences and actively contribute to innovation-driven communities. I focus on creating clean, functional, and impactful digital solutions.
            </motion.p>

            {/* Additional highlight */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-sm font-dm-sans"
              style={{ color: 'var(--text-muted)' }}
            >
              Explore my projects and contributions on GitHub.
            </motion.p>

            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <StatsCounter />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="https://github.com/Aswath2005"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                GitHub Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('contact')}
                className="btn-outline inline-flex items-center justify-center gap-2 group"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Profile Image with Portrait Frame (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative" style={{ width: '320px', height: '420px' }}>
              {/* Primary rotating ring */}
              <div
                className="hero-photo-primary-ring absolute inset-0 rounded-3xl z-0"
                style={{
                  width: 'calc(100% + 40px)',
                  height: 'calc(100% + 40px)',
                  left: '-20px',
                  top: '-20px',
                  borderRadius: '24px',
                  background: 'conic-gradient(from var(--angle, 0deg), rgba(255,255,255,0.15), transparent 30%, rgba(255,255,255,0.15) 60%, transparent)',
                  backgroundClip: 'border-box',
                }}
              />

              {/* Secondary dashed ring */}
              <div
                className="hero-photo-secondary-ring absolute rounded-3xl z-0"
                style={{
                  width: 'calc(100% + 70px)',
                  height: 'calc(100% + 70px)',
                  left: '-35px',
                  top: '-35px',
                  borderRadius: '28px',
                  border: `1px dashed rgba(255,255,255,0.06)`,
                }}
              />

              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

              {/* Profile image with portrait frame */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden border z-10"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)',
                  }}
                />

                <Image
                  src="/IMG_20260404_122553.jpg"
                  alt="Profile"
                  fill
                  className="object-cover w-full h-full"
                  style={{
                    objectPosition: 'center top',
                    objectFit: 'cover',
                  }}
                  priority
                />
              </div>

              {/* Corner brackets */}
              {[
                { top: '-8px', left: '-8px', borderTopWidth: '2px', borderLeftWidth: '2px' },
                { top: '-8px', right: '-8px', borderTopWidth: '2px', borderRightWidth: '2px' },
                { bottom: '-8px', left: '-8px', borderBottomWidth: '2px', borderLeftWidth: '2px' },
                { bottom: '-8px', right: '-8px', borderBottomWidth: '2px', borderRightWidth: '2px' },
              ].map((style, idx) => (
                <div
                  key={idx}
                  className={`hero-photo-bracket hero-photo-bracket-${idx + 1} absolute w-4 h-4 z-20`}
                  style={{
                    ...style,
                    border: '2px solid rgba(255,255,255,0.4)',
                    borderTopColor: style.borderTopWidth ? 'rgba(255,255,255,0.4)' : 'transparent',
                    borderRightColor: style.borderRightWidth ? 'rgba(255,255,255,0.4)' : 'transparent',
                    borderBottomColor: style.borderBottomWidth ? 'rgba(255,255,255,0.4)' : 'transparent',
                    borderLeftColor: style.borderLeftWidth ? 'rgba(255,255,255,0.4)' : 'transparent',
                  } as any}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
