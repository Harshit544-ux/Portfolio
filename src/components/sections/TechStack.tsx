import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionWrapper } from '../ui/SectionWrapper'

const CARD_STYLE = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.09)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderRadius: '1.5rem',
}

const groups = [
  {
    title: 'Frontend',
    dot: '#22d3ee',
    skills: [
      { name: 'React / React Native', level: 95 },
      { name: 'Next.js',              level: 90 },
      { name: 'TypeScript',           level: 93 },
      { name: 'Tailwind CSS',         level: 92 },
    ],
    barGradient: 'linear-gradient(90deg, #22d3ee, #818cf8)',
    levelColor: '#22d3ee',
  },
  {
    title: 'Backend',
    dot: '#a78bfa',
    skills: [
      { name: 'Node.js / Express',    level: 88 },
      { name: 'FastAPI / Python',     level: 85 },
      { name: 'PostgreSQL / MongoDB', level: 83 },
      { name: 'REST & GraphQL',       level: 86 },
    ],
    barGradient: 'linear-gradient(90deg, #818cf8, #a78bfa)',
    levelColor: '#a78bfa',
  },
  {
    title: 'AI / LLM',
    dot: '#22d3ee',
    skills: [
      { name: 'LangChain',            level: 90 },
      { name: 'OpenAI / Embeddings',  level: 91 },
      { name: 'RAG Pipelines',        level: 88 },
      { name: 'LangGraph / Agents',   level: 84 },
    ],
    barGradient: 'linear-gradient(90deg, #22d3ee, #818cf8)',
    levelColor: '#22d3ee',
  },
  {
    title: 'Cloud & DevOps',
    dot: '#a78bfa',
    skills: [
      { name: 'Azure',                level: 82 },
      { name: 'Docker',               level: 80 },
      { name: 'Vercel / CI-CD',       level: 88 },
      { name: 'GitHub Actions',       level: 80 },
    ],
    barGradient: 'linear-gradient(90deg, #818cf8, #a78bfa)',
    levelColor: '#a78bfa',
  },
]

const extraTags = [
  'Framer Motion', 'Supabase', 'React Query', 'Qdrant',
  'HuggingFace', 'LangSmith', 'Vite', 'FlashList', 'OpenRouter',
]

function SkillBar({
  name, level, barGradient, levelColor, delay,
}: {
  name: string; level: number; barGradient: string; levelColor: string; delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-300">{name}</span>
        <span className="font-mono text-xs" style={{ color: levelColor }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ background: barGradient }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <SectionWrapper
      id="tech"
      eyebrow="Tech Stack"
      title="A modern engineering stack, tuned for product velocity."
    >
      <div className="grid-2col-eq">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: gi * 0.08 }}
            style={CARD_STYLE}
            className="p-6"
          >
            {/* Card header */}
            <div className="mb-6 flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full" style={{ background: g.dot }} />
              <h3 className="font-display font-semibold text-slate-100">{g.title}</h3>
            </div>

            <div className="space-y-5">
              {g.skills.map((s, si) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  barGradient={g.barGradient}
                  levelColor={g.levelColor}
                  delay={gi * 0.1 + si * 0.06}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tag cloud */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.3 }}
        className="mt-8"
      >
        <p className="mb-4 text-center font-mono text-xs tracking-widest text-slate-600 uppercase">
          Also in the toolkit
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {extraTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -3, scale: 1.05 }}
              className="cursor-default rounded-full px-4 py-1.5 text-sm text-slate-400 transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
