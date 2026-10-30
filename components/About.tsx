'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Blocks, BrainCircuit, Users } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

const strengths = [
  { icon: Blocks, title: 'Web Development', text: 'Building responsive and functional web applications using modern tools. Focused on writing clean code and improving development skills through practice.' },
  { icon: BrainCircuit, title: 'Programming & Problem Solving', text: 'Learning and applying programming concepts to solve problems. Continuously improving logic, debugging skills, and understanding of core fundamentals.' },
  { icon: Users, title: 'Community & Leadership', text: 'Actively contributing to communities like µLearn and IEDC. Collaborating with peers, supporting initiatives, and growing through shared learning.' },
]

export function About() {
  return (
    <section id="about" className="editorial-section editorial-section-muted">
      <div className="editorial-container">
        <SectionLabel number="01" label="ABOUT THE DEVELOPER" />
        <div className="about-intro">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="editorial-heading">
            ABOUT ME<span className="text-coral">.</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="about-copy">
            <p>I&apos;m a passionate developer with a strong interest in building clean and functional digital experiences. With a focus on frontend development, I work on turning ideas into practical solutions that are simple, usable, and effective.</p>
            <p>Beyond coding, I&apos;m actively involved in community leadership and innovation initiatives. I contribute to platforms like µLearn and Legacy IEDC, where I collaborate with others and support a culture of learning and growth. My approach is centered on continuous improvement, teamwork, and building solutions that create meaningful impact.</p>
            <a className="editorial-link" href="#experience">More about my journey <ArrowUpRight className="h-4 w-4" /></a>
          </motion.div>
        </div>
        <div className="about-focus-list">
          {strengths.map(({ icon: Icon, title, text }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="about-focus-row">
              <span className="about-focus-index">0{index + 1}</span>
              <Icon className="about-focus-icon h-5 w-5" strokeWidth={1.5} />
              <div className="about-focus-main">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <ArrowUpRight className="about-focus-arrow h-5 w-5" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
