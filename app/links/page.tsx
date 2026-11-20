import type { Metadata } from 'next'
import Image from 'next/image'
import { ExternalLink, Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aswath S A | Links',
  description: 'Connect with Aswath S A.',
}

const links = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aswath2_4/',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aswath-s-a-3702a9292',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Aswath2005',
    icon: Github,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/917356690727',
    icon: MessageCircle,
  },
  {
    label: 'Email',
    href: 'mailto:aswathsa24@gmail.com',
    icon: Mail,
  },
  {
    label: 'Visit My Portfolio',
    href: 'https://aswathsa.vercel.app',
    icon: ExternalLink,
  },
]

export default function LinksPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-6 py-12 text-[var(--text-primary)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(circle at 50% 18%, rgba(59, 130, 246, 0.24), transparent 30rem), radial-gradient(circle at 12% 85%, rgba(37, 99, 235, 0.12), transparent 24rem), linear-gradient(rgba(96,165,250,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.035) 1px, transparent 1px)',
          backgroundSize: 'auto, 42px 42px, 42px 42px',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 rounded-full bg-coral/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <div className="group relative">
          <div className="absolute -inset-3 rounded-full bg-blue-500/30 opacity-70 blur-xl transition duration-500 group-hover:opacity-100 group-hover:blur-2xl" />
          <div className="absolute -inset-1 rounded-full border border-blue-400/40 transition duration-500 group-hover:border-blue-300 group-hover:scale-105" />
          <Image
            src="/aswath-portrait-source.jpg"
            alt="Aswath S A"
            width={128}
            height={128}
            priority
            className="relative h-32 w-32 rounded-full border border-blue-300/50 bg-[#020617] object-cover object-top p-1 transition duration-500 group-hover:scale-105 group-hover:border-blue-200"
          />
        </div>

        <h1 className="mt-6 font-bebas text-4xl tracking-[0.12em]">ASWATH S A</h1>
        <p className="mt-2 text-center font-mono text-xs uppercase tracking-[0.16em] text-white/55">
          Developer • Tech Enthusiast • Community Leader
        </p>
        <span className="mt-5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          Find me online
        </span>

        <div className="mt-8 flex w-full flex-col gap-3">
          {links.map(({ label, href, icon: Icon }, index) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-coral/60 hover:bg-white/[0.09] hover:shadow-coral/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              <span className="absolute inset-y-0 left-0 w-1 origin-left scale-y-0 bg-coral transition-transform duration-300 group-hover:scale-y-100" />
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-white/70 transition-all duration-300 group-hover:border-coral/40 group-hover:bg-coral group-hover:text-black">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="flex-1 text-center text-sm font-semibold tracking-wide">{label}</span>
              <span className="w-9 text-right font-mono text-xs text-white/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-coral" aria-hidden="true">
                0{index + 1}
              </span>
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-coral to-transparent transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
          aswathsa24@gmail.com
        </p>
      </div>
    </main>
  )
}
