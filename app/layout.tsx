import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ScrollProgress } from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'My Portfolio - Aswath S A',
  description: 'A professional portfolio website showcasing design and development work. Modern, fast, and beautiful.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23FACC15" width="100" height="100"/><text y="75" font-size="60" font-weight="bold" fill="%23111111" x="50" text-anchor="middle">AS</text></svg>',
  },
  openGraph: {
    title: 'My Portfolio - Aswath S A',
    description: 'A professional portfolio website showcasing design and development work. Modern, fast, and beautiful.',
    url: 'https://aswathsa.vercel.app',
    type: 'website',
    images: [
      {
        url: '/profile.png',
        width: 600,
        height: 600,
        alt: 'Aswath S A - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Portfolio - Aswath S A',
    description: 'A professional portfolio website showcasing design and development work. Modern, fast, and beautiful.',
    images: ['/profile.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0d0d0d" />
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
