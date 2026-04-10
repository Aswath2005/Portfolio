'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'CEO',
    company: 'Legacy IEDC',
    date: 'Present',
    description: 'Leading initiatives and driving innovation in entrepreneurship and development. Building a thriving community of developers and entrepreneurs.',
    link: 'https://iedc.uck.ac.in/team/member/2026cqaoo',
  },
  {
    role: 'Operations Lead',
    company: 'µLearn UCEK',
    date: 'Present',
    description: 'Managing operations and overseeing program execution. Coordinating teams to deliver impactful learning experiences and community events.',
    link: 'https://mulearn.uck.ac.in/#team',
  },
  {
    role: 'Campus Co-Organizer',
    company: 'Google Developer Groups UCEK',
    date: 'Present',
    description: 'Organizing workshops, hackathons, and developer communities. Fostering collaboration and knowledge sharing among developers.',
    link: 'https://gdg.community.dev/gdg-on-campus-university-college-of-engineering-trivandrum-india/',
  },
  {
    role: 'Ex Campus Co-Lead',
    company: 'µLearn UCEK',
    date: 'Previous',
    description: 'Previously led campus initiatives and community development programs. Mentored students and facilitated learning opportunities.',
    link: 'https://mulearn.uck.ac.in/#team',
  },
  {
    role: 'Ex Operations Officer',
    company: 'Legacy IEDC UCEK',
    date: 'Previous',
    description: 'Managed operational tasks and supported organizational goals. Contributed to the growth and success of the entrepreneurship center.',
    link: 'https://iedc.uck.ac.in/team/ex',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 px-6 relative overflow-hidden">
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
            EXPERIENCE
          </h2>
          <motion.div 
            className="h-1 w-24 mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ background: 'rgba(99, 102, 241, 0.4)' }}
          />
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6, boxShadow: '0 0 25px rgba(255,255,255,0.1)' }}
              className="p-6 border-2 transition-all rounded-none cursor-pointer"
              style={{
                borderColor: 'var(--dark-border)',
                backgroundColor: '#1a1a1a',
              } as React.CSSProperties}
              onClick={() => {
                if (exp.link) {
                  window.open(exp.link, '_blank')
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 25px var(--accent-glow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--dark-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <h3 className="text-xl font-bold font-bebas tracking-wider mb-2" style={{ color: 'var(--accent)' }}>
                {exp.role}
              </h3>
              <p className="text-sm mb-3 font-dm-sans" style={{ color: '#6b7280' }}>
                {exp.company} • {exp.date}
              </p>
              <p className="text-sm leading-relaxed font-dm-sans" style={{ color: '#9ca3af' }}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
