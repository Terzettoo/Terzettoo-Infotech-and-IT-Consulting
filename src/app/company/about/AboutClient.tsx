'use client'

import { motion } from 'framer-motion'
import { Globe, Rocket, Shield, Sparkles } from 'lucide-react'

import TeamSection from '@/components/sections/TeamSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from "@/components/sections/TestimonialsSection";

// Main AboutClient component
export default function AboutClient() {
  return (
    <div className="bg-[#f8fafc] text-[#2b2d42]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#d90429] to-[#d90429] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:100px_100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 !text-white">Building Digital Excellence</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              We&apos;re a collective of passionate technologists dedicated to crafting exceptional digital experiences that drive real business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Story */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-[#6b7280] mb-6 leading-relaxed">
                Founded in 2025, Terzettoo began as three friends with a shared passion for solving complex problems through technology.
                Today, we&apos;ve grown into a full-service digital product agency trusted by startups and enterprises alike.
              </p>
              <p className="text-lg text-[#6b7280] leading-relaxed">
                What sets us apart is our commitment to deep technical expertise combined with a product mindset. We don&apos;t just write code -
                we partner with you to build solutions that create real business value.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/image/Company/Our_Story.png')] bg-cover bg-center opacity-95"></div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Team Section - Using the new component */}
      <TeamSection />

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#d90429] to-[#ef233c] rounded-3xl p-0.5">
            <div className="bg-white rounded-3xl p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                  The principles that guide everything we do
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex"
                >
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-[#ef233c]/10 rounded-lg flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-[#d90429]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Innovation Driven</h3>
                    <p className="text-[#6b7280]">
                      We stay at the forefront of technology, constantly exploring new approaches to solve problems in smarter ways.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="flex"
                >
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-[#ef233c]/10 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-[#d90429]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
                    <p className="text-[#6b7280]">
                      Your success is our success. We work as an extension of your team, invested in achieving your goals.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex"
                >
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-[#ef233c]/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-[#d90429]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Relentless Quality</h3>
                    <p className="text-[#6b7280]">
                      We take pride in our craft, delivering solutions built to last with clean, maintainable code.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex"
                >
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-[#ef233c]/10 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-[#d90429]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Continuous Growth</h3>
                    <p className="text-[#6b7280]">
                      We foster a learning culture where every challenge is an opportunity to improve and innovate.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

    </div>
  )
}