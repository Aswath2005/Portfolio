'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Blocks, BrainCircuit, Users } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

const strengths = [
  { icon: Blocks, title: 'Web Development', text: 'Building responsive and functional web applications using modern tools. Focused on writing clean code and improving development skills through practice.' },
  { icon: BrainCircuit, title: 'Programming & Problem Solving', text: 'Learning and applying programming concepts to solve problems. Continuously improving logic, debugging skills, and understanding of core fundamentals.' },
  { icon: Users, title: 'Community & Leadership', text: 'Actively contributing to communities like µLearn and IEDC. Collaborating with peers, supporting initiatives, and growing through shared learning.' },
]

const techCategories = [
  {
    title: 'Frontend',
    technologies: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    title: 'Backend & Database',
    technologies: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3FCF8E' },
    ],
  },
  {
    title: 'Tools & Platforms',
    technologies: [
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/FFFFFF' },
      { name: 'Canva', logo: 'https://cdn.simpleicons.org/canva/00C4CC' },
      { name: 'Claude', logo: 'https://cdn.simpleicons.org/anthropic/D97757' },
    ],
  },
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="tech-stack"
        >
          <div className="tech-stack-heading">
            <span>TECHNOLOGIES I WORK WITH</span>
            <i aria-hidden="true" />
          </div>
          <div className="tech-category-grid">
            {techCategories.map((category, categoryIndex) => (
              <article className="tech-category" key={category.title}>
                <div className="tech-category-title">
                  <span>0{categoryIndex + 1}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="tech-list">
                  {category.technologies.map((technology) => (
                    <div className="tech-item" key={technology.name} title={technology.name}>
                      <span className="tech-logo-wrap">
                        <img src={technology.logo} alt="" loading="lazy" />
                      </span>
                      <span>{technology.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
