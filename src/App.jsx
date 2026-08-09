import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Globe2, Mail, Send, Sparkles, Zap } from 'lucide-react'

const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

const experience = [
  {
    title: 'Full Stack Engineer',
    company: 'PillPlus',
    period: 'Jul 2025 – Present',
    description:
      'Building a healthcare and pharmacy platform with 17+ production screens, FlashList migration, and performance-focused React Native improvements.',
    highlights: ['React Native', 'TypeScript', 'React Query', 'Mobile performance'],
  },
  {
    title: 'Junior Software Engineer',
    company: 'SmartPharma360',
    period: 'Oct 2024 – Jun 2025',
    description:
      'Developed an AI chatbot using LangChain, deployed on Azure, and monitored with LangSmith for reliable real-world AI interactions.',
    highlights: ['LangChain', 'Azure', 'LangSmith', 'OpenAI API'],
  },
]

const projects = [
  {
    title: 'PillPlus Mobile Experience',
    description:
      'Crafted high-impact healthcare screens and addressed Android rendering, modal conflicts, and navigation issues in a live app.',
    tech: ['React Native', 'TypeScript', 'FlashList', 'React Query'],
    link: 'https://github.com/Harshit544-ux',
  },
  {
    title: 'RAG Pipeline Studio',
    description:
      'Built a retrieval-augmented system using LangChain, Qdrant, Hugging Face embeddings, and DeepSeek via OpenRouter.',
    tech: ['LangChain', 'Qdrant', 'HuggingFace', 'OpenRouter'],
    link: 'https://github.com/Harshit544-ux',
  },
  {
    title: 'Medical Chatbot',
    description:
      'Created a Streamlit-powered medical chatbot experience focused on intuitive UX and clear conversational flow.',
    tech: ['Streamlit', 'Python', 'OpenAI'],
    link: 'https://github.com/Harshit544-ux',
  },
]

const skills = [
  ['React Native', 'React.js', 'TypeScript', 'Node.js'],
  ['Express.js', 'MongoDB', 'Supabase', 'PostgreSQL'],
  ['LangChain', 'OpenAI API', 'Azure', 'LangSmith'],
  ['Framer Motion', 'Tailwind CSS', 'Vite', 'REST APIs'],
]

const sectionClass = 'mx-auto flex w-full max-w-7xl flex-col px-6 py-24 sm:px-8 lg:px-12'

function Section({ id, title, children, eyebrow }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className={sectionClass}
    >
      <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
          <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-slate-50 sm:text-4xl">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </motion.section>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])

  return (
    <div className="min-h-screen overflow-x-hidden text-slate-100">
      <motion.header
        style={{ opacity }}
        className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="font-['Space_Grotesk'] text-lg font-semibold tracking-wide text-white">
            HS<span className="text-cyan-300">.</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-cyan-300">
                {link}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:scale-105"
          >
            Let’s talk
          </a>
        </div>
      </motion.header>

      <main id="top">
        <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles size={16} />
              Full Stack Engineer • Building premium digital products
            </div>
            <h1 className="font-['Space_Grotesk'] text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              I’m Harshit Srivastava, crafting resilient products for mobile and AI.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build performant React Native apps, modern web platforms, and AI-enabled tooling with a sharp eye for user experience and reliability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-950 transition hover:scale-105"
              >
                View Resume
                <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-100 transition hover:scale-105"
              >
                Contact me
              </a>
              <a
                href="https://github.com/Harshit544-ux"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-100 transition hover:scale-105"
              >
                <Globe2 size={18} />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-[-10%] top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute right-[-5%] top-32 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute bottom-12 left-1/3 h-48 w-48 rounded-full bg-violet-500/15 blur-3xl" />
          </motion.div>
        </section>

        <Section id="about" title="About me" eyebrow="Story">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I’m a Full Stack Engineer with around two years of experience building polished products that feel effortless to use. My sweet spot is combining fluid frontend experiences with reliable backend architecture, especially in mobile apps and LLM-enabled products.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8"
            >
              <div className="flex items-center gap-3 text-cyan-200">
                <Zap size={18} />
                <p className="font-medium">What fuels me</p>
              </div>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Building performant mobile apps, shipping thoughtful user flows, and exploring AI tooling that turns experimental ideas into dependable products.
              </p>
            </motion.div>
          </div>
        </Section>

        <Section id="experience" title="Experience" eyebrow="Timeline">
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-[0_20px_80px_rgba(2,6,23,0.45)]"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{item.period}</p>
                    <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-lg text-slate-300">{item.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Selected projects" eyebrow="Work">
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01, rotateX: 2, rotateY: -2 }}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-7 shadow-[0_20px_80px_rgba(2,6,23,0.28)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                    {project.tech[0]}
                  </span>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-sm text-slate-400 transition group-hover:text-cyan-300">
                    View ↗
                  </a>
                </div>
                <h3 className="mt-6 font-['Space_Grotesk'] text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" eyebrow="Toolbox">
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((group, index) => (
              <motion.div
                key={group.join('-')}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-wrap gap-2">
                  {group.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Let’s build something sharp" eyebrow="Contact">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.75fr]">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-8"
            >
              <label className="mb-2 block text-sm text-slate-400">Name</label>
              <input className="mb-5 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none ring-0" placeholder="Your name" />
              <label className="mb-2 block text-sm text-slate-400">Email</label>
              <input className="mb-5 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none ring-0" placeholder="you@example.com" />
              <label className="mb-2 block text-sm text-slate-400">Message</label>
              <textarea className="mb-5 min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none ring-0" placeholder="Tell me about your product or idea." />
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-950 transition hover:scale-105">
                Send message
                <ArrowRight size={18} />
              </button>
            </motion.form>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Reach out</p>
              <div className="mt-6 space-y-4 text-slate-300">
                <a href="mailto:harshitsri08@gmail.com" className="flex items-center gap-3 transition hover:text-white">
                  <Mail size={18} />
                  harshitsri08@gmail.com
                </a>
                <a href="https://linkedin.com/in/harshit-srivastava-0b1694242" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                  <Send size={18} />
                  LinkedIn
                </a>
                <a href="https://github.com/Harshit544-ux" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                  <Globe2 size={18} />
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 sm:px-8 lg:px-12">
        © 2026 Harshit Srivastava. Designed for impact, built with React and motion.
      </footer>
    </div>
  )
}

export default App
