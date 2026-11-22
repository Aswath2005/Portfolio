'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'

const navLinks = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'projects', label: 'Projects' },
  { href: 'github', label: 'GitHub' },
  { href: 'experience', label: 'Experience' },
  { href: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setIsNavbarVisible(
        window.innerWidth >= 768 || window.scrollY < window.innerHeight * 0.72
      )
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleNavClick = (href: string) => {
    if (href === 'github') {
      window.open('https://github.com/Aswath2005', '_blank')
      setIsOpen(false)
    } else {
      // Close menu first
      setIsOpen(false)
      // Small delay to ensure menu closes before scrolling
      setTimeout(() => {
        const element = document.getElementById(href)
        if (element) {
          const offsetTop = element.offsetTop - 80 // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={isNavbarVisible ? { y: 0, opacity: 1 } : { y: -24, opacity: 0 }}
        transition={{ duration: 0.38, ease: 'easeOut' }}
        className="fixed left-0 right-0 top-0 z-40 flex justify-center px-4 pt-5 transition-all duration-300 md:pt-7 pointer-events-none"
        style={{ pointerEvents: isNavbarVisible ? 'auto' : 'none' }}
      >
        <div
          className="hidden items-center gap-2 rounded-full border px-2 py-2 shadow-[0_14px_50px_rgba(0,0,0,0.38)] backdrop-blur-xl md:flex"
          style={{
            minHeight: '52px',
            background: 'rgba(12, 14, 23, 0.86)',
            borderColor: 'rgba(255, 255, 255, 0.10)',
            backdropFilter: 'blur(18px)',
          }}
        >
          {/* Desktop Navigation */}
          <div className="flex items-center">
            {navLinks.filter((link) => ['home', 'projects', 'experience', 'about', 'contact'].includes(link.href)).map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative cursor-pointer rounded-full px-4 py-2 text-sm transition-colors focus-ring ${
                  activeSection === link.href
                    ? 'text-[var(--text-primary)]'
                    : '[&]:text-[var(--text-tertiary)] hover:[&]:text-[var(--text-primary)]'
                }`}
                style={{
                  background: activeSection === link.href ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
          <a
            href="/Aswath-SA-Resume.pdf"
            download="Aswath-S-A-Resume.pdf"
            className="ml-1 flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
            style={{ background: '#f5f5f7' }}
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="fixed left-4 right-4 top-4 flex h-12 items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="rounded-full border border-white/10 bg-black/60 px-3 py-2 text-sm font-semibold text-white backdrop-blur-md"
          >
            AS<span style={{ color: 'var(--coral)' }}>.</span>
          </button>
          <div className="flex items-center gap-2">
            <a
              href="/Aswath-SA-Resume.pdf"
              download="Aswath-S-A-Resume.pdf"
              className="flex h-11 items-center gap-1.5 rounded-full px-3.5 text-xs font-semibold text-black"
              style={{ background: '#f5f5f7' }}
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 backdrop-blur-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed left-4 right-4 top-16 overflow-hidden rounded-2xl border md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{
            background: 'rgba(8, 9, 18, 0.94)',
            backdropFilter: 'blur(18px)',
            borderColor: 'rgba(255, 255, 255, 0.09)',
            boxShadow: '0 18px 60px rgba(0,0,0,0.45)',
          }}
        >
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left text-base font-black font-bebas py-3 px-3 cursor-pointer transition-all duration-200 rounded-lg focus-ring uppercase ${
                  activeSection === link.href
                    ? 'text-white/90'
                    : 'text-white/45 hover:text-white/70'
                }`}
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href="/Aswath-SA-Resume.pdf"
              download="Aswath-S-A-Resume.pdf"
              className="mt-3 flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-black"
              style={{ background: '#f5f5f7' }}
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </motion.nav>

    </>
  )
}
