import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

// Stagger variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} as const

function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full max-w-[360px] mx-auto lg:mx-0"
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-[2rem] blur-3xl opacity-50"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.18) 0%, rgba(167,139,250,0.12) 60%, transparent 80%)' }}
        aria-hidden="true"
      />
      <div
        className="relative rounded-[2rem] p-6"
        style={{
          background: 'rgba(255,255,255,0.045)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="font-mono text-[10px] tracking-widest uppercase"
            style={{ color: '#475569' }}
          >
            profile.json
          </span>
          <span
            className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
            style={{
              border: '1px solid rgba(52,211,153,0.3)',
              background: 'rgba(52,211,153,0.08)',
              color: '#6ee7b7',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            open to work
          </span>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-5">
          <div
            className="h-36 w-36 rounded-full flex items-center justify-center text-4xl font-bold text-slate-200 animate-float"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.25), rgba(167,139,250,0.2))',
              border: '2px solid rgba(34,211,238,0.35)',
              boxShadow: '0 0 30px rgba(34,211,238,0.15)',
            }}
          >
            HS
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: 'Experience', value: '2+ Years' },
            { label: 'Focus',      value: 'AI + Mobile' },
            { label: 'Projects',   value: '10+ Shipped' },
            { label: 'Location',   value: 'India' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-[11px] text-slate-500">{s.label}</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-100">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100svh - 72px)',
        width: '100%',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4 h-[500px] w-[500px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 translate-x-1/4 h-[450px] w-[450px] rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />

      {/* Main grid */}
      <div
        className="hero-grid"
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* ── Left — text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ flex: '1', minWidth: 0, maxWidth: '38rem' }}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-7 inline-flex">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wider"
              style={{
                border: '1px solid rgba(34,211,238,0.25)',
                background: 'rgba(34,211,238,0.08)',
                color: '#67e8f9',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Sparkles size={12} className="animate-pulse-glow" />
              Available for impactful roles · 2026
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Harshit</span>
            <br />
            <span style={{ color: '#64748b' }}>Srivastava</span>
            <span style={{ color: '#22d3ee' }}>.</span>
          </motion.h1>

          {/* Role line */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg font-medium sm:text-xl"
            style={{ color: '#94a3b8' }}
          >
            I build{' '}
            <span className="shimmer-text font-semibold">Full Stack · AI · Mobile</span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-8 sm:text-lg"
            style={{ color: '#64748b', maxWidth: '520px' }}
          >
            Crafting performant mobile apps, modern web platforms, and AI-enabled tooling
            with a sharp eye for UX and reliability.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full text-sm font-semibold text-slate-900 transition-all hover:scale-105"
              style={{
                background: '#fff',
                padding: '0.7rem 1.4rem',
                boxShadow: '0 0 0 0 rgba(255,255,255,0)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 0 rgba(255,255,255,0)')}
            >
              View Resume
              <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-slate-300 transition-all hover:text-white"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
                padding: '0.7rem 1.4rem',
              }}
            >
              Let's talk
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div variants={fadeUp} className="mt-7 flex items-center gap-3">
            {[
              { href: 'https://github.com/Harshit544-ux',                          label: 'GitHub',   abbr: 'GH' },
              { href: 'https://linkedin.com/in/harshit-srivastava-0b1694242',      label: 'LinkedIn', abbr: 'LI' },
              { href: 'mailto:harshit.srivastava544@gmail.com',                    label: 'Email',    abbr: '@'  },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs text-slate-400 transition-all hover:-translate-y-1"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34,211,238,0.4)'
                  e.currentTarget.style.color = '#22d3ee'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = ''
                }}
              >
                {s.abbr}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right — profile card ── */}
        <div
          style={{
            position: 'relative',
            flexShrink: 0,
            width: '100%',
            maxWidth: '380px',
            alignSelf: 'center',
          }}
        >
          <ProfileCard />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div
          className="h-9 w-5 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full"
            style={{ background: '#22d3ee' }}
          />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-slate-600 uppercase">scroll</span>
      </motion.div>
    </section>
  )
}
