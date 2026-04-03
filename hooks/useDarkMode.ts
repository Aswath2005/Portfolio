import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Check localStorage on mount
    const stored = localStorage.getItem('theme')
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches

    const shouldBeDark = stored ? stored === 'dark' : systemPreference

    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.remove('light')
      document.body.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.body.classList.add('light')
    }
  }, [])

  const toggle = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.remove('light')
      document.body.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.add('light')
      document.body.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return { isDark, toggle, isMounted }
}
