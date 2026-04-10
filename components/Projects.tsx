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
    <section id="projects" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Decorative number background */}
        <div className="absolute -top-20 right-0 text-9xl md:text-[12rem] font-black text-white/3 pointer-events-none" style={{ fontFamily: 'font-bebas' }}>02</div>

        {/* Section Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-xs uppercase tracking-[0.2em] font-dm-sans mb-4"
          style={{ color: 'var(--text-muted)' }}
        >
          04 PROJECTS
        </motion.p>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 relative z-10"
        >
          <h2 className="text-6xl md:text-8xl font-black font-bebas text-white" style={{ letterSpacing: '-0.02em' }}>
            {headingText}
          </h2>
          <motion.div 
            className="h-1 w-24 mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'var(--accent)' }}
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
