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

/* ==========================================================================
   ExperienceSection Component
   - UI / LAYOUT IMPROVEMENTS:
     1. Generous Internal Padding:
        - `p-6 sm:p-8` provides 24px padding on mobile and 32px on desktop so date badges and text never touch borders.
     2. Card Vertical Spacing:
        - `gap-7 sm:gap-8` provides 28px–32px clean vertical gap between consecutive timeline cards.
     3. Left Timeline Breathing Room:
        - Increased left container padding to `pl-10 sm:pl-12` (40px–48px) so timeline dots (`left: -41px`) have ~20px clear breathing space before card borders.
     4. Content Element Spacing Stack:
        - Date Badges → Title: `mt-3.5` (14px)
        - Title → Company: `mt-1.5` (6px)
        - Company → Description: `mt-5` (20px)
        - Description → Tech Chips: `mt-6` (24px)
     5. Comfortable Line-Height & Max-Width:
        - Description uses `leading-[1.75]` with `max-w-3xl` (~768px) to prevent unnatural single-line text stretching on wide displays.
     6. Premium Border Radius:
        - Increased card border radius to `1.75rem` (28px) for a modern, sleek developer card silhouette.
   ========================================================================== */
export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="Experience"
      title="A trajectory shaped by impact, ownership, and growth."
    >
      {/* ── Timeline Container with Left Breathing Room ── */}
      <div className="relative pl-10 sm:pl-12">
        {/* ── Timeline Cards Stack (28px–32px gap) ── */}
        <div className="flex flex-col gap-7 sm:gap-8">
          {experiences.map((item, i) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              {/* Timeline Indicator Dot — Offset cleanly from card border */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 0.5, delay: i * 0.12 + 0.15 }}
                className="absolute"
                style={{
                  left: '-41px',
                  top: '2rem',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: item.dotColor,
                  border: '2px solid #050814',
                  boxShadow: `0 0 12px ${item.dotShadow}`,
                }}
              />

              {/* Experience Card Container (24px mobile, 32px desktop padding, 28px border-radius) */}
              <div
                className="p-6 sm:p-8 transition-all duration-300 hover:border-white/20"
                style={{
                  background: item.cardBg,
                  border: `1px solid ${item.cardBorder}`,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '1.75rem',
                }}
              >
                {/* 1. Date & Employment Type Badges (Top clearance via card padding) */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="rounded-full px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-wide"
                    style={{ background: item.tagBg, border: `1px solid ${item.tagBorder}`, color: item.tagColor }}
                  >
                    {item.period}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 font-mono text-[11px] font-medium text-slate-400"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {item.type}
                  </span>
                </div>

                {/* 2. Role Title (14px gap from Date badge) */}
                <h3 className="mt-3.5 font-display text-xl font-semibold text-white sm:text-2xl tracking-tight">
                  {item.role}
                </h3>

                {/* 3. Company Name (6px gap from Title) */}
                <p className="mt-1.5 text-base font-medium text-slate-400">
                  {item.company}
                </p>

                {/* 4. Role Description (20px gap from Company, 1.75 line-height, max 768px width) */}
                <p className="mt-5 text-sm sm:text-base leading-[1.75] text-slate-300/90 max-w-3xl">
                  {item.description}
                </p>

                {/* 5. Tech Stack Chips (24px gap from Description) */}
                <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3.5 py-1.5 font-mono text-xs text-slate-400 transition-colors duration-200 hover:text-slate-200"
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

