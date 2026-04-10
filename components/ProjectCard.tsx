'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  url: string
  tags: string[]
  github?: string
  screenshot?: string
  index?: number
}

export function ProjectCard({
  title,
  description,
  url,
  tags,
  github,
  screenshot,
  index = 0,
}: ProjectCardProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)

  const handleIframeLoad = () => {
    setIframeLoaded(true)
  }

  const handleIframeError = () => {
    setIframeError(true)
    setIframeLoaded(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      className="flex flex-col h-full overflow-hidden border transition-all duration-300 hover:border-opacity-100 hover:shadow-xl hover:-translate-y-1.5"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
        borderRadius: '16px',
      }}
    >
      {/* Browser mockup bar */}
      <div
        className="px-4 py-3 border-b flex items-center gap-3"
        style={{ backgroundColor: '#1a1a1a', borderColor: 'var(--border)' }}
      >
        {/* Window control dots */}
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>

        {/* URL bar */}
        <div className="flex-1 text-center">
          <p className="text-xs text-gray-500 truncate">{url}</p>
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
      <div className="flex-1 flex flex-col gap-4 p-6">
        {/* Title and description */}
        <div>
          <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
          <p
            className="text-sm line-clamp-2"
            style={{ color: 'var(--text-secondary)' }}
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
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-muted)',
                borderColor: 'var(--border)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <button
            onClick={() => window.open(url, '_blank')}
            className="flex-1 px-4 py-2 text-sm font-medium border rounded-lg transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-2"
            style={{
              color: 'var(--text-primary)',
              borderColor: 'var(--text-primary)',
            }}
          >
            Live Site
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          {github && (
            <button
              onClick={() => window.open(github, '_blank')}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-opacity-10 flex items-center gap-2"
              style={{
                color: 'var(--text-secondary)',
                backgroundColor: 'transparent',
              }}
            >
              <Github className="w-4 h-4" />
              Code
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
