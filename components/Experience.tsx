'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from './SectionLabel'
import { useSpotlight } from '@/hooks/useSpotlight'

const experiences = [
  {
    role: 'CEO',
    company: 'Legacy IEDC',
    date: 'Present',
    description: 'Leading initiatives and driving innovation in entrepreneurship and development. Building a thriving community of developers and entrepreneurs.',
    link: 'https://iedc.uck.ac.in/team/member/2026cqaoo',
  },
  {
    role: 'Operations Lead',
    company: 'µLearn UCEK',
    date: 'Present',
    description: 'Managing operations and overseeing program execution. Coordinating teams to deliver impactful learning experiences and community events.',
    link: 'https://mulearn.uck.ac.in/#team',
  },
  {
    role: 'Campus Co-Organizer',
    company: 'Google Developer Groups UCEK',
    date: 'Present',
    description: 'Organizing workshops, hackathons, and developer communities. Fostering collaboration and knowledge sharing among developers.',
    link: 'https://gdg.community.dev/gdg-on-campus-university-college-of-engineering-trivandrum-india/',
  },
  {
    role: 'Ex Campus Co-Lead',
    company: 'µLearn UCEK',
    date: 'Previous',
    description: 'Previously led campus initiatives and community development programs. Mentored students and facilitated learning opportunities.',
    link: 'https://mulearn.uck.ac.in/#team',
  },
  {
    role: 'Ex Operations Officer',
    company: 'Legacy IEDC UCEK',
    date: 'Previous',
    description: 'Managed operational tasks and supported organizational goals. Contributed to the growth and success of the entrepreneurship center.',
    link: 'https://iedc.uck.ac.in/team/ex',
  },
]

interface ExperienceCardProps {
  exp: typeof experiences[0]
  idx: number
}

function ExperienceCard({ exp, idx }: ExperienceCardProps) {
  const { containerRef, spotlightRef } = useSpotlight()
  const isPresent = exp.date === 'Present'

  return (
    <motion.div
      ref={containerRef}
      key={idx}
      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: idx * 0.12, duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4 }}
      className="premium-card spotlight-card group relative cursor-pointer overflow-hidden"
      onClick={() => {
        if (exp.link) {
          window.open(exp.link, '_blank')
        }
      }}
    >
      <div ref={spotlightRef} style={{ display: 'none' }} />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-2 mb-2">
          <h3 className="text-xl font-bold font-bebas tracking-wider group-hover:translate-x-1 transition-transform duration-300" style={{ color: 'var(--text-primary)' }}>
            {exp.role}
          </h3>
          <p className="text-sm font-dm-sans" style={{ color: 'var(--rgba-light-35)' }}>
            — {exp.company}
          </p>
        </div>

        <p className="text-sm leading-relaxed font-dm-sans" style={{ color: 'var(--text-secondary)' }}>
          {exp.description}
        </p>
      </div>

      {/* Timeline dot - present pulse */}
      {isPresent && (
        <div
          className="absolute top-8 -left-1 w-3 h-3 rounded-full z-20"
          style={{
            background: 'var(--accent)',
            animation: 'pulse-dot 2s ease-in-out infinite',
            boxShadow: '0 0 0 0 var(--accent-glow)',
          }}
        />
      )}
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <SectionLabel number="04" label="EXPERIENCE" />

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
          EXPERIENCE
        </motion.h2>

        {/* Experience Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} idx={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
