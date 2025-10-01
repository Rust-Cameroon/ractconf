import { Speaker } from './conference'

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Senior Software Engineer",
    company: "Tech Corp",
    bio: "Expert in React and TypeScript with 10+ years of experience building scalable web applications. Passionate about mentoring and sharing knowledge with the developer community.",
    image: "/api/placeholder/150/150",
    social: {
      twitter: "@sarahj_dev",
      linkedin: "sarahjohnson",
      github: "sarahjohnson"
    },
    expertise: ["React", "TypeScript", "Node.js", "System Design", "Team Leadership"]
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Product Manager",
    company: "Innovation Labs",
    bio: "Leading product strategy and development for cutting-edge solutions. Specializes in user experience design and agile methodologies.",
    image: "/api/placeholder/150/150",
    social: {
      linkedin: "michaelchenpm"
    },
    expertise: ["Product Strategy", "UX Design", "Agile Methodologies", "Market Analysis"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "DevOps Engineer",
    company: "Cloud Systems Inc",
    bio: "Cloud infrastructure expert with focus on CI/CD pipelines and container orchestration. AWS certified solutions architect.",
    image: "/api/placeholder/150/150",
    social: {
      twitter: "@emilydevops",
      github: "emilyrodriguez"
    },
    expertise: ["AWS", "Kubernetes", "Docker", "CI/CD", "Infrastructure as Code"]
  },
  {
    id: 4,
    name: "David Kim",
    title: "AI/ML Engineer",
    company: "Data Intelligence",
    bio: "Machine learning specialist with expertise in natural language processing and computer vision. PhD in Computer Science from MIT.",
    image: "/api/placeholder/150/150",
    social: {
      linkedin: "davidkimai",
      github: "davidkimm"
    },
    expertise: ["Machine Learning", "Python", "TensorFlow", "NLP", "Computer Vision"]
  },
  {
    id: 5,
    name: "Lisa Wang",
    title: "Frontend Architect",
    company: "Design Systems Co",
    bio: "Specialist in design systems and component libraries. Advocate for accessibility and inclusive design practices.",
    image: "/api/placeholder/150/150",
    social: {
      twitter: "@lisawangui",
      github: "lisawang"
    },
    expertise: ["Design Systems", "React", "Accessibility", "UI/UX", "Component Libraries"]
  },
  {
    id: 6,
    name: "James Taylor",
    title: "Security Engineer",
    company: "SecureTech",
    bio: "Cybersecurity expert with focus on application security and penetration testing. Certified ethical hacker and security researcher.",
    image: "/api/placeholder/150/150",
    social: {
      linkedin: "jamestaylorsec",
      twitter: "@jamessecurity"
    },
    expertise: ["Cybersecurity", "Penetration Testing", "Application Security", "Ethical Hacking", "Risk Assessment"]
  }
]