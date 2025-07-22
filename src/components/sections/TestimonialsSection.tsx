'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    rating: 5,
    text: 'Terzettoo delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is unmatched. Our sales increased by 40% within the first month!',
    project: 'E-commerce Platform',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'HealthTech Solutions',
    role: 'CTO',
    rating: 5,
    text: 'The mobile app they developed for us is simply outstanding. Clean code, beautiful UI, and perfect performance. They understood our vision and brought it to life flawlessly.',
    project: 'Healthcare Mobile App',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'FinanceFlow',
    role: 'Product Manager',
    rating: 5,
    text: 'Working with Terzettoo was a game-changer for our startup. They delivered a scalable fintech solution on time and within budget. Their expertise in API integration saved us months of development.',
    project: 'Fintech API Platform',
  },
  {
    id: 4,
    name: 'David Kim',
    company: 'EduLearn Platform',
    role: 'Founder',
    rating: 5,
    text: "Incredible team! They built our learning management system with features we didn’t even know we needed. The platform handles thousands of users seamlessly.",
    project: 'Learning Management System',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    company: 'RetailHub',
    role: 'Operations Director',
    rating: 5,
    text: 'The inventory management system they created revolutionized our operations. Real-time tracking, automated alerts, and comprehensive reporting — everything works perfectly.',
    project: 'Inventory Management System',
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
      6000
    )
    return () => clearInterval(interval)
  }, [])

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 bg-[#edf2f4] text-[#2b2d42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-[#8d99ae] max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about our work.
          </p>
        </motion.div>

        {/* Current Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white border border-[#8d99ae]/20 rounded-3xl p-8 md:p-12 shadow-xl relative">

            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="h-16 w-16 text-[#d90429]" />
            </div>

            {/* Star Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-center text-[#2b2d42] leading-relaxed mb-8 relative z-10">
              &ldquo;{current.text}&rdquo;
            </blockquote>

            {/* Client Info */}
            <div className="flex justify-center items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#d90429] text-white font-bold text-lg flex items-center justify-center">
                {current.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div>
                <div className="text-lg font-semibold text-[#2b2d42]">{current.name}</div>
                <div className="text-sm text-[#8d99ae]">
                  {current.role} at {current.company}
                </div>
                <div className="text-sm font-medium text-[#d90429]">
                  {current.project}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-[#d90429]'
                  : 'w-3 bg-white border border-[#8d99ae]/40 hover:bg-[#ef233c]/20'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
        >
          {[
            { label: 'Projects Completed', value: '150+' },
            { label: 'Happy Clients', value: '50+' },
            { label: 'Success Rate', value: '99%' },
            { label: 'Support Available', value: '24/7' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-[#2b2d42]">{stat.value}</div>
              <div className="text-sm text-[#8d99ae]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
