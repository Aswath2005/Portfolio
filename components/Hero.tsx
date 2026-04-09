'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { TypeWriter } from './TypeWriter'
import { StatsCounter } from './StatsCounter'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

interface Particle {
  id: number
  x: number
  y: number
  duration: number
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
        duration: Math.random() * 3 + 3,
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-dark-bg pt-24 lg:pt-0"
    >
      {/* Floating particles background */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="floating-particle w-1 h-1"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: Math.random() * 0.2 + 0.1,
          }}
          animate={{
            y: [0, -100],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle white glow background - left side only */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%)',
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
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {/* Small tag */}
            <motion.p variants={itemVariants} className="text-accent-color font-dm-sans text-sm uppercase tracking-widest">
              Hello, I'm
            </motion.p>

            {/* Large name heading */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl lg:text-7xl xl:text-8xl font-bold font-bebas text-white leading-tight glow-text"
              style={{ letterSpacing: '0.05em' }}
            >
              Aswath S A
            </motion.h1>

            {/* Mobile Profile Image - appears between name and role */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:hidden py-6"
            >
              <div className="relative w-full max-w-xs mx-auto h-80">
                {/* Glow background */}
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 blur-2xl" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />
                
                {/* Background layer - offset rectangle */}
                <div className="absolute w-full h-full rounded-2xl bg-dark-secondary" style={{ bottom: '-10px', right: '-10px' }} />
                
                {/* Profile image with portrait frame */}
                <div 
                  className="relative w-full h-full rounded-2xl overflow-hidden border border-accent-color transition-all duration-300 hover:shadow-lg"
                  style={{
                    boxShadow: '0 25px 50px rgba(255,255,255,0.05)'
                  }}
                >
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    fill
                    className="object-cover w-full h-full"
                    style={{ 
                      objectPosition: 'center top',
                      objectFit: 'cover'
                    }}
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Typing animation for roles */}
            <motion.p
              variants={itemVariants}
              className="text-2xl text-accent-color font-bebas"
              style={{ letterSpacing: '0.05em' }}
            >
              <TypeWriter
                words={['Developer', 'Designer', 'Community Leader']}
                className="text-accent-color font-bebas"
              />
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-muted max-w-md leading-relaxed font-dm-sans"
            >
              I build modern web experiences and actively contribute to innovation-driven communities. I focus on creating clean, functional, and impactful digital solutions.
            </motion.p>

            {/* Additional highlight */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-text-muted font-dm-sans"
            >
              Explore my projects and contributions on GitHub.
            </motion.p>

            {/* Stats Counter */}
            <motion.div variants={itemVariants}>
              <StatsCounter />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
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
          </motion.div>

          {/* Right Column - Profile Image with Portrait Frame (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative" style={{ width: '320px', height: '420px' }}>
              {/* Glow background */}
              <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', transform: 'scale(1.1)' }} />
              
              {/* Background layer - offset rectangle */}
              <div className="absolute w-full h-full rounded-2xl bg-card-bg" style={{ bottom: '-10px', right: '-10px' }} />
              
              {/* Profile image with portrait frame */}
              <div 
                className="relative w-full h-full rounded-2xl overflow-hidden border border-accent-color transition-all duration-300 hover:shadow-lg"
                style={{
                  boxShadow: '0 25px 50px rgba(255,255,255,0.05)'
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover w-full h-full"
                  style={{ 
                    objectPosition: 'center top',
                    objectFit: 'cover'
                  }}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
