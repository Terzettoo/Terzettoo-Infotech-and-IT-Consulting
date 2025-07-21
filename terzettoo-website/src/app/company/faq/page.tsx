// src/app/company/faq/page.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle, Clock, DollarSign, Code } from 'lucide-react'

const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    icon: MessageCircle,
    faqs: [
      {
        question: "What services does Terzettoo offer?",
        answer: "We offer comprehensive software development services including custom website development, mobile app development, API development & integration, testing & QA, DevOps & deployment, and database design & management."
      },
      {
        question: "How long has Terzettoo been in business?",
        answer: "Terzettoo has been delivering high-quality software solutions for over 5 years, with a team of experienced developers who have worked on 150+ successful projects."
      },
      {
        question: "What industries do you work with?",
        answer: "We work with diverse industries including e-commerce, healthcare, fintech, education, real estate, and startups. Our flexible approach allows us to adapt to any business domain."
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing & Payment',
    icon: DollarSign,
    faqs: [
      {
        question: "How do you price your projects?",
        answer: "Our pricing is project-based and depends on complexity, timeline, and specific requirements. We provide detailed quotes after understanding your needs through a free consultation."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans. Typically, we work with milestone-based payments: 30% upfront, 40% at mid-project, and 30% upon completion."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we believe in transparent pricing. All costs are clearly outlined in our project proposal, including development, testing, deployment, and any third-party service fees."
      }
    ]
  },
  {
    id: 'process',
    title: 'Development Process',
    icon: Code,
    faqs: [
      {
        question: "What is your development process?",
        answer: "We follow an agile development methodology: Discovery & Planning → Design & Prototyping → Development → Testing → Deployment → Maintenance. We provide regular updates throughout the process."
      },
      {
        question: "How do you ensure code quality?",
        answer: "We maintain high code quality through peer reviews, automated testing, continuous integration, and adherence to industry best practices. Every project undergoes thorough testing before delivery."
      },
      {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. Support packages are tailored to your needs."
      }
    ]
  },
  {
    id: 'timeline',
    title: 'Timeline & Delivery',
    icon: Clock,
    faqs: [
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, complex web applications take 2-4 months, and mobile apps typically take 3-6 months."
      },
      {
        question: "Can you work with tight deadlines?",
        answer: "We understand that some projects have urgent timelines. We can accommodate rush projects with proper resource allocation, though this may affect pricing."
      },
      {
        question: "How do you handle project delays?",
        answer: "We maintain buffer time in our schedules and communicate proactively about any potential delays. If delays occur due to our side, we work overtime to get back on track without additional costs."
      }
    ]
  }
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const toggleFAQ = (faqIndex: string) => {
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex)
  }

  return (
    <div className="pt-20 pb-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and pricing. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 text-left ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    <category.icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQ Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {faqCategories
                  .filter(category => category.id === selectedCategory)
                  .map((category) => (
                    <div key={category.id}>
                      <div className="flex items-center mb-8">
                        <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {category.title}
                        </h2>
                      </div>
                      
                      <div className="space-y-4">
                        {category.faqs.map((faq, index) => {
                          const faqKey = `${category.id}-${index}`
                          return (
                            <div
                              key={faqKey}
                              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                              <button
                                onClick={() => toggleFAQ(faqKey)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors"
                              >
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                                  {faq.question}
                                </h3>
                                <ChevronDown 
                                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                                    openFAQ === faqKey ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              
                              <AnimatePresence>
                                {openFAQ === faqKey && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 pb-6">
                                      <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-4"></div>
                                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {faq.answer}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-blue-100 mb-6">
            We're here to help! Get in touch with our team for personalized assistance.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  )
}
