import { Session } from './conference'
import { speakers } from './speakers'

export const sessions: Session[] = [
  {
    id: 1,
    title: "Opening Keynote: The Future of Technology",
    description: "Join us for an inspiring keynote about emerging technologies and their impact on society and business. Explore how AI, cloud computing, and other innovations are reshaping our world.",
    speaker: speakers[0],
    time: "8:30 AM",
    duration: "30 min",
    track: "Keynote",
    type: "keynote",
    room: "Main Hall",
    tags: ["Technology", "Future", "Innovation", "AI"]
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    description: "Learn best practices for building large-scale React applications with TypeScript, including state management, performance optimization, and architectural patterns that scale.",
    speaker: speakers[0],
    time: "09:00 AM",
    duration: "45 min",
    track: "Development",
    type: "talk",
    room: "Main Hall",
    tags: ["React", "TypeScript", "Architecture", "Best Practices", "Scalability"]
  },
  {
    id: 3,
    title: "Product Strategy in Tech",
    description: "Understanding product management in the modern tech landscape, from ideation to launch and iteration. Learn how to build products that users love.",
    speaker: speakers[1],
    time: "10:00 AM",
    duration: "30 min",
    track: "Business",
    type: "talk",
    room: "Conference Room A",
    tags: ["Product Management", "Strategy", "UX", "Agile", "User Research"]
  },
  {
    id: 4,
    title: "Kubernetes Workshop: From Zero to Hero",
    description: "Hands-on workshop covering Kubernetes fundamentals, deployment strategies, and best practices for production environments. Bring your laptop for interactive exercises.",
    speaker: speakers[2],
    time: "11:30 AM",
    duration: "90 min",
    track: "Infrastructure",
    type: "workshop",
    room: "Tech Lab 1",
    tags: ["Kubernetes", "DevOps", "Containers", "Cloud", "Production"]
  },
  {
    id: 5,
    title: "AI in Modern Applications",
    description: "Exploring practical applications of AI and machine learning in real-world software products. See how companies are integrating AI to enhance user experiences.",
    speaker: speakers[3],
    time: "2:00 PM",
    duration: "45 min",
    track: "AI/ML",
    type: "talk",
    room: "Main Hall",
    tags: ["AI", "Machine Learning", "Python", "Real-world Applications", "Integration"]
  },
  {
    id: 6,
    title: "Design Systems at Scale",
    description: "Learn how to build and maintain design systems that scale across multiple products and teams. Explore tools, processes, and best practices.",
    speaker: speakers[4],
    time: "3:00 PM",
    duration: "45 min",
    track: "Design",
    type: "talk",
    room: "Conference Room B",
    tags: ["Design Systems", "React", "Accessibility", "UI/UX", "Component Libraries"]
  },
  {
    id: 7,
    title: "Security Best Practices for Modern Apps",
    description: "Essential security practices every developer should know. Cover common vulnerabilities, secure coding practices, and tools for building secure applications.",
    speaker: speakers[5],
    time: "4:00 PM",
    duration: "45 min",
    track: "Security",
    type: "talk",
    room: "Main Hall",
    tags: ["Cybersecurity", "Application Security", "Best Practices", "Vulnerabilities", "Secure Coding"]
  },
  {
    id: 8,
    title: "Panel: The Future of Web Development",
    description: "Join our expert panel discussing emerging trends in web development, from new frameworks to evolving best practices and the impact of AI on development.",
    speaker: speakers[0],
    time: "5:00 PM",
    duration: "60 min",
    track: "Development",
    type: "panel",
    room: "Main Hall",
    tags: ["Web Development", "Future Trends", "Frameworks", "AI", "Best Practices"]
  }
]