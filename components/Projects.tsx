'use client'

import { motion } from 'framer-motion'
import { TiltCard } from './TiltCard'
import { ProjectCard } from './ProjectCard'
import { SectionLabel } from './SectionLabel'

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
    status: 'in-progress' as const,
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
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <SectionLabel number="02" label="PROJECTS" />

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
          PROJECTS
        </motion.h2>

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
