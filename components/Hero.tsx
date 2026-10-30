'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight, Brackets, Github, Instagram, Linkedin, MapPin } from 'lucide-react'
import { TypeWriter } from './TypeWriter'
import { StatsCounter } from './StatsCounter'

export function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-editorial relative overflow-hidden">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="hero-inner relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-between px-6 pb-8 pt-20 lg:px-12 lg:pb-10 lg:pt-24">
        <div className="hero-grid grid items-start gap-10 md:grid-cols-[1.08fr_0.92fr]">
          <div className="hero-copy">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="hero-kicker mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/55"
            >
              <span className="h-2 w-2 rounded-full bg-coral shadow-[0_0_18px_rgba(124,140,255,0.9)]" />
              Hello, I&apos;m
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18 }}
              className="hero-name max-w-5xl font-bebas text-[clamp(4.5rem,9vw,9.5rem)] leading-[0.72] tracking-[-0.035em]"
            >
              ASWATH <span className="hero-name-accent">S A<span className="text-coral">.</span></span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-white/55"
            >
              <TypeWriter text="Developer • Tech Enthusiast • Community Leader" />
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-role"
            >
              Digital experiences <span>with intent.</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 max-w-md text-sm leading-7 text-white/55 md:text-base"
            >
              I build modern web experiences and actively contribute to innovation-driven communities. I focus on creating clean, functional, and impactful digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="hero-actions mt-6 flex flex-wrap gap-3"
            >
              <button className="btn-coral group" onClick={() => handleScroll('projects')}>
                View selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              <button className="btn-quiet group" onClick={() => handleScroll('contact')}>
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="hero-socials"
              aria-label="Social profiles"
            >
              <span className="hero-socials-label">Connect</span>
              <span className="hero-socials-divider" aria-hidden="true" />
              <a href="https://github.com/Aswath2005" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <Github className="h-5 w-5" strokeWidth={1.7} />
              </a>
              <a href="https://linkedin.com/in/aswath-s-a-3702a9292" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin className="h-5 w-5" strokeWidth={1.7} />
              </a>
              <a href="https://www.instagram.com/aswath2_4/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <Instagram className="h-5 w-5" strokeWidth={1.7} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="hero-portrait relative mx-auto w-full max-w-[370px] md:mb-0"
          >
            <div className="hero-photo-frame hero-photo-cutout">
              <Image
                src="/aswath-portrait-source.jpg"
                alt="Aswath, developer and creative technologist"
                fill
                priority
                sizes="(max-width: 700px) 80vw, 38vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 border border-white/15 bg-black/70 px-4 py-3 backdrop-blur-md">
              <MapPin className="h-4 w-4 text-coral" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">Based in Kerala · Open to remote</span>
            </div>
            <div className="hero-code-mark absolute -right-4 -top-5 flex h-16 w-16 items-center justify-center rounded-full border border-coral/60 bg-coral text-black">
              <Brackets className="h-5 w-5" />
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/15 pt-4 md:flex-row md:items-center">
          <StatsCounter />
          <button
            onClick={() => handleScroll('about')}
            className="flex items-center gap-3 self-start font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white md:self-auto"
          >
            Scroll to explore
            <ArrowDownRight className="h-4 w-4 text-coral" />
          </button>
        </div>
      </div>
    </section>
  )
}
