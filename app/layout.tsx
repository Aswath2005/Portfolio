import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Portfolio - Aswath S A',
  description: 'A professional portfolio website showcasing design and development work. Modern, fast, and beautiful.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23FACC15" width="100" height="100"/><text y="75" font-size="60" font-weight="bold" fill="%23111111" x="50" text-anchor="middle">AS</text></svg>',
  },
  openGraph: {
    title: 'My Portfolio - Aswath S A',
    description: 'A professional portfolio website showcasing design and development work. Modern, fast, and beautiful.',
    images: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><rect fill="%23111111" width="1200" height="630"/><rect fill="%23FACC15" x="50" y="50" width="200" height="200" rx="10"/><text y="180" font-size="120" font-weight="bold" fill="%23111111" x="150" text-anchor="middle" font-family="Arial">AS</text><text y="380" font-size="80" font-weight="bold" fill="%23FACC15" x="600" text-anchor="middle" font-family="Arial" letter-spacing="4">PORTFOLIO</text><text y="480" font-size="40" fill="%23FACC15" x="600" text-anchor="middle" font-family="Arial">Aswath S A</text></svg>',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
    type: 'website',
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
        {children}
      </body>
    </html>
  )
}
