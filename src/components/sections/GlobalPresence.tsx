'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const countries = [
  { name: 'India', code: 'in' },
  { name: 'USA', code: 'us' },
  { name: 'South Africa', code: 'za' },
  { name: 'Pakistan', code: 'pk' },
  { name: 'Bangladesh', code: 'bd' },
  { name: 'UAE', code: 'ae' },
  { name: 'China', code: 'cn' },
  { name: 'Australia', code: 'au' },
  { name: 'Ireland', code: 'ie' },
  { name: 'Denmark', code: 'dk' },
  { name: 'Spain', code: 'es' },
  { name: 'Italy', code: 'it' },
  { name: 'Fiji', code: 'fj' },
]

export default function GlobalPresence() {
  // We duplicate the list to create the seamless infinite loop effect
  const doubledCountries = [...countries, ...countries]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#d90429]/10 rounded-full mb-4">
            <span className="text-[#d90429] font-medium text-sm">Trusted Worldwide</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b2d42] mb-4">
            Delivering Solutions Across 10+ Countries
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            From startups to enterprises, our clients trust us to deliver world-class software solutions — no matter where they are.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling marquee strip */}
      <div className="relative w-full">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {doubledCountries.map((country, index) => (
            <div
              key={`${country.code}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center mx-6 md:mx-10 group"
            >
              <div className="w-20 h-14 md:w-24 md:h-16 relative rounded-lg overflow-hidden shadow-md border border-gray-100 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Image
                  src={`https://flagcdn.com/w320/${country.code}.png`}
                  alt={`${country.name} flag`}
                  fill
                  className="object-cover"
                  sizes="96px"
                  unoptimized
                />
              </div>
              <span className="mt-3 text-xs md:text-sm font-medium text-[#6b7280] group-hover:text-[#d90429] transition-colors duration-300">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
