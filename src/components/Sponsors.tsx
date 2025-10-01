import React from 'react'
import { motion } from 'framer-motion'
import { getSponsorsByTier } from '../data'

const Sponsors: React.FC = () => {
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

  const tierConfig = {
    platinum: {
      title: 'Platinum Sponsors',
      color: 'bg-purple-100 text-purple-800',
      borderColor: 'border-purple-200',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      logoSize: 'h-24'
    },
    gold: {
      title: 'Gold Sponsors',
      color: 'bg-yellow-100 text-yellow-800',
      borderColor: 'border-yellow-200',
      gridCols: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      logoSize: 'h-20'
    },
    silver: {
      title: 'Silver Sponsors',
      color: 'bg-gray-100 text-gray-800',
      borderColor: 'border-gray-200',
      gridCols: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
      logoSize: 'h-16'
    },
    bronze: {
      title: 'Bronze Sponsors',
      color: 'bg-orange-100 text-orange-800',
      borderColor: 'border-orange-200',
      gridCols: 'grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
      logoSize: 'h-12'
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50" aria-label="Conference Sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sponsors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thank you to our amazing sponsors who make this conference possible
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
          </motion.div>

          {/* Sponsor Tiers */}
          {Object.entries(tierConfig).map(([tier, config]) => {
            const tierSponsors = getSponsorsByTier(tier as any)
            if (tierSponsors.length === 0) return null

            return (
              <motion.div
                key={tier}
                className="mb-16 last:mb-0"
                variants={itemVariants}
              >
                <div className="text-center mb-8">
                  <h3 className={`inline-block px-4 py-2 rounded-full text-lg font-semibold ${config.color}`}>
                    {config.title}
                  </h3>
                </div>

                <div className={`grid ${config.gridCols} gap-6`}>
                  {tierSponsors.map((sponsor) => (
                    <motion.div
                      key={sponsor.id}
                      className={`bg-white rounded-lg p-6 border-2 ${config.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        aria-label={`Visit ${sponsor.name} website`}
                      >
                        {/* Logo Placeholder */}
                        <div className={`w-full ${config.logoSize} bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center mb-4`}>
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>

                        <h4 className="text-lg font-semibold text-gray-900 text-center mb-2">
                          {sponsor.name}
                        </h4>
                        <p className="text-gray-600 text-sm text-center mb-4">
                          {sponsor.description}
                        </p>

                        {/* Benefits */}
                        {sponsor.benefits && sponsor.benefits.length > 0 && (
                          <div className="mt-4">
                            <h5 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h5>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {sponsor.benefits.slice(0, 3).map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <svg className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* Become a Sponsor CTA */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Become a Sponsor
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our community of forward-thinking companies and showcase your brand to 
                hundreds of tech professionals, decision-makers, and industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  View Sponsorship Packages
                </button>
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                  Contact Sponsorship Team
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sponsors