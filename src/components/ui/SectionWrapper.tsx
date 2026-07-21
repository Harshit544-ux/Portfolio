import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function SectionWrapper({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={title}
      style={{
        maxWidth: '80rem',          // max-w-7xl = 1280px
        margin: '0 auto',
        paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
        paddingLeft: 'clamp(1.25rem, 4vw, 3rem)',   // responsive px
        paddingRight: 'clamp(1.25rem, 4vw, 3rem)',
        width: '100%',
      }}
    >
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
          {eyebrow}
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.65rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#f0f4ff',
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              marginTop: '1rem',
              maxWidth: '40rem',
              fontSize: '0.975rem',
              lineHeight: 1.85,
              color: '#64748b',
            }}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
      {children}
    </section>
  )
}
