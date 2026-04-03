'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'CEO',
    company: 'Legacy IEDC',
    date: 'Present',
    description: 'Leading initiatives and driving innovation in entrepreneurship and development. Building a thriving community of developers and entrepreneurs.',
  },
  {
    role: 'Operations Lead',
    company: 'µLearn UCEK',
    date: 'Present',
    description: 'Managing operations and overseeing program execution. Coordinating teams to deliver impactful learning experiences and community events.',
  },
  {
    role: 'Campus Co-Organizer',
    company: 'Google Developer Groups UCEK',
    date: 'Present',
    description: 'Organizing workshops, hackathons, and developer communities. Fostering collaboration and knowledge sharing among developers.',
  },
  {
    role: 'Ex Campus Co-Lead',
    company: 'µLearn UCEK',
    date: 'Previous',
    description: 'Previously led campus initiatives and community development programs. Mentored students and facilitated learning opportunities.',
  },
  {
    role: 'Ex Operations Officer',
    company: 'Legacy IEDC UCEK',
    date: 'Previous',
    description: 'Managed operational tasks and supported organizational goals. Contributed to the growth and success of the entrepreneurship center.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
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
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-accent-yellow mt-4" />
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
              className="p-6 border-2 border-dark-border hover:border-accent-yellow transition-all rounded-none"
            >
              <h3 className="text-xl font-bold font-bebas text-accent-yellow tracking-wider mb-2">
                {exp.role}
              </h3>
              <p className="text-text-muted text-sm mb-3 font-dm-sans">
                {exp.company} • {exp.date}
              </p>
              <p className="text-text-muted text-sm leading-relaxed font-dm-sans">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
