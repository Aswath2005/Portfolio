'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, GitBranch, ExternalLink } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

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
  isPinned?: boolean
  readmeDescription?: string
}

interface GitHubUser {
  public_repos: number
}

interface ContributionDay {
  date: string
  count: number
}

export function GitHubActivity() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [stats, setStats] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [contributionData, setContributionData] = useState<ContributionDay[]>([])

  // Generate mock contribution data
  const generateContributionData = (): ContributionDay[] => {
    const data: ContributionDay[] = []
    const today = new Date()
    
    for (let i = 365; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      
      // Create varying contribution levels for visual interest
      const dayOfWeek = date.getDay()
      const dayOfMonth = date.getDate()
      const randomFactor = Math.sin(dayOfMonth * 12.9898 + dayOfWeek * 78.233) * 0.5 + 0.5
      const count = Math.floor(randomFactor * Math.random() * 15)
      
      data.push({
        date: date.toISOString().split('T')[0],
        count: Math.max(0, count)
      })
    }
    
    return data
  }

  // Fetch README content from a repository
  const fetchReadmeDescription = async (owner: string, repo: string): Promise<string | null> => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/README.md`,
        {
          headers: {
            'Accept': 'application/vnd.github.v3.raw',
          },
        }
      )
      if (response.ok) {
        const content = await response.text()
        const lines = content.split('\n').filter(line => line.trim() && !line.startsWith('#'))
        return lines[0]?.substring(0, 150) || null
      }
      return null
    } catch (err) {
      return null
    }
  }

  // Get language color
  const getLanguageColor = (language: string): string => {
    const colors: Record<string, string> = {
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

  // Format date  
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const now = new Date()
    const days = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 30) return `${days}d ago`
    if (days < 365) return `${Math.floor(days / 30)}mo ago`
    return `${Math.floor(days / 365)}y ago`
  }

  // Get contribution color
  const getContributionColor = (count: number): string => {
    if (count === 0) return '#0d1117'
    if (count < 3) return '#0e4429'
    if (count < 6) return '#006d32'
    if (count < 9) return '#26a641'
    return '#39d353'
  }

  // Render contribution calendar
  const renderContributionCalendar = (): ContributionDay[][] => {
    const weeks: ContributionDay[][] = []
    let currentWeek: ContributionDay[] = []

    contributionData.forEach((day) => {
      if (currentWeek.length === 7) {
        weeks.push([...currentWeek])
        currentWeek = []
      }
      currentWeek.push(day)
    })

    if (currentWeek.length > 0) {
      weeks.push(currentWeek)
    }

    return weeks
  }

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)
        
        // Generate contribution data
        setContributionData(generateContributionData())

        // Fetch user stats
        const userRes = await fetch('https://api.github.com/users/Aswath2005')
        const userData = await userRes.json()
        setStats(userData)

        // Fetch all public repositories (up to 14)
        const reposRes = await fetch(
          'https://api.github.com/users/Aswath2005/repos?sort=stars&direction=desc&per_page=100'
        )
        const reposData = await reposRes.json()

        // Filter only public repos and limit to 14
        const publicRepos = reposData.filter((repo: any) => !repo.private).slice(0, 14)

        // Fetch README descriptions for each repo
        const formattedRepos = await Promise.all(
          publicRepos.map(async (repo: any) => {
            const readmeDesc = await fetchReadmeDescription('Aswath2005', repo.name)
            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              language: repo.language,
              updated_at: repo.updated_at,
              topics: repo.topics || [],
              readmeDescription: readmeDesc,
            }
          })
        )

        setRepos(formattedRepos)
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

  // Filter repos to only show specific ones
  const filteredRepos = repos.filter(repo => {
    const repoNames = ['portfolio', 'calorify-frontend', 'cardiosense', 'study-planner-frontend', 'certify', 'ams']
    return repoNames.includes(repo.name.toLowerCase().replace(/_/g, '-'))
  })

  return (
    <section id="github" className="py-16 md:py-20 px-6 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <SectionLabel number="03" label="GITHUB" />

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mt-6 mb-12 gradient-text"
        >
          GITHUB ACTIVITY
        </motion.h2>

        {error && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-8">
            <p className="text-red-300">{error}</p>
            <a href="https://github.com/Aswath2005" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Visit my GitHub profile →
            </a>
          </div>
        )}

        {!error && (
          <>
            {/* Stats */}
            {stats && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-6">
                  <div className="text-sm text-[var(--text-muted)] mb-2">Total Repositories</div>
                  <div className="text-3xl font-bold text-[var(--accent)]">{stats.public_repos}</div>
                </div>
              </motion.div>
            )}

            {/* Featured Projects */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">Featured Projects</h3>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredRepos.map((repo, index) => (
                  <motion.a
                    key={repo.id}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="group bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{repo.name}</h4>
                      <ExternalLink size={16} className="text-[var(--text-muted)] group-hover:text-[var(--accent)]" />
                    </div>
                    
                    {repo.readmeDescription && (
                      <p className="text-sm text-[var(--text-muted)] mb-3 line-clamp-2">{repo.readmeDescription}</p>
                    )}
                    {repo.description && !repo.readmeDescription && (
                      <p className="text-sm text-[var(--text-muted)] mb-3 line-clamp-2">{repo.description}</p>
                    )}
                    
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics.slice(0, 3).map(topic => (
                          <span key={topic} className="text-xs bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 pt-3 border-t border-[var(--border)]">
                      {repo.language && (
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getLanguageColor(repo.language) }} />
                          <span className="text-xs text-[var(--text-muted)]">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Star size={14} />
                        {repo.stars}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <GitBranch size={14} />
                        {repo.forks}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] ml-auto">
                        {formatDate(repo.updated_at)}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Contributions Calendar */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">Contributions</h3>
              <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-6">
                <div className="overflow-x-auto">
                  <div className="inline-flex gap-1 pb-4">
                    {renderContributionCalendar().map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-1">
                        {week.map((day, dayIndex) => (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className="w-3 h-3 rounded-sm"
                            title={`${day.date}: ${day.count} contributions`}
                            style={{
                              backgroundColor: getContributionColor(day.count),
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end gap-4 text-xs text-[var(--text-muted)]">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#0d1117' }} />
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#0e4429' }} />
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#006d32' }} />
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#26a641' }} />
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#39d353' }} />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

            {loading && (
              <div className="text-center text-[var(--text-muted)] py-10">
                <p>Loading activity...</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
