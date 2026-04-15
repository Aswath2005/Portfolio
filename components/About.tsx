'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from './SectionLabel'
import { useSpotlight } from '@/hooks/useSpotlight'

const skills = [
  { name: 'Web Development', description: 'Building responsive and functional web applications using modern tools. Focused on writing clean code and improving development skills through practice.', proficiency: 85 },
  { name: 'Programming & Problem Solving', description: 'Learning and applying programming concepts to solve problems. Continuously improving logic, debugging skills, and understanding of core fundamentals.', proficiency: 85 },
  { name: 'Community & Leadership', description: 'Actively contributing to communities like µLearn and IEDC. Collaborating with peers, supporting initiatives, and growing through shared learning.', proficiency: 90 },
]

interface SkillCardProps {
  skill: typeof skills[0]
  index: number
}

function SkillCard({ skill, index }: SkillCardProps) {
  const { containerRef, spotlightRef } = useSpotlight()

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4 }}
      className="premium-card spotlight-card group relative cursor-default"
    >
      <div ref={spotlightRef} style={{ display: 'none' }} />
      
      <div className="relative z-10">
        <h3 className="font-black text-lg font-bebas text-white tracking-wider">{skill.name}</h3>
        <p className="text-sm font-dm-sans mt-2" style={{ color: '#9ca3af' }}>{skill.description}</p>
      </div>

      {/* Progress bar line */}
      <div className="h-0.5 bg-white/10 rounded-full overflow-hidden mt-4">
        <motion.div
          className="h-full"
          style={{ background: 'var(--accent)' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ delay: index * 0.15 + 0.3, duration: 1 }}
          viewport={{ once: true, margin: '-50px' }}
        />
      </div>
    </motion.div>
  )
}

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <SectionLabel number="01" label="ABOUT" />

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
          ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed font-dm-sans" style={{ color: '#9ca3af' }}>
              I'm a passionate developer with a strong interest in building clean and functional digital experiences. With a focus on frontend development, I work on turning ideas into practical solutions that are simple, usable, and effective.
            </p>
            
            <p className="text-base leading-relaxed font-dm-sans" style={{ color: '#9ca3af' }}>
              Beyond coding, I'm actively involved in community leadership and innovation initiatives. I contribute to platforms like µLearn and Legacy IEDC, where I collaborate with others and support a culture of learning and growth. My approach is centered on continuous improvement, teamwork, and building solutions that create meaningful impact.
            </p>
          </motion.div>

          {/* Right Column - Skill Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="grid grid-cols-1 gap-8"
          >
            {skills.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} index={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
