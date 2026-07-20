import { motion } from 'framer-motion'
import { SectionWrapper } from '../ui/SectionWrapper'

const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'PillPlus',
    period: 'Jul 2025 — Present',
    type: 'Full-time',
    description:
      'Building a healthcare and pharmacy platform with 17+ production screens. Led FlashList migration for performance, resolved complex Android rendering bugs, modal conflicts, and navigation issues in a live production React Native app.',
    highlights: ['React Native', 'TypeScript', 'React Query', 'FlashList', 'Mobile Performance'],
    dotColor: '#22d3ee',
    dotShadow: 'rgba(34,211,238,0.5)',
    tagBg: 'rgba(34,211,238,0.08)',
    tagBorder: 'rgba(34,211,238,0.2)',
    tagColor: '#22d3ee',
    cardBg: 'rgba(255,255,255,0.04)',
    cardBorder: 'rgba(255,255,255,0.09)',
  },
  {
    role: 'Junior Software Engineer',
    company: 'SmartPharma360',
    period: 'Oct 2024 — Jun 2025',
    type: 'Full-time',
    description:
      'Developed an AI-powered chatbot using LangChain, integrated with Azure cloud infrastructure, and monitored with LangSmith for reliable, observable AI interactions. Improved product reliability and LLM response quality.',
    highlights: ['LangChain', 'Azure', 'LangSmith', 'OpenAI API', 'Python'],
    dotColor: '#a78bfa',
    dotShadow: 'rgba(167,139,250,0.5)',
    tagBg: 'rgba(167,139,250,0.08)',
    tagBorder: 'rgba(167,139,250,0.2)',
    tagColor: '#a78bfa',
    cardBg: 'rgba(167,139,250,0.04)',
    cardBorder: 'rgba(167,139,250,0.12)',
  },
]

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="Experience"
      title="A trajectory shaped by impact, ownership, and growth."
    >
      <div className="relative pl-8">
        {/* Timeline vertical line */}
        <div className="timeline-line" style={{ left: '3px' }} />

        <div className="space-y-8">
          {experiences.map((item, i) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 0.5, delay: i * 0.12 + 0.15 }}
                className="absolute"
                style={{
                  left: '-29px',
                  top: '1.5rem',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: item.dotColor,
                  border: '2px solid #050814',
                  boxShadow: `0 0 12px ${item.dotShadow}`,
                }}
              />

              {/* Card */}
              <div
                className="p-6 sm:p-8"
                style={{
                  background: item.cardBg,
                  border: `1px solid ${item.cardBorder}`,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '1.5rem',
                }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    {/* Period + type badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full px-3 py-1 font-mono text-[11px] font-medium"
                        style={{ background: item.tagBg, border: `1px solid ${item.tagBorder}`, color: item.tagColor }}
                      >
                        {item.period}
                      </span>
                      <span
                        className="rounded-full px-3 py-1 font-mono text-[11px] font-medium text-slate-500"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        {item.type}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-base text-slate-400">{item.company}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-8 text-slate-400 sm:text-base">{item.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs text-slate-500"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
