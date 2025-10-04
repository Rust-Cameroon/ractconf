import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Speakers: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      } as any
    }
  }

  const [speakers, setSpeakers] = useState<Array<{
    id: number
    name: string
    title: string
    company: string
    bio?: string
    image?: string
    social?: {
      twitter?: string
      linkedin?: string
      github?: string
    }
    expertise: string[]
    talk?: string
  }>>([])

  useEffect(() => {
    const controller = new AbortController()

    async function loadSpeakers() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}speakers.json`, {
          signal: controller.signal
        })
        if (!response.ok) {
          throw new Error(`Failed to load speakers.json: ${response.status}`)
        }
        const data = await response.json()
        setSpeakers(Array.isArray(data) ? data : data.speakers ?? [])
      } catch (error) {
        if ((error as any)?.name !== 'AbortError') {
          console.error(error)
        }
      }
    }

    loadSpeakers()
    return () => controller.abort()
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gray-50" aria-label="Conference Speakers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Speakers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from Rust experts, community leaders, and innovators who are shaping the future of systems programming in Africa
            </p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4" />
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {speakers.map((speaker) => (
              <motion.div
                key={speaker.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Speaker Image */}
                <div className="relative h-64 bg-gradient-to-br from-orange-100 to-red-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                      Speaker
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {speaker.company}
                  </p>
                  
                  {/* Talk Title */}
                  {speaker.talk && (
                    <div className="mb-4 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <p className="text-sm font-medium text-orange-800">
                        Talk: {speaker.talk}
                      </p>
                    </div>
                  )}
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {speaker.expertise.slice(0, 3).map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {speaker.expertise.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        +{speaker.expertise.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Social Links */}
                  {speaker.social && (
                    <div className="flex gap-3">
                      {speaker.social.twitter && (
                        <a
                          href={`https://twitter.com/${speaker.social.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-orange-500 transition-colors"
                          aria-label={`Visit ${speaker.name}'s Twitter profile`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      )}
                      {speaker.social.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${speaker.social.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-orange-600 transition-colors"
                          aria-label={`Visit ${speaker.name}'s LinkedIn profile`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.542C23.228 24 24 23.227 24 22.271V1.729C24 .774 23.228 0 22.225 0z"/>
                          </svg>
                        </a>
                      )}
                      {speaker.social.github && (
                        <a
                          href={`https://github.com/${speaker.social.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-orange-600 transition-colors"
                          aria-label={`Visit ${speaker.name}'s GitHub profile`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Speakers