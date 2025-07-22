'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company?: string
  service: string
  budget: string
  message: string
}

const services = [
  'Custom Website Development',
  'Mobile App Development',
  'API Development & Integration',
  'Testing & Quality Assurance',
  'DevOps & Deployment',
  'Database Design & Management',
  'Consulting Services',
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000 - $100,000',
  'Above $100,000',
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (_data: FormData) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="pt-20 pb-16 bg-[#edf2f4] text-[#2b2d42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-[#8d99ae] max-w-3xl mx-auto">
            Let&apos;s discuss how we can help you achieve your business goals with our software solutions.
          </p>
        </motion.div>

        {/* Form & Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8">Let&apos;s Start a Conversation</h2>
            <div className="space-y-6 text-[#2b2d42]">
              {[
                {
                  Icon: Mail,
                  title: 'Email Us',
                  lines: ['hello@terzettoo.com', 'support@terzettoo.com'],
                  bg: '#ef233c1a',
                },
                {
                  Icon: Phone,
                  title: 'Call Us',
                  lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
                  bg: '#d904291a',
                },
                {
                  Icon: MapPin,
                  title: 'Visit Us',
                  lines: ['123 Innovation Street', 'Tech District, TC 12345', 'United States'],
                  bg: '#8d99ae1a',
                },
                {
                  Icon: Clock,
                  title: 'Business Hours',
                  lines: ['Mon – Fri: 9am – 6pm', 'Sat: 10am – 4pm', 'Sunday: Closed'],
                  bg: '#fddc8a',
                },
              ].map(({ Icon, title, lines, bg }, i) => (
                <div key={i} className="flex items-start">
                  <div className="p-3 rounded-xl" style={{ background: bg }}>
                    <Icon className="h-6 w-6 text-[#d90429]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    {lines.map((line, idx) => (
                      <p key={idx} className="text-sm text-[#8d99ae]">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-[#8d99ae]">
                  We&apos;ve received your message and will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-[#2b2d42]">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                  <input
                    {...register('company')}
                    className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                    placeholder="Your Company Name"
                  />
                </div>

                {/* Service & Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed *</label>
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-sm text-red-600 mt-1">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Budget *</label>
                    <select
                      {...register('budget', { required: 'Please select a budget range' })}
                      className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    {errors.budget && <p className="text-sm text-red-600 mt-1">{errors.budget.message}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    {...register('message', { required: 'Please describe your project' })}
                    rows={6}
                    className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                  {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-4 bg-[#d90429] text-white font-semibold rounded-xl hover:bg-[#ef233c] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
