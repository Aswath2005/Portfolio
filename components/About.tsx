'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Web Development', description: 'Modern frameworks & tools', proficiency: 85 },
  { name: 'UI/UX Design', description: 'User-centered design', proficiency: 80 },
  { name: 'Community & Leadership', description: 'Driving initiatives', proficiency: 90 },
]

export function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
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
            ABOUT
          </h2>
          <div className="w-24 h-1 bg-accent-color mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <p className="text-lg text-text-muted leading-relaxed font-dm-sans">
              I'm a passionate developer and designer with a commitment to building clean, functional digital experiences. 
              With expertise in both frontend development and UI/UX design, I bridge the gap between code and creativity, 
              transforming ideas into impactful digital solutions.
            </p>
            
            <p className="text-lg text-text-muted leading-relaxed font-dm-sans">
              Beyond coding, I'm deeply involved in community leadership and innovation initiatives. I actively contribute to platforms 
              like µLearn and Legacy IEDC, fostering collaboration and growth. My approach combines technical excellence with a passion 
              for mentoring and building communities that drive meaningful change.
            </p>
          </motion.div>

          {/* Right Column - Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: false }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg font-bebas text-white tracking-wider">{skill.name}</h3>
                    <p className="text-sm text-text-muted font-dm-sans">{skill.description}</p>
                  </div>
                </div>

                {/* Progress bar line */}
                <div className="h-1 bg-dark-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent-color"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 1 }}
                    viewport={{ once: false }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
