'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-dark-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-muted text-sm font-dm-sans">
            © {currentYear} Aswath. Built with passion for design, development, and community.
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-text-muted hover:text-accent-yellow transition-colors text-sm font-dm-sans"
          >
            Back to top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
