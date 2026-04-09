'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'

const navLinks = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'projects', label: 'Projects' },
  { href: 'experience', label: 'Experience' },
  { href: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-3 backdrop-blur-md' : 'py-6 bg-dark-bg/50 backdrop-blur-sm'
      }`}
      style={isScrolled ? { background: 'rgba(10,10,10,0.85)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('home')}
          className="flex-shrink-0 group"
        >
          <span className="text-3xl font-bold text-accent-strong font-bebas tracking-widest transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            PORTFOLIO
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative text-sm font-medium transition-colors font-dm-sans cursor-pointer group ${
                activeSection === link.href
                  ? 'text-accent-strong'
                  : 'text-text-muted hover:text-accent-strong'
              }`}
              whileHover={{ color: '#ffffff' }}
            >
              {link.label}
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                  activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* Hamburger Menu */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-text-light" />
          ) : (
            <Menu className="w-6 h-6 text-text-light" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-dark-bg/90 backdrop-blur ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={
                isOpen
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -20 }
              }
              transition={{ delay: i * 0.1 }}
              onClick={() => handleNavClick(link.href)}
              className={`block w-full text-left text-lg font-medium py-3 px-2 font-bebas cursor-pointer transition-colors rounded ${
                activeSection === link.href
                  ? 'text-accent-strong'
                  : 'text-text-light hover:text-accent-strong'
              }`}
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
