'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GitBranch } from 'lucide-react'

interface GitHubEvent {
  id: string
  type: string
  repo: {
    name: string
  }
  payload: {
    commits?: Array<{ message: string }>
    ref?: string
  }
  created_at: string
}

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
}

export function GitHubActivity() {
  const [events, setEvents] = useState<GitHubEvent[]>([])
  const [stats, setStats] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)

        // Fetch events
        const eventsRes = await fetch(
          'https://api.github.com/users/Aswath2005/events?per_page=10'
        )
        const eventsData = await eventsRes.json()

        const pushEvents = eventsData
          .filter((e: GitHubEvent) => e.type === 'PushEvent')
          .slice(0, 6)

        setEvents(pushEvents)

        // Fetch user stats
        const userRes = await fetch('https://api.github.com/users/Aswath2005')
        const userData = await userRes.json()
        setStats(userData)

        setError(null)
      } catch (err) {
        setError('Failed to load GitHub activity')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (seconds < 60) return 'just now'
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`
    return date.toLocaleDateString()
  }

  return (
    <section id="github" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2
            className="text-5xl font-bold font-bebas text-[var(--text-primary)] glow-text"
            style={{ letterSpacing: '0.08em' }}
          >
            GITHUB ACTIVITY
          </h2>
          <motion.div
            className="w-24 h-1 bg-[var(--accent-color)] mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[var(--text-muted)] py-10"
          >
            <p>{error}</p>
            <a
              href="https://github.com/Aswath2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-color)] hover:underline mt-2"
            >
              View on GitHub
            </a>
          </motion.div>
        )}

        {!error && (
          <>
            {/* GitHub Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {stats && [
                { label: 'Public Repos', value: stats.public_repos },
                { label: 'Followers', value: stats.followers },
                { label: 'Following', value: stats.following },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-[var(--text-primary)] font-bebas">
                    {stat.value}
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Recent Commits */}
            {!loading && events.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold font-bebas text-[var(--text-primary)] mb-6">
                  Recent Commits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {events.map((event, idx) => (
                    <motion.div
                      key={event.id}
                      className="p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-[var(--text-primary)] truncate">
                            {event.repo.name}
                          </h4>
                          <p className="text-sm text-[var(--text-muted)] mt-1 line-clamp-2">
                            {event.payload.commits?.[0]?.message || 'Commit made'}
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-xs text-[var(--text-muted)]">
                            {event.payload.ref && (
                              <span className="flex items-center gap-1">
                                <GitBranch className="w-3 h-3" />
                                {event.payload.ref.split('/').pop()}
                              </span>
                            )}
                            <span>·</span>
                            <span>{formatTimeAgo(event.created_at)}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {loading && (
              <div className="text-center text-[var(--text-muted)] py-10">
                <p>Loading activity...</p>
              </div>
            )}

            {/* GitHub Stats Image */}
            <motion.div
              className="mt-12 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-bebas text-[var(--text-primary)] mb-4">
                Contribution Stats
              </h3>
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4">
                <img
                  src="https://ghcrs.vercel.app/api?username=Aswath2005&show_icons=true&theme=dark&hide_border=true&bg_color=0a0a0a&color=ffffff&line=ffffff&point=ffffff"
                  alt="GitHub Stats"
                  className="w-full"
                />
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
