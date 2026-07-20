import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Send } from 'lucide-react'
import { useRef, useState } from 'react'
import { SectionWrapper } from '../ui/SectionWrapper'

const CARD_STYLE = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.09)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderRadius: '1.5rem',
}

const SOCIAL_LINKS = [
  {
    label: 'Email',
    value: 'harshit.srivastava544@gmail.com',
    href: 'mailto:harshit.srivastava544@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: '/in/harshit-srivastava-0b1694242',
    href: 'https://linkedin.com/in/harshit-srivastava-0b1694242',
    icon: Send,
  },
  {
    label: 'GitHub',
    value: 'Harshit544-ux',
    href: 'https://github.com/Harshit544-ux',
    icon: ArrowUpRight,
  },
]

type Status = 'idle' | 'sending' | 'success'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
    formRef.current?.reset()
  }

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="If you're building something ambitious, let's talk."
      subtitle="I'm actively looking for software engineer and AI engineer roles where I can build meaningful products with strong, ambitious teams."
    >
      <div className="grid-2col">
        {/* ── Form ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={CARD_STYLE}
          className="p-7"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="c-name"
                className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-widest text-slate-500"
              >
                Name
              </label>
              <input
                id="c-name"
                required
                placeholder="Your name"
                className="input-field"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="c-email"
                className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-widest text-slate-500"
              >
                Email
              </label>
              <input
                id="c-email"
                type="email"
                required
                placeholder="you@company.com"
                className="input-field"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="c-msg"
                className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-widest text-slate-500"
              >
                Message
              </label>
              <textarea
                id="c-msg"
                required
                rows={5}
                placeholder="Tell me about the opportunity or project…"
                className="input-field resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status !== 'idle'}
              whileHover={status === 'idle' ? { scale: 1.02 } : {}}
              whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-[#050814] transition-all disabled:cursor-not-allowed disabled:opacity-70"
              style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)' }}
            >
              {status === 'sending' ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-[#050814] border-t-transparent animate-spin" />
                  Sending…
                </>
              ) : status === 'success' ? (
                '✓ Message sent!'
              ) : (
                <>
                  Send Message
                  <ArrowUpRight size={15} />
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-emerald-400"
              >
                Thanks! I'll reply within 24 hours.
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* ── Sidebar ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {/* Status card */}
          <div
            style={{
              background: 'rgba(34,211,238,0.06)',
              border: '1px solid rgba(34,211,238,0.2)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '1.25rem',
            }}
            className="p-5"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-300">Available for work</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Actively exploring full-time opportunities in product engineering and AI engineering.
              Response time: usually same day.
            </p>
          </div>

          {/* Links card */}
          <div style={CARD_STYLE} className="p-5 flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600 mb-1">
              Reach out
            </p>
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl p-3.5 transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34,211,238,0.22)'
                    e.currentTarget.style.background = 'rgba(34,211,238,0.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  }}
                >
                  <div
                    className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}
                  >
                    <Icon size={14} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500">{link.label}</p>
                    <p className="truncate text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
