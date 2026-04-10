'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, GitBranch, ExternalLink } from 'lucide-react'

interface Repository {
  id: number
  name: string
  description: string | null
  url: string
  stars: number
  forks: number
  language: string | null
  updated_at: string
  topics: string[]
}

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
}

export function GitHubActivity() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [stats, setStats] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)

        // Fetch repositories
        const reposRes = await fetch(
          'https://api.github.com/users/Aswath2005/repos?sort=stars&direction=desc&per_page=6'
        )
        const reposData = await reposRes.json()

        const formattedRepos = reposData.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          updated_at: repo.updated_at,
          topics: repo.topics || [],
        }))

        setRepos(formattedRepos)

        // Fetch user stats
        const userRes = await fetch('https://api.github.com/users/Aswath2005')
        const userData = await userRes.json()
        setStats(userData)

        setError(null)
      } catch (err) {
        setError('Failed to load GitHub repositories')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const getLanguageColor = (language: string): string => {
    const colors: { [key: string]: string } = {
      TypeScript: '#2b7a0b',
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      React: '#61dafb',
      'C++': '#f34b7d',
      Java: '#b07219',
      Go: '#00ADD8',
      Rust: '#ce422b',
      CSS: '#563d7c',
      HTML: '#e34c26',
    }
    return colors[language] || '#858585'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const days = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 30) return `${days}d ago`
    if (days < 365) return `${Math.floor(days / 30)}mo ago`
    return `${Math.floor(days / 365)}y ago`
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
            className="w-24 h-1 mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ background: 'var(--accent)' }}
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
              className="hover:underline mt-2"
              style={{ color: 'var(--accent)' }}
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

            {/* Repositories Grid */}
            {!loading && repos.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold font-bebas text-[var(--text-primary)] mb-6">
                  Featured Repositories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {repos.map((repo, idx) => (
                    <motion.a
                      key={repo.id}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 bg-[var(--bg-card)] border rounded-lg transition-all"
                      style={{ borderColor: 'var(--border)' } as React.CSSProperties}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-[var(--text-primary)] transition-colors truncate flex-1" style={{ color: 'var(--text-primary)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}>
                          {repo.name}
                        </h4>
                        <ExternalLink className="w-4 h-4 transition-colors ml-2 flex-shrink-0" style={{ color: 'var(--text-muted)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')} />
                      </div>
                      
                      <p className="text-sm text-[var(--text-muted)] mb-3 line-clamp-2">
                        {repo.description || 'No description available'}
                      </p>

                      {/* Topics */}
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="inline-block px-2.5 py-1 text-xs font-medium rounded-full border"
                              style={{
                                backgroundColor: 'var(--accent-glow)',
                                color: 'var(--accent)',
                                borderColor: 'rgba(59,130,246,0.3)',
                              }}
                            >
                              {topic}
                            </span>
                          ))}
                          {repo.topics.length > 3 && (
                            <span className="inline-block px-2.5 py-1 text-xs text-[var(--text-muted)]">
                              +{repo.topics.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] border-t border-[var(--border)] pt-3">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <div
                              className="w-2.5 h-2.5 rounded-full"
                              style={{
                                backgroundColor: getLanguageColor(repo.language),
                              }}
                            />
                            {repo.language}
                          </span>
                        )}
                        {repo.stars > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {repo.stars}
                          </span>
                        )}
                        {repo.forks > 0 && (
                          <span className="flex items-center gap-1">
                            <GitBranch className="w-3 h-3" />
                            {repo.forks}
                          </span>
                        )}
                        <span className="ml-auto text-[var(--text-muted)]">
                          Updated {formatDate(repo.updated_at)}
                        </span>
                      </div>
                    </motion.a>
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
