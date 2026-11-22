import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ScrollProgress } from '@/components/ScrollProgress'

export const metadata: Metadata = {
  metadataBase: new URL('https://aswathsa.vercel.app'),
  title: {
    default: 'Aswath S A — Full-Stack Developer, Portfolio & Community Leader',
    template: '%s | Aswath S A',
  },
  description: 'Aswath S A (Aswath SA) is a full-stack developer and community leader from Kerala, India. Explore Aswath S A’s portfolio, projects, skills, leadership experience, and web development work.',
  keywords: [
    'Aswath S A',
    'Aswath SA',
    'Aswath',
    'Aswath Portfolio',
    'Aswath S A Portfolio',
    'Aswath S A Developer',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer',
    'Portfolio',
    'Kerala',
  ],
  authors: [{ name: 'Aswath S A', url: 'https://aswathsa.vercel.app' }],
  creator: 'Aswath S A',
  publisher: 'Aswath S A',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Aswath S A — Full-Stack Developer & Community Leader',
    description: 'Explore Aswath S A’s portfolio, projects, skills, and leadership experience.',
    url: 'https://aswathsa.vercel.app',
    type: 'website',
    locale: 'en_US',
    siteName: 'Aswath S A Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aswath S A — Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aswath S A — Full-Stack Developer',
    description: 'Explore Aswath S A’s portfolio, projects, skills, and leadership experience.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <meta name="application-name" content="Aswath S A Portfolio" />
        <meta name="apple-mobile-web-app-title" content="Aswath S A" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Aswath S A',
              alternateName: ['Aswath SA', 'Aswath'],
              url: 'https://aswathsa.vercel.app',
              image: 'https://aswathsa.vercel.app/IMG_20260404_122553.jpg',
              jobTitle: 'Full-Stack Developer',
              description: 'Full-stack developer and community leader from Kerala, India.',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Kerala',
                addressCountry: 'IN',
              },
              email: 'mailto:aswathsa24@gmail.com',
              sameAs: [
                'https://github.com/Aswath2005',
                'https://linkedin.com/in/aswath-s-a-3702a9292',
                'https://www.instagram.com/aswath2_4/',
              ],
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'MongoDB',
                'Supabase',
                'Full-Stack Development',
                'Community Leadership',
              ],
            }),
          }}
        />
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
