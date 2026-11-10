export interface JobDto {
  title: string
  company: string
  website: string
  about: string
  techStack: TechStack
  offer?: string
  interests: string[]
  questions: string[]
}

interface TechStack {
  frontend?: string
  backend?: string
  database?: string
  cloud?: string
}
