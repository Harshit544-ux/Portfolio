import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'

interface CardProps {
  className?: string
  children: ReactNode
  accent?: 'cyan' | 'violet' | 'none'
  hover?: boolean
}

export function Card({ className, children, accent = 'none', hover = false }: CardProps) {
  const accentClass =
    accent === 'cyan'
      ? 'border-[rgba(34,211,238,0.2)] bg-[rgba(34,211,238,0.05)]'
      : accent === 'violet'
      ? 'border-[rgba(167,139,250,0.2)] bg-[rgba(167,139,250,0.05)]'
      : 'glass'

  return (
    <div
      className={cn(
        'rounded-3xl border backdrop-blur-xl',
        accent === 'none' ? 'border-white/8 bg-[rgba(14,20,40,0.6)]' : accentClass,
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardContent({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('p-6', className)}>{children}</div>
}
