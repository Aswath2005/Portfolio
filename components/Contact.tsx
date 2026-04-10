'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import { Mail, MapPin, Linkedin, Instagram, Github, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thanks for reaching out! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)

      setTimeout(() => {
        setSubmitMessage('')
      }, 3000)
    }, 1500)
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/aswath-s-a-3702a9292', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/aswath2_4/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/Aswath2005', label: 'GitHub' },
  ]

  return (
    <section id="contact" className="py-16 md:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black font-bebas text-white" style={{ letterSpacing: '-0.02em' }}>
            CONTACT
          </h2>
          <motion.div 
            className="h-1 w-24 mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ background: 'rgba(255,255,255,0.3)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
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
              className="text-lg text-text-muted leading-relaxed font-dm-sans"
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
              <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
              <p className="text-text-muted font-dm-sans">
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
                    className="transition-colors duration-300"
                    style={{ color: '#888888' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
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
              className="inline-flex items-center gap-3 transition-colors group"
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
              <p className="text-text-muted font-dm-sans transition-colors" style={{ color: 'var(--text-muted)' }}>
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
            className="p-8 border-2 border-dark-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <label className="block text-sm font-bold text-white mb-2 font-bebas tracking-widest">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-none bg-card-bg border-2 border-dark-border text-white placeholder-text-muted-dark focus:outline-none transition-all font-dm-sans"
                  style={{
                    borderColor: 'var(--dark-border)',
                  } as React.CSSProperties}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--dark-border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
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
                <label className="block text-sm font-bold text-white mb-2 font-bebas tracking-widest">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-none bg-card-bg border-2 border-dark-border text-white placeholder-text-muted-dark focus:outline-none transition-all font-dm-sans"
                  style={{
                    borderColor: 'var(--dark-border)',
                  } as React.CSSProperties}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--dark-border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
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
                <label className="block text-sm font-bold text-white mb-2 font-bebas tracking-widest">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-none bg-card-bg border-2 border-dark-border text-white placeholder-text-muted-dark focus:outline-none transition-all resize-none font-dm-sans"
                  style={{
                    borderColor: 'var(--dark-border)',
                  } as React.CSSProperties}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--dark-border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
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
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 group disabled:opacity-50 font-bebas tracking-wider transition-all"
              >
                {isSubmitting ? 'SENDING...' : 'SEND'}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Success Message */}
              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-medium text-center font-dm-sans"
                  style={{ color: 'var(--accent)' }}
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
