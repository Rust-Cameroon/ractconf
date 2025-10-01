import { FAQ } from './conference'

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "When and where is the conference taking place?",
    answer: "The conference will be held on March 15-16, 2024 at the Convention Center in downtown Tech City. Registration opens at 8:00 AM on both days.",
    category: "general",
    priority: 1
  },
  {
    id: 2,
    question: "How do I register for the conference?",
    answer: "You can register online through our website by clicking the 'Register' button. Early bird pricing is available until February 1st. Group discounts are available for teams of 5 or more.",
    category: "registration",
    priority: 2
  },
  {
    id: 3,
    question: "What is included in the conference ticket?",
    answer: "Your ticket includes access to all sessions, workshops, networking events, conference materials, lunch, and refreshments. VIP tickets also include priority seating and exclusive networking opportunities.",
    category: "registration",
    priority: 3
  },
  {
    id: 4,
    question: "Is there parking available at the venue?",
    answer: "Yes, there is ample parking available at the Convention Center. We recommend using the main parking garage located on 5th Street. Discounted parking rates are available for conference attendees.",
    category: "venue",
    priority: 4
  },
  {
    id: 5,
    question: "Will the sessions be recorded?",
    answer: "Yes, most sessions will be recorded and made available to attendees after the conference. Keynote presentations and selected talks will be available to the public on our YouTube channel.",
    category: "general",
    priority: 5
  },
  {
    id: 6,
    question: "How can I become a speaker at future conferences?",
    answer: "We're always looking for passionate speakers! You can submit a proposal through our website's 'Call for Speakers' page. We review submissions quarterly and select speakers based on expertise and relevance to our audience.",
    category: "speakers",
    priority: 6
  },
  {
    id: 7,
    question: "What networking opportunities are available?",
    answer: "We offer multiple networking sessions including coffee breaks, lunch sessions, and an evening reception on the first day. There are also dedicated networking areas and a conference app to connect with other attendees.",
    category: "general",
    priority: 7
  },
  {
    id: 8,
    question: "Can I get a refund if I can't attend?",
    answer: "Yes, refunds are available up to 30 days before the conference. After that, we can transfer your ticket to a colleague or provide credit for future events. Please contact our support team for assistance.",
    category: "registration",
    priority: 8
  },
  {
    id: 9,
    question: "Are there opportunities for sponsorship?",
    answer: "Absolutely! We have various sponsorship packages available from bronze to platinum levels. Each tier offers different benefits including branding, networking opportunities, and booth space. Contact our sponsorship team for details.",
    category: "sponsors",
    priority: 9
  },
  {
    id: 10,
    question: "Is the venue accessible for people with disabilities?",
    answer: "Yes, the Convention Center is fully accessible with wheelchair ramps, elevators, accessible restrooms, and designated seating areas. Please let us know if you need any special accommodations when registering.",
    category: "venue",
    priority: 10
  },
  {
    id: 11,
    question: "What should I bring to the conference?",
    answer: "Bring your ticket (digital or printed), ID for registration, business cards for networking, a notebook or device for taking notes, and a charger for your devices. WiFi will be available throughout the venue.",
    category: "general",
    priority: 11
  },
  {
    id: 12,
    question: "Will there be food provided?",
    answer: "Yes, lunch and refreshments are included with your ticket. We cater to various dietary requirements including vegetarian, vegan, and gluten-free options. Please indicate your dietary preferences when registering.",
    category: "venue",
    priority: 12
  },
  {
    id: 13,
    question: "How do I get to the venue?",
    answer: "The Convention Center is accessible by public transportation. Take the Metro to Downtown Station and walk 2 blocks east. For drivers, use the address: 123 Convention Plaza, Tech City. Rideshare drop-off is available at the main entrance.",
    category: "venue",
    priority: 13
  },
  {
    id: 14,
    question: "Can I volunteer at the conference?",
    answer: "Yes! We welcome volunteers and offer complimentary tickets in exchange for helping with registration, session monitoring, and other conference activities. Contact our volunteer coordinator for more information.",
    category: "general",
    priority: 14
  },
  {
    id: 15,
    question: "What COVID-19 safety measures are in place?",
    answer: "We follow local health guidelines. Currently, masks are optional but recommended. Hand sanitizing stations are available throughout the venue. The venue has enhanced cleaning protocols and good ventilation systems.",
    category: "venue",
    priority: 15
  }
]