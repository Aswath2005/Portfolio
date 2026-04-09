'use client'

import { motion } from 'framer-motion'
import { TiltCard } from './TiltCard'

const projects = [
  {
    id: 1,
    title: 'Calorify',
    description: 'A comprehensive calorie tracking application built with modern web technologies.',
    link: 'http://calorify-1.vercel.app/',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A showcase of innovative design and functionality.',
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Building seamless user experiences with cutting-edge technologies.',
    link: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'Exploring creative solutions to complex problems.',
    link: '#',
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
                className="text-5xl font-bold font-bebas text-white glow-text inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                style={{ letterSpacing: '0.08em' }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.div 
            className="w-24 h-1 bg-accent-color mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <TiltCard key={project.id}>
              <motion.a
                href={project.link}
                target={project.link !== '#' ? '_blank' : undefined}
                rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -8 }}
                className="p-6 border-2 border-dark-border hover:border-accent-color transition-all rounded-none hover:shadow-lg block w-full h-full"
                style={{
                  backgroundColor: '#1a1a1a',
                  boxShadow: '0 0 0px rgba(255,255,255,0)',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <h3 className="text-xl font-bold font-bebas text-white tracking-wider mb-2 group-hover:text-accent-color transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-dm-sans">
                  {project.description}
                </p>
              </motion.a>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
