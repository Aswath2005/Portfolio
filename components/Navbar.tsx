'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'

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
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? 'py-3 backdrop-blur-md' : 'py-4 bg-dark-bg/50 backdrop-blur-sm'
      }`}
      style={isScrolled ? { 
        background: 'var(--navbar-bg)',
        backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.015), transparent)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('home')}
          className="flex-shrink-0 group"
        >
          <span 
            className="text-3xl font-bold font-bebas tracking-widest transition-all duration-300 px-4 py-2 rounded-lg" 
            style={{ 
              color: 'var(--accent)',
              fontWeight: 700,
              boxShadow: '0 0 20px rgba(255,255,255,0.15), inset 0 0 10px rgba(255,255,255,0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.25), inset 0 0 15px rgba(255,255,255,0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.15), inset 0 0 10px rgba(255,255,255,0.05)'
            }}
          >
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
                  ? 'text-white'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div 
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{ background: 'var(--accent)' }}
                  layoutId="activeIndicator"
                />
              )}
            </motion.button>
          ))}
          
          {/* Theme Toggle */}
          <ThemeToggle />
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
        className={`md:hidden overflow-hidden bg-dark-bg/95 backdrop-blur-md border-b border-white/5 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
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
              className={`block w-full text-left text-base font-medium py-3 px-3 font-dm-sans cursor-pointer transition-all duration-200 rounded-lg hover:bg-white/5 active:bg-white/10`}
              style={{
                color: activeSection === link.href ? '#ffffff' : '#9ca3af',
              }}
            >
              {link.label}
            </motion.button>
          ))}
          
          {/* Mobile Theme Toggle */}
          <div className="pt-4 border-t border-white/10 mt-4">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
