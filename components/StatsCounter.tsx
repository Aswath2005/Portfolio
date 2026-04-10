'use client'

import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 4, suffix: '+', label: 'Communities Led' },
  { value: 6, suffix: '+', label: 'Projects Built' },
  { value: 15, suffix: '+', label: 'Events Organized' },
  { value: 3, suffix: '', label: 'Years Experience' },
]

export function StatsCounter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 py-12 max-w-md lg:max-w-none"
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Stat Number */}
          <StatNumber value={stat.value} suffix={stat.suffix} />

          {/* Divider line (hidden on last item) */}
          {idx < stats.length - 1 && (
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-8 bg-[var(--border)]" />
          )}

          {/* Label */}
          <p className="text-sm text-[var(--text-muted)] font-dm-sans mt-2 text-center">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

function StatNumber({ value, suffix }: { value: number; suffix: string }) {
  const count = useCountUp(value, 2000)

  return (
    <div className="text-4xl md:text-3xl font-bold font-bebas" style={{ color: 'var(--accent)' }}>
      {count}
      <span>{suffix}</span>
    </div>
  )
}
