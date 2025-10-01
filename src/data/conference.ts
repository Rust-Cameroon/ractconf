// TypeScript interfaces for conference webpage data
// This file defines the data structure for all conference-related information

export interface Speaker {
  id: number
  name: string
  title: string
  company: string
  bio: string
  image: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
  expertise: string[]
}

export interface Session {
  id: number
  title: string
  description: string
  speaker: Speaker
  time: string
  duration: string
  track: string
  type: 'keynote' | 'talk' | 'workshop' | 'panel'
  room?: string
  tags?: string[]
}

export interface Sponsor {
  id: number
  name: string
  logo: string
  website: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
  description: string
  benefits?: string[]
}

export interface FAQ {
  id: number
  question: string
  answer: string
  category: 'general' | 'registration' | 'venue' | 'speakers' | 'sponsors'
  priority: number
}

// Re-export all data from organized files for backward compatibility
export { speakers } from './speakers'
export { sessions } from './sessions'
export { sponsors } from './sponsors'
export { faqs } from './faqs'