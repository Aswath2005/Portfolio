'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

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

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-dark-bg pt-24 lg:pt-0"
    >
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
              className="text-6xl lg:text-7xl xl:text-8xl font-bold font-bebas text-white leading-tight"
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
                {/* Background layer - offset rectangle */}
                <div className="absolute w-full h-full rounded-2xl bg-dark-secondary" style={{ bottom: '-10px', right: '-10px' }} />
                
                {/* Profile image with portrait frame */}
                <div 
                  className="relative w-full h-full rounded-2xl overflow-hidden border border-accent-color"
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

            {/* Yellow subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-2xl text-accent-color font-bebas"
              style={{ letterSpacing: '0.05em' }}
            >
              Developer • Designer • Community Leader
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
              {/* Background layer - offset rectangle */}
              <div className="absolute w-full h-full rounded-2xl bg-card-bg" style={{ bottom: '-10px', right: '-10px' }} />
              
              {/* Profile image with portrait frame */}
              <div 
                className="relative w-full h-full rounded-2xl overflow-hidden border border-accent-color"
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
