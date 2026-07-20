import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { TechStack } from './components/sections/TechStack'
import { CustomCursor } from './components/ui/Cursor'

const NAV_ITEMS = [
  { label: 'About',      href: '#about' },
  { label: 'Stack',      href: '#tech' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

// ── Progress bar ────────────────────────────────────────────────────────────
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 80,
        originX: 0,
        background: 'linear-gradient(90deg, #22d3ee, #818cf8, #a78bfa)',
      }}
      aria-hidden="true"
    />
  )
}

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive]       = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.replace('#', ''))
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-35% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 70,
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        background: scrolled ? 'rgba(5,8,20,0.88)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="nav-inner">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 group"
          aria-label="Back to top"
        >
          <span
            className="font-display text-xl font-bold text-white"
          >
            HS<span style={{ color: '#22d3ee' }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative transition-colors duration-200 ${isActive ? 'nav-link-active' : 'text-slate-400 hover:text-slate-100'}`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all"
          style={{
            border: '1px solid rgba(34,211,238,0.28)',
            background: 'rgba(34,211,238,0.07)',
            color: '#67e8f9',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(34,211,238,0.14)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(34,211,238,0.12)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(34,211,238,0.07)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Let's connect
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="rounded-xl p-2 text-slate-400 transition hover:text-white md:hidden"
          style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.28, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden"
        style={{ background: 'rgba(5,8,20,0.96)', borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-xl px-4 py-3 text-sm font-medium text-center"
            style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.22)', color: '#67e8f9' }}
          >
            Let's connect
          </a>
        </nav>
      </motion.div>
    </header>
  )
}

// ── Back to top ─────────────────────────────────────────────────────────────
function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.8, pointerEvents: show ? 'auto' : 'none' }}
      transition={{ duration: 0.25 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-[60] flex h-11 w-11 items-center justify-center rounded-full text-slate-400 transition hover:text-[#22d3ee]"
      style={{
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(5,8,20,0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
      }}
      aria-label="Back to top"
    >
      <ArrowUp size={17} />
    </motion.button>
  )
}

// ── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '2.5rem clamp(1.25rem, 4vw, 3rem)' }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
          fontSize: '0.875rem',
          color: '#475569',
        }}
        className="sm:flex-row"
      >
        <span>© 2026 Harshit Srivastava</span>
        <span style={{ fontSize: '0.75rem' }}>Built with React + Framer Motion · Designed for impact</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a href="https://github.com/Harshit544-ux" target="_blank" rel="noreferrer" style={{ transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#94a3b8'} onMouseLeave={(e)=>e.currentTarget.style.color=''}>GitHub</a>
          <a href="https://linkedin.com/in/harshit-srivastava-0b1694242" target="_blank" rel="noreferrer" style={{ transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#94a3b8'} onMouseLeave={(e)=>e.currentTarget.style.color=''}>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

// ── App ──────────────────────────────────────────────────────────────────────
function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#f0f4ff' }}>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main id="top">
        <Hero />

        <div className="site-container"><div className="section-divider" /></div>
        <About />

        <div className="site-container"><div className="section-divider" /></div>
        <TechStack />

        <div className="site-container"><div className="section-divider" /></div>
        <Projects />

        <div className="site-container"><div className="section-divider" /></div>
        <ExperienceSection />

        <div className="site-container"><div className="section-divider" /></div>
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
