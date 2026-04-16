'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Exceptional designer with an eye for detail and user experience. Delivered outstanding results ahead of schedule.',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    quote: 'Outstanding work ethic and creative problem-solving. Alex transformed our vision into a beautiful reality.',
    name: 'Michael Chen',
    role: 'CEO, Tech Startup',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    quote: 'Professional, creative, and easy to work with. Highly recommend for any design project.',
    name: 'Emma Williams',
    role: 'Creative Director',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    quote: 'Top-tier designer who goes above and beyond. They understood our brand and delivered perfectly.',
    name: 'Alex Rodriguez',
    role: 'Marketing Lead',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1))
  }

  return (
    <section id="testimonials" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <p className="section-label">Client Feedback</p>
          <h2 className="section-heading inline-block">What Clients Say</h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${currentIndex * 100}%)` }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1rem)]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    viewport={{ once: false }}
                    className="card-hover h-full p-8 rounded-2xl border transition-all"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.backgroundColor = 'var(--bg-card)'
                    }}
                  >
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          style={{ color: 'var(--accent)', fill: 'var(--accent)' }}
                          className="w-4 h-4"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6" style={{ borderTop: `1px solid var(--border)` }}>
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-400">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold" style={{ color: 'var(--text-primary)' }}>
                          {testimonial.name}
                        </p>
                        <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              className="p-3 rounded-full border transition-all"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.backgroundColor = 'var(--bg-card)'
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" style={{ color: 'var(--accent)' }} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="p-3 rounded-full border transition-all"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.backgroundColor = 'var(--bg-card)'
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" style={{ color: 'var(--accent)' }} />
            </motion.button>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 justify-center mt-6">
            {Array.from({ length: Math.max(0, testimonials.length - 2) }).map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="h-2 rounded-full transition-all"
                style={{
                  width: idx === currentIndex ? '32px' : '8px',
                  backgroundColor: idx === currentIndex ? 'var(--accent)' : 'var(--border)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
