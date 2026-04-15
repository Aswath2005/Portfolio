'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent, useEffect } from 'react'
import { Mail, MapPin, Linkedin, Instagram, Github, Send } from 'lucide-react'
import { SectionLabel } from './SectionLabel'
import emailjs from '@emailjs/browser'

// Initialize EmailJS (replace with your Public Key from emailjs.com)
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError('')

    // Check if EmailJS is configured
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setSubmitError('Email service not configured. Please contact the site owner.')
      return
    }

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'aswathsa24@gmail.com', // Your email
        }
      )

      setSubmitMessage('✓ Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    } catch (error) {
      console.error('Email error:', error)
      setSubmitError('Failed to send message. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/aswath-s-a-3702a9292', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/aswath2_4/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/Aswath2005', label: 'GitHub' },
  ]

  return (
    <section 
      id="contact" 
      className="py-16 md:py-20 px-6 relative overflow-hidden"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      {/* Radial glow centered */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.04), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Label */}
        <SectionLabel number="05" label="CONTACT" />

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="gradient-text mb-12"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            fontFamily: 'Bebas Neue, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          GET IN TOUCH
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: false }}
              className="text-lg leading-relaxed font-dm-sans"
              style={{ color: '#9ca3af' }}
            >
              Have a project in mind or want to collaborate? I'd love to hear from you! Let's build something amazing together.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: false }}
              className="flex items-center gap-3"
            >
              <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#ffffff' }} />
              <p className="font-dm-sans" style={{ color: '#d1d5db' }}>
                Kerala, India
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: false }}
              className="space-y-3"
            >
              <p className="font-bold text-white font-bebas tracking-widest">SOCIAL</p>
              <div className="flex gap-6">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-colors duration-300 focus-ring"
                    style={{ color: '#6b7280' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Email */}
            <motion.a
              href="mailto:aswathsa24@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-3 transition-colors group link-with-arrow focus-ring rounded-lg"
              onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector('svg')
                if (icon) icon.style.color = 'var(--accent)'
                const p = e.currentTarget.querySelector('p')
                if (p) p.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector('svg')
                if (icon) icon.style.color = 'var(--accent)'
                const p = e.currentTarget.querySelector('p')
                if (p) p.style.color = 'var(--text-muted)'
              }}
            >
              <Mail className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
              <p className="text-text-muted font-dm-sans transition-colors arrow" style={{ color: 'var(--text-muted)' }}>
                aswathsa24@gmail.com
              </p>
            </motion.a>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="premium-card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <label className="block text-xs font-bold text-white mb-2 font-bebas tracking-widest">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="premium-input w-full"
                  placeholder="Your Name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <label className="block text-xs font-bold text-white mb-2 font-bebas tracking-widest">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="premium-input w-full"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <label className="block text-xs font-bold text-white mb-2 font-bebas tracking-widest">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="premium-input w-full resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 group disabled:opacity-50 font-bebas tracking-wider transition-all"
              >
                {isSubmitting ? 'SENDING...' : 'SEND'}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform arrow" />
              </motion.button>

              {/* Success Message */}
              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-medium text-center font-dm-sans p-3 rounded-lg"
                  style={{ color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
                >
                  {submitMessage}
                </motion.p>
              )}

              {/* Error Message */}
              {submitError && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-medium text-center font-dm-sans p-3 rounded-lg"
                  style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                >
                  {submitError}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

