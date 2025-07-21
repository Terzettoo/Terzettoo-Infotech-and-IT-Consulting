// src/components/sections/CTASection.tsx
'use client'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Calendar, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  "Free consultation and project estimation",
  "Dedicated project manager and team",
  "Regular progress updates and demos",
  "Post-launch support and maintenance"
]

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-300/20 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Business Ideas?
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss your project and create something amazing together. 
              Our team of experts is ready to bring your vision to life with cutting-edge technology.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center text-blue-100"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/company/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center text-blue-100">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>hello@terzettoo.com</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Schedule a free consultation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Let's Get Started
                  </h3>
                  <p className="text-gray-600">
                    Get your free project consultation
                  </p>
                </div>

                {/* Process Steps */}
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      1
                    </div>
                    <span className="text-gray-800 font-medium">Share your idea</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-purple-50 rounded-xl">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      2
                    </div>
                    <span className="text-gray-800 font-medium">Get detailed proposal</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-green-50 rounded-xl">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      3
                    </div>
                    <span className="text-gray-800 font-medium">Start building</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Trusted by 50+ companies</div>
                    <div className="flex justify-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-xl shadow-lg flex items-center justify-center"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-400 rounded-xl shadow-lg flex items-center justify-center"
              >
                <span className="text-lg">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
