'use client'

import { motion } from 'framer-motion'

interface SectionLabelProps {
  number: string
  label: string
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="flex items-center gap-4 mb-8"
    >
      <div className="h-px w-5 bg-white/30" />
      <span
        className="text-xs font-black uppercase tracking-[0.2em]"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        {number} — {label}
      </span>
    </motion.div>
  )
}
