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
      {/* Dot grid pattern with fade mask */}
      <div
        className="absolute inset-0 z-0 fade-mask pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--rgba-light-06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Large radial gradient spotlight */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, var(--rgba-light-04), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

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

      <div className="relative z-10 px-6 lg:px-12 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:mt-24 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="premium-badge w-fit"
            >
              <span className="flex items-center gap-2">
                <span className="text-[10px]">✦</span>
                Hello, I'm
              </span>
            </motion.div>

            {/* Large name heading with gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="gradient-text"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontFamily: 'Bebas Neue, sans-serif',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              ASWATH S A
            </motion.h1>

            {/* Typing animation for roles */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-dm-sans"
              style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                color: 'var(--text-tertiary)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              <TypeWriter
                text="Developer • Designer • Community Leader"
                className="font-bebas"
              />
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg leading-8 md:leading-relaxed font-dm-sans max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              I build modern web experiences and actively contribute to innovation-driven communities. I focus on creating clean, functional, and impactful digital solutions.
            </motion.p>

            {/* Stats Row with subtle top border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8"
              style={{
                borderTop: '1px solid var(--rgba-light-06)',
                paddingTop: '24px',
              }}
            >
              <StatsCounter />
            </motion.div>

            {/* Mobile Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:hidden flex justify-center mt-12 mb-8"
            >
              <div className="relative" style={{ width: '280px', height: '360px' }}>
                {/* Halo glow behind photo */}
                <div
                  className="halo-effect absolute inset-0 rounded-lg"
                  style={{
                    width: '500px',
                    height: '600px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />



                {/* Profile image with portrait frame */}
                <div
                  className="relative w-full h-full overflow-hidden z-10"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '18px',
                    boxShadow: '0 0 80px rgba(255,255,255,0.25), 0 0 50px rgba(255,255,255,0.2), 0 0 25px rgba(255,255,255,0.15), 0 20px 60px rgba(0,0,0,0.5), inset 0 -60px 40px rgba(0,0,0,0.8), inset 0 1px 0px rgba(255,255,255,0.03)',
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
                    className="absolute w-4 h-4 z-20"
                    style={{
                      ...style,
                      border: '2px solid var(--rgba-light-30)',
                      borderTopColor: style.borderTopWidth ? 'var(--rgba-light-30)' : 'transparent',
                      borderRightColor: style.borderRightWidth ? 'var(--rgba-light-30)' : 'transparent',
                      borderBottomColor: style.borderBottomWidth ? 'var(--rgba-light-30)' : 'transparent',
                      borderLeftColor: style.borderLeftWidth ? 'var(--rgba-light-30)' : 'transparent',
                    } as any}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                href="https://github.com/Aswath2005"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center justify-center gap-2 group w-full sm:w-auto h-13 text-base font-semibold"
              >
                GitHub Projects
                <ArrowRight className="w-4 h-4 link-with-arrow" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
            {/* Halo glow behind photo */}
            <div
              className="halo-effect absolute inset-0 rounded-lg"
              style={{
                width: '500px',
                height: '600px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Profile image with portrait frame */}
            <div
              className="relative w-full h-full overflow-hidden z-10"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '18px',
                  boxShadow: '0 0 80px rgba(255,255,255,0.25), 0 0 50px rgba(255,255,255,0.2), 0 0 25px rgba(255,255,255,0.15), 0 40px 80px rgba(0,0,0,0.8), inset 0 -60px 40px rgba(0,0,0,0.8), inset 0 1px 0px rgba(255,255,255,0.03)',
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
                className="absolute w-4 h-4 z-20"
                style={{
                  ...style,
                  border: '2px solid var(--rgba-light-30)',
                  borderTopColor: style.borderTopWidth ? 'var(--rgba-light-30)' : 'transparent',
                  borderRightColor: style.borderRightWidth ? 'var(--rgba-light-30)' : 'transparent',
                  borderBottomColor: style.borderBottomWidth ? 'var(--rgba-light-30)' : 'transparent',
                  borderLeftColor: style.borderLeftWidth ? 'var(--rgba-light-30)' : 'transparent',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
