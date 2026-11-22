'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

const experiences = [
  {
    role: 'IEDC NEST Member',
    company: 'Kerala Startup Mission',
    duration: 'August — Present',
    status: 'current',
    description: 'Contributing to IEDC NEST activities and supporting innovation-driven student initiatives.',
    highlights: ['Participating in entrepreneurship and innovation programs', 'Supporting community-led startup initiatives'],
    logo: '/KSUMIEDCOriginalWhitetext.png',
    link: '',
  },
  {
    role: 'CEO',
    company: 'Legacy IEDC',
    duration: '2025 — Present',
    status: 'current',
    description: 'Leading innovation and entrepreneurship initiatives while building a collaborative community for developers and student founders.',
    highlights: ['Directing community initiatives and team operations', 'Building a culture of learning, innovation, and collaboration'],
    logo: '/IEDC NEW LOGO gold.png',
    link: 'https://iedc.uck.ac.in/team/member/2026cqaoo',
  },
  {
    role: 'Operations Lead',
    company: 'Mulearn UCEK',
    duration: '2025 — Present',
    status: 'current',
    description: 'Managing operations and coordinating teams to deliver learning experiences, programs, and community events.',
    highlights: ['Overseeing program execution and team coordination', 'Supporting learner engagement across campus initiatives'],
    logo: '/MulearnUCEK.png',
    link: 'https://mulearn.uck.ac.in/#team',
  },
  {
    role: 'Ex Campus Co-Organizer',
    company: 'Google Developer Groups UCEK',
    duration: '2025 — September 2026',
    status: 'previous',
    description: 'Organizing developer-focused workshops, events, and collaborative learning opportunities for the campus community.',
    highlights: ['Supporting workshops and technical community events', 'Encouraging collaboration and knowledge sharing'],
    logo: '/WhatsApp Image 2025-09-03 at 16.03.50_3af8122f.jpg',
    link: 'https://gdg.community.dev/gdg-on-campus-university-college-of-engineering-trivandrum-india/',
  },
  {
    role: 'Ex Campus Co-Lead',
    company: 'Mulearn UCEK',
    duration: 'Previous',
    status: 'previous',
    description: 'Led campus initiatives and supported community development through mentoring and organized learning opportunities.',
    highlights: ['Mentored students and facilitated learning activities', 'Supported growth of campus community programs'],
    logo: '/MulearnUCEK.png',
    link: 'https://mulearn.uck.ac.in/#team',
  },
  {
    role: 'Ex Operations Officer',
    company: 'Legacy IEDC UCEK',
    duration: 'Previous',
    status: 'previous',
    description: 'Managed operational responsibilities and supported organizational goals for the entrepreneurship center.',
    highlights: ['Handled event and team operations', 'Contributed to the growth of the IEDC community'],
    logo: '/IEDC NEW LOGO gold.png',
    link: 'https://iedc.uck.ac.in/team/ex',
  },
]

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="experience" className="editorial-section editorial-section-muted">
      <div className="editorial-container">
        <SectionLabel number="04" label="EXPERIENCE & COMMUNITY" />
        <div className="experience-header">
          <h2 className="editorial-heading">EXPERIENCE<span className="text-coral">.</span></h2>
          <p>My experience in leadership, community building, and innovation initiatives continues to shape how I collaborate and contribute.</p>
        </div>

        <div className="experience-timeline-list">
          <div className="experience-timeline-rule" aria-hidden="true" />
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.role}-${experience.company}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              viewport={{ once: true, margin: '-60px' }}
              className={`experience-timeline-entry ${expanded === index ? 'expanded' : ''}`}
            >
              <div className="experience-timeline-node" aria-hidden="true"><span /></div>
              <div className="experience-timeline-card">
                <div className="experience-card-top">
                  <span className="experience-org-logo" title={experience.company}>
                    {experience.logo ? (
                      <img src={experience.logo} alt={`${experience.company} logo`} loading="lazy" />
                    ) : (
                      <span className="gdg-logo">GDG</span>
                    )}
                  </span>
                  <div className="experience-card-heading">
                    <span className={experience.status === 'current' ? 'experience-duration current' : 'experience-duration'}>
                      {experience.duration}
                    </span>
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                  </div>
                  {experience.link && (
                    <button
                      type="button"
                      className="experience-external"
                      onClick={() => window.open(experience.link, '_blank', 'noopener,noreferrer')}
                      aria-label={`View ${experience.company} profile`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <p className="experience-card-description">{experience.description}</p>
                <div className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className="experience-expand"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  aria-expanded={expanded === index}
                >
                  {expanded === index ? 'Hide details' : 'View details'}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {expanded === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="experience-expanded-details"
                  >
                    <p>
                      As {experience.role} at {experience.company}, I contribute to community planning, team collaboration, and initiatives that help students learn and build together.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
