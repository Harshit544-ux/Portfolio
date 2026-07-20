export interface Project {
  title: string
  description: string
  problem: string
  solution: string
  tech: string[]
  features: string[]
  challenge: string
  learning: string
  github: string
  demo: string
  image?: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  summary: string
  achievements: string[]
}

export interface SkillGroup {
  title: string
  skills: Array<{ name: string; level: number }>
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}
