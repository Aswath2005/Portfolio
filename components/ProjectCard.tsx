'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useSpotlight } from '@/hooks/useSpotlight'

interface ProjectCardProps {
  title: string
  description: string
  url: string
  tags: readonly string[]
  github?: string
  screenshot?: string
  index?: number
  status?: 'in-progress' | 'completed'
}

export function ProjectCard({
  title,
  description,
  url,
  tags,
  github,
  screenshot,
  index = 0,
  status = 'completed',
}: ProjectCardProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)
  const { containerRef, spotlightRef } = useSpotlight()

  const handleIframeLoad = () => {
    setIframeLoaded(true)
  }

  const handleIframeError = () => {
    setIframeError(true)
    setIframeLoaded(true)
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      className="premium-card spotlight-card flex flex-col h-full overflow-hidden relative group"
    >
      <div ref={spotlightRef} style={{ display: 'none' }} />

      {/* Decorative number background */}
      <div
        className="absolute -top-12 -right-8 font-black opacity-3 pointer-events-none z-0"
        style={{
          fontSize: '6rem',
          color: 'white',
          fontFamily: 'Bebas Neue, sans-serif',
          fontWeight: 900,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Browser mockup bar */}
      <div
        className="px-4 py-3 border-b flex items-center gap-3 relative z-10"
        style={{
          background: 'linear-gradient(to bottom, #1a1a1a, #111111)',
          borderColor: 'rgba(255,255,255,0.06)',
        }}
      >
        {/* Window control dots */}
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>

        {/* URL bar */}
        <div className="flex-1 text-center">
          <p className="text-xs text-gray-500 truncate opacity-60">{url}</p>
        </div>
      </div>

      {/* iframe preview area */}
      <div className="relative w-full" style={{ height: '200px', overflow: 'hidden', backgroundColor: 'var(--bg-surface)' }}>
        {screenshot ? (
          /* Screenshot image preview */
          <Image
            src={screenshot}
            alt={title}
            fill
            className="object-cover w-full h-full"
            style={{ objectPosition: 'top center' }}
          />
        ) : !iframeError ? (
          <>
            {/* Loading skeleton */}
            {!iframeLoaded && (
              <div
                className="absolute inset-0 animate-pulse"
                style={{
                  background: 'linear-gradient(90deg, var(--bg-card) 25%, var(--bg-surface) 50%, var(--bg-card) 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                }}
              />
            )}

            {/* iframe */}
            <iframe
              src={url}
              className="absolute top-0 left-0"
              style={{
                width: '133%',
                height: '267px',
                transform: 'scale(0.75)',
                transformOrigin: 'top left',
                border: 'none',
                pointerEvents: 'none',
                opacity: iframeLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
            />
          </>
        ) : (
          /* Error fallback */
          <button
            onClick={() => window.open(url, '_blank')}
            className="w-full h-full flex flex-col items-center justify-center gap-3 hover:bg-opacity-50 transition-colors"
            style={{ backgroundColor: 'var(--bg-surface)' }}
          >
            <Globe className="w-8 h-8" style={{ color: 'var(--text-muted)' }} />
            <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
              {url}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Click to visit site
            </p>
          </button>
        )}
      </div>

      {/* Card body */}
      <div className="flex-1 flex flex-col gap-4 p-6 relative z-10">
        {/* Status badge */}
        {status === 'in-progress' && (
          <div className="self-start">
            <div
              className="px-3 py-1 text-xs font-semibold rounded-full border flex items-center gap-2"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.5)',
                borderColor: 'rgba(255,255,255,0.1)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
              In Progress
            </div>
          </div>
        )}

        {/* Title and description */}
        <div>
          <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
          <p
            className="text-sm line-clamp-2"
            style={{ color: '#9ca3af' }}
          >
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full border"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                color: '#6b7280',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <motion.button
            onClick={() => window.open(url, '_blank')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-4 py-2 text-sm font-medium border rounded-lg transition-all duration-300 flex items-center justify-center gap-2 focus-ring link-with-arrow"
            style={{
              color: 'var(--accent)',
              borderColor: 'rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            Live Site
            <ExternalLink className="w-3.5 h-3.5 arrow" />
          </motion.button>

          {github && (
            <motion.button
              onClick={() => window.open(github, '_blank')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 focus-ring"
              style={{
                color: 'var(--text-secondary)',
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
        {/* Window control dots */}
