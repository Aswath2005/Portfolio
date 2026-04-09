'use client'

import { motion } from 'framer-motion'
import { TiltCard } from './TiltCard'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    title: 'Calorify',
    description: 'A comprehensive calorie tracking application built with modern web technologies.',
    url: 'http://calorify-1.vercel.app/',
    screenshot: '/calorify-preview.png',
    tags: ['Next.js', 'React', 'Web App'],
    github: 'https://github.com/Aswath2005',
  },
  {
    title: 'Project Two',
    description: 'A showcase of innovative design and functionality.',
    url: '#',
    tags: ['Design', 'Development'],
  },
  {
    title: 'Project Three',
    description: 'Building seamless user experiences with cutting-edge technologies.',
    url: '#',
    tags: ['UX/UI', 'Web Development'],
  },
  {
    title: 'Project Four',
    description: 'Exploring creative solutions to complex problems.',
    url: '#',
    tags: ['Innovation', 'Technology'],
  },
]

const headingText = 'PROJECTS'

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <div className="flex gap-1">
            {headingText.split('').map((letter, idx) => (
              <motion.span
                key={idx}
                className="text-5xl font-bold font-bebas inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                style={{
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  textShadow: '0 0 40px var(--accent-color)',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.div 
            className="h-1 mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'var(--accent-color)' }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <TiltCard key={idx}>
              <ProjectCard {...project} index={idx} />
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
