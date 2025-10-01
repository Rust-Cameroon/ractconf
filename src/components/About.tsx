import React from 'react'
import { motion } from 'framer-motion'
import { conferenceInfo } from '../data'

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const stats = [
    { label: "Days", value: "2", suffix: "" },
    { label: "Speakers", value: "20+", suffix: "" },
    { label: "Sessions", value: "30+", suffix: "" },
    { label: "Attendees", value: "500", suffix: "+" }
  ]

  return (
    <section 
      className="py-16 md:py-24 bg-white"
      aria-label="About the Conference"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About the Conference
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                {conferenceInfo.name}
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {conferenceInfo.description}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                This premier technology conference brings together industry leaders, innovators, and enthusiasts 
                for two days of immersive learning and networking. Discover the latest trends, gain practical 
                insights, and connect with like-minded professionals who are shaping the future of technology.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-4 bg-blue-50 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                {/* Main Image Placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-gray-600">Conference Venue</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600 rounded-full opacity-20"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Key Highlights */}
          <motion.div className="mt-16" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              What to Expect
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Inspiring Talks",
                  description: "Learn from industry experts sharing insights on cutting-edge technologies and best practices.",
                  icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                },
                {
                  title: "Hands-on Workshops",
                  description: "Get practical experience with the latest tools and technologies in interactive sessions.",
                  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                },
                {
                  title: "Networking Opportunities",
                  description: "Connect with peers, mentors, and potential collaborators in dedicated networking sessions.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={highlight.icon} />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">{highlight.title}</h5>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About