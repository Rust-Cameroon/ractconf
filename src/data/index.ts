// Import and export all interfaces
import type { Speaker, Session, Sponsor, FAQ } from './conference'

export type {
  Speaker,
  Session,
  Sponsor,
  FAQ
}

// Import data
import { speakers as speakersData } from './speakers'
import { sessions as sessionsData } from './sessions'
import { sponsors as sponsorsData } from './sponsors'
import { faqs as faqsData } from './faqs'

// Re-export data
export const speakers = speakersData
export const sessions = sessionsData
export const sponsors = sponsorsData
export const faqs = faqsData

// Export conference metadata
export const conferenceInfo = {
  name: "Rust Africa Campus Tour",
  tagline: "Cameroon 2025 - Shaping Africa's Digital Future",
  date: "13th & 14th November 2025",
  location: "Université des Montagnes, Bangangté, West Cameroon",
  description: "The Rust Africa Campus Tour is heading to Cameroon this November, marking a pivotal moment for Rust adoption in Africa. This event brings together students, educators, developers, and government representatives under one roof for learning, collaboration, and forward-looking discussions on how Rust can power the next generation of technology in Africa.",
  social: {
    twitter: "@rustafrica",
    linkedin: "rust-africa",
    website: "https://rustafrica.org"
  }
}

// Helper functions for data filtering
export const getSpeakersByTrack = (_track: string) => {
  // This would need sessions data to work properly
  // For now, return all speakers
  return speakersData
}

export const getSponsorsByTier = (tier: Sponsor['tier']) => {
  return sponsorsData.filter(sponsor => sponsor.tier === tier)
}

export const getFAQsByCategory = (category: FAQ['category']) => {
  return faqsData.filter(faq => faq.category === category)
}

export const getSessionsByTrack = (track: string) => {
  return sessionsData.filter(session => session.track === track)
}

export const getSessionsByType = (type: Session['type']) => {
  return sessionsData.filter(session => session.type === type)
}

// Sort FAQs by priority
export const getSortedFAQs = () => {
  return [...faqsData].sort((a, b) => a.priority - b.priority)
}

// Get featured speakers (first 3)
export const getFeaturedSpeakers = () => {
  return speakersData.slice(0, 3)
}

// Get keynote sessions
export const getKeynoteSessions = () => {
  return sessionsData.filter(session => session.type === 'keynote')
}

// Get workshop sessions
export const getWorkshopSessions = () => {
  return sessionsData.filter(session => session.type === 'workshop')
}