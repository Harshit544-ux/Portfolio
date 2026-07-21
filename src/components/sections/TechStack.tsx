import { motion } from 'framer-motion'

/* ─── Tech data ─────────────────────────────────────────────────────────── */

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    accent: '#22d3ee',
    accentBg: 'rgba(34,211,238,0.08)',
    accentBorder: 'rgba(34,211,238,0.22)',
    techs: [
      { name: 'React',         icon: '⚛️' },
      { name: 'Next.js',       icon: '▲' },
      { name: 'TypeScript',    icon: 'TS' },
      { name: 'Tailwind',      icon: '🌊' },
      { name: 'React Native',  icon: '📱' },
      { name: 'Framer Motion', icon: '✦' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.08)',
    accentBorder: 'rgba(167,139,250,0.22)',
    techs: [
      { name: 'Node.js',    icon: '🟢' },
      { name: 'FastAPI',    icon: '⚡' },
      { name: 'Python',     icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB',    icon: '🍃' },
      { name: 'GraphQL',    icon: '◈' },
    ],
  },
  {
    id: 'ai',
    label: 'AI / LLM',
    accent: '#22d3ee',
    accentBg: 'rgba(34,211,238,0.08)',
    accentBorder: 'rgba(34,211,238,0.22)',
    techs: [
      { name: 'LangChain',  icon: '🔗' },
      { name: 'OpenAI',     icon: '✦' },
      { name: 'RAG',        icon: '📚' },
      { name: 'LangGraph',  icon: '🕸️' },
      { name: 'Qdrant',     icon: '🎯' },
      { name: 'HuggingFace',icon: '🤗' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.08)',
    accentBorder: 'rgba(167,139,250,0.22)',
    techs: [
      { name: 'Azure',    icon: '☁️' },
      { name: 'Docker',   icon: '🐳' },
      { name: 'Vercel',   icon: '▲' },
      { name: 'GitHub',   icon: '🐙' },
      { name: 'CI/CD',    icon: '🔄' },
      { name: 'Supabase', icon: '⚡' },
    ],
  },
]

const marqueeItems = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'FastAPI', 'Python',
  'LangChain', 'OpenAI', 'RAG Pipelines', 'React Native', 'PostgreSQL',
  'MongoDB', 'Docker', 'Azure', 'Qdrant', 'HuggingFace', 'LangGraph',
  'Framer Motion', 'Zustand', 'React Query', 'GraphQL', 'LangSmith',
]

/* ─── Marquee ────────────────────────────────────────────────────────────── */
function Marquee({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...marqueeItems, ...marqueeItems]
  return (
    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <motion.div
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        style={{ display: 'flex', gap: '0.75rem', width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 1rem',
              borderRadius: '99px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontSize: '0.8rem',
              color: '#94a3b8',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* ─── Category Card ─────────────────────────────────────────────────────── */
function CategoryCard({
  cat,
  index,
}: {
  cat: (typeof categories)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      style={{
        background: 'rgba(255,255,255,0.035)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'box-shadow 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px ${cat.accentBorder}`
        e.currentTarget.style.borderColor = cat.accentBorder
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
      }}
    >
      {/* Ambient glow corner */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${cat.accentBg.replace('0.08', '0.25')} 0%, transparent 70%)`,
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.3rem 0.85rem',
            borderRadius: '99px',
            background: cat.accentBg,
            border: `1px solid ${cat.accentBorder}`,
            color: cat.accent,
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {cat.label}
        </span>
      </div>

      {/* Tech list */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.45rem',
        }}
      >
        {cat.techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.05 }}
            whileHover={{ scale: 1.04 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.625rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              cursor: 'default',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = cat.accentBg
              e.currentTarget.style.borderColor = cat.accentBorder
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
            }}
          >
            <span style={{ fontSize: '0.88rem', lineHeight: 1, flexShrink: 0 }}>{tech.icon}</span>
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 500,
                color: '#cbd5e1',
              }}
            >
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Stats bar ─────────────────────────────────────────────────────────── */
const stats = [
  { value: '20+', label: 'Technologies' },
  { value: '4',   label: 'Domains' },
  { value: '2+',  label: 'Years hands-on' },
  { value: '∞',   label: 'Curiosity' },
]

/* ─── Main Component ─────────────────────────────────────────────────────── */
export function TechStack() {
  return (
    <section
      id="tech"
      aria-label="Tech Stack"
      style={{
        maxWidth: '80rem',
        margin: '0 auto',
        paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
        paddingLeft: 'clamp(1.25rem, 4vw, 3rem)',
        paddingRight: 'clamp(1.25rem, 4vw, 3rem)',
        width: '100%',
      }}
    >
      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        style={{ marginBottom: '2rem' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#22d3ee',
            marginBottom: '0.75rem',
          }}
        >
          Tech Stack
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.65rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#f0f4ff',
            marginBottom: '1rem',
          }}
        >
          A modern engineering stack,{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #22d3ee 0%, #818cf8 55%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            tuned for product velocity.
          </span>
        </h2>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginTop: '1.5rem',
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '99px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Bento grid ── */}
      <div
        className="tech-bento-grid"
        style={{
          marginBottom: '1.75rem',
        }}
      >
        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} cat={cat} index={i} />
        ))}
      </div>

      {/* ── Marquee strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.3 }}
        style={{
          borderRadius: '1.25rem',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.02)',
          padding: '1.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#334155',
            marginBottom: '0.5rem',
          }}
        >
          Full toolkit
        </p>
        <Marquee />
        <Marquee reverse />
      </motion.div>
    </section>
  )
}
