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
      className="relative overflow-hidden pt-10 md:pt-16 lg:pt-0"
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
            opacity: Math.random() * 0.15 + 0.08,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.04) 0%, transparent 70%)',
          top: '-100px',
        }}
      />

      <div className="relative z-10 px-6 lg:px-12 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6 flex flex-col justify-center">
            {/* Blue accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h-0.5"
              style={{ background: 'rgba(255,255,255,0.4)' }}
            />

            {/* Small tag */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xs uppercase tracking-[0.15em] font-dm-sans mb-2"
              style={{ color: 'var(--accent)' }}
            >
              Hello, I'm
            </motion.p>

            {/* Large name heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-5xl lg:text-6xl font-black font-bebas leading-none mb-12"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: '0.02em',
              }}
            >
              Aswath S A
            </motion.h1>

            {/* Typing animation for roles */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-2xl font-bold md:font-bebas uppercase md:normal-case tracking-[0.1em] md:tracking-wide mb-16"
              style={{
                color: 'var(--accent)',
                letterSpacing: 'inherit',
              }}
            >
              <TypeWriter
                text="developer. community leader. tech enthusiast"
                className="text-lg md:text-2xl font-bold md:font-bebas"
              />
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-sm md:text-base leading-7 md:leading-relaxed font-dm-sans max-w-md mb-24"
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

            {/* Mobile Profile Image - appears after stats on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:hidden flex justify-center mt-8 mb-8"
            >
              <div className="relative" style={{ width: '280px', height: '360px' }}>
                {/* Primary rotating ring */}
                <div
                  className="hero-photo-primary-ring absolute inset-0 rounded-lg z-0"
                  style={{
                    width: 'calc(100% + 40px)',
                    height: 'calc(100% + 40px)',
                    left: '-20px',
                    top: '-20px',
                    borderRadius: '16px',
                    background: 'conic-gradient(from var(--angle, 0deg), rgba(255,255,255,0.06), transparent 30%, rgba(255,255,255,0.06) 60%, transparent)',
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
                    border: `1px dashed rgba(255,255,255,0.1)`,
                  }}
                />

                {/* Background glow */}
                <div className="absolute inset-0 rounded-lg" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />

                {/* Profile image with portrait frame */}
                <div
                  className="relative w-full h-full rounded-lg overflow-hidden border z-10"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'rgba(255,255,255,0.15)',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
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
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: style.borderTopWidth ? 'rgba(255,255,255,0.3)' : 'transparent',
                      borderRightColor: style.borderRightWidth ? 'rgba(255,255,255,0.3)' : 'transparent',
                      borderBottomColor: style.borderBottomWidth ? 'rgba(255,255,255,0.3)' : 'transparent',
                      borderLeftColor: style.borderLeftWidth ? 'rgba(255,255,255,0.3)' : 'transparent',
                    } as any}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <motion.a
                href="https://github.com/Aswath2005"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center gap-2 group w-full sm:w-auto h-13 text-base font-semibold"
              >
                GitHub Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('contact')}
                className="btn-outline inline-flex items-center justify-center gap-2 group w-full sm:w-auto h-13 text-base font-semibold"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Profile Image with Portrait Frame (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
            style={{ width: '280px', height: '360px', margin: '0 auto' }}
          >
            {/* Primary rotating ring */}
            <div
              className="hero-photo-primary-ring absolute inset-0 rounded-lg z-0"
              style={{
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                left: '-20px',
                top: '-20px',
                borderRadius: '16px',
                background: 'conic-gradient(from var(--angle, 0deg), rgba(255,255,255,0.06), transparent 30%, rgba(255,255,255,0.06) 60%, transparent)',
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
                border: `1px dashed rgba(255,255,255,0.1)`,
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
                boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
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
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: style.borderTopWidth ? 'rgba(255,255,255,0.3)' : 'transparent',
                  borderRightColor: style.borderRightWidth ? 'rgba(255,255,255,0.3)' : 'transparent',
                  borderBottomColor: style.borderBottomWidth ? 'rgba(255,255,255,0.3)' : 'transparent',
                  borderLeftColor: style.borderLeftWidth ? 'rgba(255,255,255,0.3)' : 'transparent',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
