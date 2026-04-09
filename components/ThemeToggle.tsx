'use client'

import { useTheme } from '@/context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 transition-colors duration-300 hover:bg-[var(--bg-surface)] rounded-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[var(--text-primary)]" />
      ) : (
        <Moon className="w-5 h-5 text-[var(--text-primary)]" />
      )}
    </motion.button>
  )
}
