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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled ? 'py-3 backdrop-blur-md' : 'py-4 bg-dark-bg/50 backdrop-blur-sm'
        }`}
        style={isScrolled ? { 
          background: 'var(--navbar-bg)',
          backgroundImage: 'linear-gradient(to bottom, var(--rgba-light-02), transparent)',
          borderColor: 'var(--rgba-light-06)',
        } : {
          borderColor: 'var(--rgba-light-04)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - "AS" Monogram */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('home')}
            className="flex-shrink-0 group focus-ring"
          >
            <span 
              className="text-sm font-black font-bebas tracking-wider transition-all duration-300" 
              style={{ 
                color: 'var(--text-primary)',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}
            >
              AS
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-xs font-black font-bebas transition-colors cursor-pointer group focus-ring uppercase ${
                  activeSection === link.href
                    ? 'text-[var(--text-primary)]'
                    : '[&]:text-[var(--text-tertiary)] hover:[&]:text-[var(--text-primary)]'
                }`}
                style={{
                  letterSpacing: '0.08em',
                  fontSize: '0.8rem',
                }}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 w-full h-0.5"
                    style={{ background: 'var(--rgba-light-20)' }}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Controls - Menu + Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <ThemeToggle />
            
            {/* Hamburger Menu */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 focus-ring"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
              )}
            </motion.button>
          </div>

          {/* Hidden Hamburger Menu (for desktop) */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden border-t ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{
            background: isScrolled ? 'var(--rgba-light-02)' : 'var(--accent-subtle)',
            backdropFilter: 'blur(8px)',
            borderColor: 'var(--rgba-light-06)',
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
          </div>
        </motion.div>
      </motion.nav>

      {/* Subtle blur glow below navbar */}
      <div
        className="fixed top-[60px] left-0 right-0 z-39 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.03), transparent)',
        }}
      />
    </>
  )
}
