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
    status: 'completed' as const,
  },
  {
    title: 'StudyFlow',
    description: 'An AI-powered study planner with automated timetable generation, drag-and-drop schedule editing, progress tracking with charts, and AI-generated notes summaries.',
    url: 'https://github.com/Aswath2005/StudyPlanner-Frontend',
    screenshot: '/studyflow-preview.png',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Aswath2005/StudyPlanner-Frontend',
    status: 'completed' as const,
  },
  {
    title: 'CardioSense',
    description: 'A heart disease risk assessment tool comparing four ML models (KNN 92%, SVM 87%, CNN 87%, Random Forest 84%) trained on the Cleveland Heart Disease dataset.',
    url: 'https://github.com/Aswath2005/cardiosense',
    screenshot: '/cardiosense-preview.png',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Aswath2005/cardiosense',
    status: 'in-progress' as const,
  },
  {
    title: 'Project Four',
    description: 'Exploring creative solutions to complex problems.',
    url: '#',
    tags: ['Innovation', 'Technology'],
    status: 'completed' as const,
  },
]

const headingText = 'PROJECTS'

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black font-bebas text-white" style={{ letterSpacing: '-0.02em' }}>
            {headingText}
          </h2>
          <motion.div 
            className="h-1 w-24 mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
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
