'use client'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="editorial-container">
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aswath. Built with passion for design, development, and community.</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button>
        </div>
      </div>
    </footer>
  )
}
