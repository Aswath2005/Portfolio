import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          secondary: '#111111',
          border: '#27272a',
        },
        light: {
          bg: '#f9f9f9',
          secondary: '#f0f0f0',
          border: '#e5e5e5',
          text: '#1a1a1a',
        },
        accent: {
          color: '#e4e4e7',
          strong: '#ffffff',
        },
        text: {
          light: '#ffffff',
          muted: '#a1a1aa',
          'muted-dark': '#71717a',
          dark: '#1a1a1a',
        },
        card: {
          bg: '#1a1a1a',
        },
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1s infinite',
        'float-delayed-2': 'float 6s ease-in-out 2s infinite',
        'progress-bar': 'progress 2s ease-in-out forwards',
        'count': 'count 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
