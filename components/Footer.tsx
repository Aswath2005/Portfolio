'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12 px-6 relative">
      {/* Top gradient fade line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, var(--rgba-light-06), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-muted-dark text-sm font-dm-sans italic" style={{ color: 'var(--rgba-light-20)' }}>
            © {currentYear} Aswath. Built with passion for design, development, and community.
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-dm-sans transition-colors focus-ring rounded-lg"
            style={{ color: 'var(--rgba-light-20)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--rgba-light-20)')}
          >
            Back to top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
