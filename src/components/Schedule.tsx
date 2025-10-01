
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { sessions } from '../data'
import { Session as SessionType } from '../data/conference'

const Schedule: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')

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

  // Get unique tracks and types
  const tracks = ['all', ...Array.from(new Set(sessions.map(s => s.track)))]
  const types = ['all', ...Array.from(new Set(sessions.map(s => s.type)))]

  // Filter sessions
  const filteredSessions = sessions.filter(session => {
    const trackMatch = selectedTrack === 'all' || session.track === selectedTrack
    const typeMatch = selectedType === 'all' || session.type === selectedType
    return trackMatch && typeMatch
  })

  // Group sessions by time
  const sessionsByTime = filteredSessions.reduce((acc, session) => {
    if (!acc[session.time]) {
      acc[session.time] = []
    }
    acc[session.time].push(session)
    return acc
  }, {} as Record<string, SessionType[]>)

  const timeSlots = Object.keys(sessionsByTime).sort()

  return (
    <section className="py-16 md:py-24 bg-white" aria-label="Conference Schedule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conference Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive schedule of talks, workshops, and networking events
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
          </motion.div>

          {/* Filters */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-8 justify-center"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label htmlFor="track-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Track
                </label>
                <select
                  id="track-filter"
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {tracks.map(track => (
                    <option key={track} value={track}>
                      {track === 'all' ? 'All Tracks' : track}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Type
                </label>
                <select
                  id="type-filter"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Schedule Timeline */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            {timeSlots.map((timeSlot) => (
              <motion.div
                key={timeSlot}
                className="relative"
                variants={itemVariants}
              >
                {/* Time Header */}
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                    {timeSlot}
                  </div>
                  <div className="flex-1 h-px bg-gray-200 ml-4" />
                </div>

                {/* Sessions Grid */}
                <div className="grid gap-4 md:gap-6">
                  {sessionsByTime[timeSlot].map((session) => (
                    <motion.div
                      key={session.id}
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {session.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              session.type === 'keynote' ? 'bg-purple-100 text-purple-800' :
                              session.type === 'workshop' ? 'bg-green-100 text-green-800' :
                              session.type === 'panel' ? 'bg-orange-100 text-orange-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {session.type}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">
                            {session.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span className="text-gray-700 font-medium">{session.speaker.name}</span>
                            </div>
                            {session.room && (
                              <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span className="text-gray-600">{session.room}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              <span className="text-gray-600">{session.track}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-sm">{session.duration}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      {session.tags && session.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {session.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredSessions.length === 0 && (
            <motion.div
              className="text-center py-12"
              variants={itemVariants}
            >
              <div className="text-gray-500 text-lg">
                No sessions found matching your filters.
              </div>
              <button
                onClick={() => {
                  setSelectedTrack('all')
                  setSelectedType('all')
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule
