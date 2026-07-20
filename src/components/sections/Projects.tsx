import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'

const projects = [
  {
    title: 'PillPlus Mobile Experience',
    description:
      'Production-grade healthcare app with 17+ screens, FlashList migration, complex navigation and Android rendering fixes in a live React Native app.',
    tech: ['React Native', 'TypeScript', 'FlashList', 'React Query'],
    github: 'https://github.com/Harshit544-ux',
    demo: null,
    tag: 'Mobile App',
    tagColor: '#22d3ee',
    tagBg: 'rgba(34,211,238,0.08)',
    tagBorder: 'rgba(34,211,238,0.22)',
    barColor: '#22d3ee',
  },
  {
    title: 'RAG Pipeline Studio',
    description:
      'Retrieval-augmented generation using LangChain, Qdrant vector store, HuggingFace embeddings, and DeepSeek via OpenRouter for intelligent document Q&A.',
    tech: ['LangChain', 'Qdrant', 'HuggingFace', 'OpenRouter'],
    github: 'https://github.com/Harshit544-ux',
    demo: null,
    tag: 'AI / LLM',
    tagColor: '#a78bfa',
    tagBg: 'rgba(167,139,250,0.08)',
    tagBorder: 'rgba(167,139,250,0.22)',
    barColor: '#a78bfa',
  },
  {
    title: 'VectorShift Pipeline Builder',
    description:
      'Visual drag-and-drop AI pipeline builder with React Flow, Zustand state management, undo/redo, and live LLM node execution.',
    tech: ['React', 'React Flow', 'FastAPI', 'Zustand'],
    github: 'https://github.com/Harshit544-ux',
    demo: null,
    tag: 'Full Stack',
    tagColor: '#22d3ee',
    tagBg: 'rgba(34,211,238,0.08)',
    tagBorder: 'rgba(34,211,238,0.22)',
    barColor: '#22d3ee',
  },
  {
    title: 'Medical AI Chatbot',
    description:
      'Streamlit-powered medical chatbot with LangSmith observability, deployed on Azure with structured conversation flow and session management.',
    tech: ['LangChain', 'Streamlit', 'Azure', 'LangSmith'],
    github: 'https://github.com/Harshit544-ux',
    demo: null,
    tag: 'AI Agent',
    tagColor: '#a78bfa',
    tagBg: 'rgba(167,139,250,0.08)',
    tagBorder: 'rgba(167,139,250,0.22)',
    barColor: '#a78bfa',
  },
  {
    title: 'AI Resume Analyzer',
    description:
      'Resume intelligence tool using GPT-4 for scoring, structured parsing, and candidate-experience extraction with a clean React dashboard.',
    tech: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/Harshit544-ux',
    demo: null,
    tag: 'Full Stack',
    tagColor: '#22d3ee',
    tagBg: 'rgba(34,211,238,0.08)',
    tagBorder: 'rgba(34,211,238,0.22)',
    barColor: '#22d3ee',
  },
  {
    title: 'This Portfolio',
    description:
      'Built with React + Vite + Tailwind CSS v4 + Framer Motion. Custom cursor, stagger animations, glassmorphism, and active-section tracking.',
    tech: ['React', 'Vite', 'Tailwind CSS v4', 'Framer Motion'],
    github: 'https://github.com/Harshit544-ux',
    demo: '/',
    tag: 'Design',
    tagColor: '#a78bfa',
    tagBg: 'rgba(167,139,250,0.08)',
    tagBorder: 'rgba(167,139,250,0.22)',
    barColor: '#a78bfa',
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      whileHover={{ y: -6, scale: 1.012 }}
      className="group relative flex flex-col overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '1.5rem',
        transition: 'box-shadow 0.3s',
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, ${project.barColor}, transparent)` }}
      />

      {/* Hover ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at top left, ${project.tagBg.replace('0.08', '0.04')} 0%, transparent 65%)`,
          borderRadius: '1.5rem',
        }}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-6">
        {/* Top row: tag + links */}
        <div className="flex items-start justify-between gap-3">
          <span
            className="rounded-full px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider"
            style={{ background: project.tagBg, border: `1px solid ${project.tagBorder}`, color: project.tagColor }}
          >
            {project.tag}
          </span>
          <div className="flex items-center gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Live demo – ${project.title}`}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-all hover:text-slate-200"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <ExternalLink size={13} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub – ${project.title}`}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-all hover:text-slate-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-5 font-display text-lg font-semibold text-slate-100 leading-snug group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

        {/* Tech tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full px-2.5 py-0.5 text-xs text-slate-500"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Work"
      title="Selected projects that balance polish with depth."
    >
      <div className="grid-3col">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 flex justify-center"
      >
        <a
          href="https://github.com/Harshit544-ux"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-slate-400 transition-all hover:text-slate-200"
          style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)' }}
        >
          View all on GitHub
          <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </SectionWrapper>
  )
}
