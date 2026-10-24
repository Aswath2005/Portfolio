'use client'

import { motion } from 'framer-motion'

export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="editorial-label"
    >
      <span>{number}</span>
      <i />
      <strong>{label}</strong>
    </motion.div>
  )
}
