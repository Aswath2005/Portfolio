'use client'

import { motion } from 'framer-motion'

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

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold font-bebas text-white" style={{ letterSpacing: '0.08em' }}>
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-accent-color mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.link}
              target={project.link !== '#' ? '_blank' : undefined}
              rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
              className="p-6 border-2 border-dark-border hover:border-accent-color transition-all rounded-none"
            >
              <h3 className="text-xl font-bold font-bebas text-white tracking-wider mb-2">
                {project.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-dm-sans">
                {project.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
