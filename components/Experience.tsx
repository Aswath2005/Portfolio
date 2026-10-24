'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

const experiences = [
  ['IEDC NEST Member', 'Kerala Startup Mission', 'August — Present', 'Contributing to the IEDC NEST community and supporting innovation-driven initiatives.', ''],
  ['CEO', 'Legacy IEDC', 'Present', 'Leading initiatives and driving innovation in entrepreneurship and development. Building a thriving community of developers and entrepreneurs.', 'https://iedc.uck.ac.in/team/member/2026cqaoo'],
  ['Operations Lead', 'µLearn UCEK', 'Present', 'Managing operations and overseeing program execution. Coordinating teams to deliver impactful learning experiences and community events.', 'https://mulearn.uck.ac.in/#team'],
  ['Campus Co-Organizer', 'Google Developer Groups UCEK', 'Present', 'Organizing workshops, hackathons, and developer communities. Fostering collaboration and knowledge sharing among developers.', 'https://gdg.community.dev/gdg-on-campus-university-college-of-engineering-trivandrum-india/'],
  ['Ex Campus Co-Lead', 'µLearn UCEK', 'Previous', 'Previously led campus initiatives and community development programs. Mentored students and facilitated learning opportunities.', 'https://mulearn.uck.ac.in/#team'],
  ['Ex Operations Officer', 'Legacy IEDC UCEK', 'Previous', 'Managed operational tasks and supported organizational goals. Contributed to the growth and success of the entrepreneurship center.', 'https://iedc.uck.ac.in/team/ex'],
]

export function Experience() {
  return (
    <section id="experience" className="editorial-section editorial-section-muted">
      <div className="editorial-container">
        <SectionLabel number="04" label="EXPERIENCE & COMMUNITY" />
        <div className="experience-header">
          <h2 className="editorial-heading">EXPERIENCE<span className="text-coral">.</span></h2>
          <p>My experience in leadership, community building, and innovation initiatives continues to shape how I collaborate and contribute.</p>
        </div>
        <div className="experience-card-grid">
          {experiences.map(([role, company, date, description, link], index) => (
            <motion.article
              key={`${role}-${company}`}
              onClick={() => link && window.open(link, '_blank')}
              onKeyDown={(event) => {
                if (link && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault()
                  window.open(link, '_blank')
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              tabIndex={link ? 0 : undefined}
              className={`experience-hover-card ${link ? 'cursor-pointer' : ''}`}
            >
              <span className="experience-card-number">0{index + 1}</span>
              <span className={date.includes('Present') ? 'experience-card-date current' : 'experience-card-date'}>{date}</span>
              <div className="experience-card-content">
                <div className="experience-card-title">
                  <h3>{role}</h3>
                  <span className="experience-card-company">— {company}</span>
                  {link && <ArrowUpRight className="experience-card-arrow h-5 w-5" />}
                </div>
                <p className="experience-card-description">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
