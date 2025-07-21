// src/components/sections/TestimonialsSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    rating: 5,
    text: "Terzettoo delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is unmatched. Our sales increased by 40% within the first month!",
    project: "E-commerce Platform"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "HealthTech Solutions",
    role: "CTO",
    rating: 5,
    text: "The mobile app they developed for us is simply outstanding. Clean code, beautiful UI, and perfect performance. They understood our vision and brought it to life flawlessly.",
    project: "Healthcare Mobile App"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "FinanceFlow",
    role: "Product Manager",
    rating: 5,
    text: "Working with Terzettoo was a game-changer for our startup. They delivered a scalable fintech solution on time and within budget. Their expertise in API integration saved us months of development.",
    project: "Fintech API Platform"
  },
  {
    id: 4,
    name: "David Kim",
    company: "EduLearn Platform",
    role: "Founder",
    rating: 5,
    text: "Incredible team! They built our learning management system with features we didn&apos;t even know we needed. The platform handles thousands of users seamlessly.",
    project: "Learning Management System"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    company: "RetailHub",
    role: "Operations Director",
    rating: 5,
    text: "The inventory management system they created revolutionized our operations. Real-time tracking, automated alerts, and comprehensive reporting - everything works perfectly.",
    project: "Inventory Management System"
  }
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our work
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="h-16 w-16 text-blue-600 dark:text-blue-400" />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 text-center leading-relaxed mb-8 relative z-10">
              &ldquo;{currentTestimonial.text}&rdquo;
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-center md:text-left">
                <div className="font-semibold text-gray-900 dark:text-white text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {currentTestimonial.role} at {currentTestimonial.company}
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {currentTestimonial.project}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">99%</div>
            <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
