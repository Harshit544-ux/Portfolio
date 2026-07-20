import { motion } from 'framer-motion'
import { Brain, Code2, MapPin, Sparkles } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'

const CARD_STYLE = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.09)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderRadius: '1.5rem',
}

const highlights = [
  {
    icon: Code2,
    title: 'What I build',
    body: 'Scalable web apps, intelligent AI agents, and delightful interfaces with a strong focus on product quality and speed.',
    color: '#22d3ee',
    borderColor: 'rgba(34,211,238,0.2)',
    bg: 'rgba(34,211,238,0.07)',
  },
  {
    icon: Brain,
    title: 'AI-first mindset',
    body: 'LangChain, OpenAI, RAG systems, and LLM agents — turning experimental ideas into dependable production products.',
    color: '#a78bfa',
    borderColor: 'rgba(167,139,250,0.2)',
    bg: 'rgba(167,139,250,0.07)',
  },
  {
    icon: Sparkles,
    title: 'Continuous learner',
    body: 'Always exploring modern architectures, design systems, and software patterns. Currently deep-diving into multi-agent frameworks.',
    color: '#22d3ee',
    borderColor: 'rgba(34,211,238,0.2)',
    bg: 'rgba(34,211,238,0.07)',
  },
]

const stats = [
  { value: '2+',  label: 'Years exp.' },
  { value: '10+', label: 'Projects' },
  { value: '3',   label: 'Prod. apps' },
  { value: '∞',   label: 'Curiosity' },
]

export function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="Crafting meaningful software with clarity and ambition."
    >
      <div className="grid-2col">
        {/* ── Left — bio ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <div style={CARD_STYLE} className="p-7">
            <p className="text-base leading-8 text-slate-300">
              I'm a{' '}
              <span className="font-semibold text-slate-100">Full Stack Engineer</span>{' '}
              with ~2 years of experience building polished products that feel effortless to use.
              My sweet spot is combining fluid frontend experiences with reliable backend architecture
              — especially in mobile apps and LLM-enabled products.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Currently at{' '}
              <span className="font-semibold text-slate-200">PillPlus</span>{' '}
              building healthcare-grade React Native experiences. Before that at SmartPharma360,
              shipping AI chatbots with LangChain on Azure.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={14} style={{ color: '#22d3ee' }} />
              Hyderabad, India
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex flex-col items-center py-4 rounded-2xl text-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <span className="gradient-text text-2xl font-bold font-display">{s.value}</span>
                <span className="mt-1 text-[10px] leading-tight text-slate-500 uppercase tracking-wider font-mono">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Right — highlight cards ── */}
        <div className="flex flex-col gap-4">
          {highlights.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ scale: 1.015, y: -3 }}
                className="p-5"
                style={{
                  background: card.bg,
                  border: `1px solid ${card.borderColor}`,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '1.25rem',
                  transition: 'box-shadow 0.3s',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 rounded-xl p-3"
                    style={{ background: card.bg, border: `1px solid ${card.borderColor}`, color: card.color }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100">{card.title}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-slate-400">{card.body}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
