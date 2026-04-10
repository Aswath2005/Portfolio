'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Web Development', description: 'Building responsive and functional web applications using modern tools. Focused on writing clean code and improving development skills through practice.', proficiency: 85 },
  { name: 'Programming & Problem Solving', description: 'Learning and applying programming concepts to solve problems. Continuously improving logic, debugging skills, and understanding of core fundamentals.', proficiency: 85 },
  { name: 'Community & Leadership', description: 'Actively contributing to communities like µLearn and IEDC. Collaborating with peers, supporting initiatives, and growing through shared learning.', proficiency: 90 },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-6 relative overflow-hidden">
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
            ABOUT
          </h2>
          <motion.div 
            className="w-24 h-1 mt-6"
            style={{ background: 'rgba(255,255,255,0.3)' }}
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div>
              <p className="text-base leading-relaxed font-dm-sans" style={{ color: 'var(--text-secondary)' }}>
                I'm a passionate developer with a strong interest in building clean and functional digital experiences. With a focus on frontend development, I work on turning ideas into practical solutions that are simple, usable, and effective.
              </p>
              
              <p className="text-base leading-relaxed font-dm-sans mt-6" style={{ color: 'var(--text-secondary)' }}>
                Beyond coding, I'm actively involved in community leadership and innovation initiatives. I contribute to platforms like µLearn and Legacy IEDC, where I collaborate with others and support a culture of learning and growth. My approach is centered on continuous improvement, teamwork, and building solutions that create meaningful impact.
              </p>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              {/* Web Development */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--accent)' }} />
                  <div>
                    <h3 className="font-black text-sm font-bebas text-white tracking-wider mb-2 uppercase">Web Development</h3>
                    <p className="text-sm leading-relaxed font-dm-sans" style={{ color: 'var(--text-secondary)' }}>
                      Building responsive and functional web applications using modern tools. Focused on writing clean code and improving development skills through practice.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Programming & Problem Solving */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--accent)' }} />
                  <div>
                    <h3 className="font-black text-sm font-bebas text-white tracking-wider mb-2 uppercase">Programming & Problem Solving</h3>
                    <p className="text-sm leading-relaxed font-dm-sans" style={{ color: 'var(--text-secondary)' }}>
                      Learning and applying programming concepts to solve problems. Continuously improving logic, debugging skills, and understanding of core fundamentals.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Community & Leadership */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--accent)' }} />
                  <div>
                    <h3 className="font-black text-sm font-bebas text-white tracking-wider mb-2 uppercase">Community & Leadership</h3>
                    <p className="text-sm leading-relaxed font-dm-sans" style={{ color: 'var(--text-secondary)' }}>
                      Actively contributing to communities like µLearn and IEDC. Collaborating with peers, supporting initiatives, and growing through shared learning.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Skill Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="grid grid-cols-1 gap-8"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -4 }}
                className="relative space-y-4 p-6 rounded-lg transition-all duration-300 border border-white/5 hover:border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  borderColor: 'rgba(255,255,255,0.08)',
                }}
              >
                <div className="relative z-10">
                  <h3 className="font-black text-lg font-bebas text-white tracking-wider">{skill.name}</h3>
                  <p className="text-sm text-white/50 font-dm-sans mt-2">{skill.description}</p>
                </div>

                {/* Progress bar line */}
                <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{ background: 'var(--accent)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ delay: idx * 0.15 + 0.3, duration: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
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
