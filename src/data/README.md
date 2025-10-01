# Conference Data Structure

This directory contains the TypeScript interfaces and sample data for the conference webpage. The data is organized to allow easy updates without modifying the main UI code.

## File Structure

```
src/data/
├── conference.ts    # Main interfaces and re-exports
├── speakers.ts      # Speaker data
├── sessions.ts      # Conference sessions/schedule data
├── sponsors.ts      # Sponsor data
├── faqs.ts          # FAQ data
├── index.ts         # Centralized exports with helper functions
└── README.md        # This file
```

## Interfaces

### Speaker
```typescript
interface Speaker {
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
```

### Session
```typescript
interface Session {
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
```

### Sponsor
```typescript
interface Sponsor {
  id: number
  name: string
  logo: string
  website: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
  description: string
  benefits?: string[]
}
```

### FAQ
```typescript
interface FAQ {
  id: number
  question: string
  answer: string
  category: 'general' | 'registration' | 'venue' | 'speakers' | 'sponsors'
  priority: number
}
```

## Usage Examples

### Basic Import
```typescript
// Import all data
import { speakers, sessions, sponsors, faqs } from '@/data'

// Import with helper functions
import { 
  speakers, 
  sessions, 
  sponsors, 
  faqs,
  getSponsorsByTier,
  getSessionsByTrack,
  getSortedFAQs
} from '@/data/index'
```

### Using Helper Functions
```typescript
// Get platinum sponsors
const platinumSponsors = getSponsorsByTier('platinum')

// Get development track sessions
const devSessions = getSessionsByTrack('Development')

// Get sorted FAQs (by priority)
const sortedFAQs = getSortedFAQs()

// Get keynote sessions
const keynotes = getKeynoteSessions()

// Get workshop sessions
const workshops = getWorkshopSessions()

// Get featured speakers
const featuredSpeakers = getFeaturedSpeakers()
```

### Filtering Data
```typescript
// Get FAQs by category
const generalFAQs = getFAQsByCategory('general')
const registrationFAQs = getFAQsByCategory('registration')

// Get sessions by type
const talks = getSessionsByType('talk')
const workshops = getSessionsByType('workshop')
```

## Updating Data

To update the conference data:

1. **Speakers**: Edit `src/data/speakers.ts`
2. **Sessions**: Edit `src/data/sessions.ts`
3. **Sponsors**: Edit `src/data/sponsors.ts`
4. **FAQs**: Edit `src/data/faqs.ts`

The interfaces in `conference.ts` define the structure that all data must follow, ensuring type safety throughout the application.

## Adding New Data

When adding new data:

1. Follow the existing interface structure
2. Maintain consistent ID numbering
3. Use appropriate categories and tiers
4. Include all required fields
5. Add optional fields where relevant

## Conference Metadata

Basic conference information is available through the `conferenceInfo` object:

```typescript
import { conferenceInfo } from '@/data/index'

const { name, date, location, description } = conferenceInfo