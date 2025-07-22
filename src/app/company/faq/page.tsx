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
        answer:
          "We offer comprehensive software development services including custom website development, mobile app development, API development & integration, testing & QA, DevOps & deployment, and database design & management.",
      },
      {
        question: "How long has Terzettoo been in business?",
        answer:
          "Terzettoo has been delivering high-quality software solutions for over 5 years, with a team of experienced developers who have worked on 150+ successful projects.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work with diverse industries including e-commerce, healthcare, fintech, education, real estate, and startups. Our flexible approach allows us to adapt to any business domain.",
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Payment',
    icon: DollarSign,
    faqs: [
      {
        question: "How do you price your projects?",
        answer:
          "Our pricing is project-based and depends on complexity, timeline, and specific requirements. We provide detailed quotes after understanding your needs through a free consultation.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment plans. Typically, we work with milestone payments: 30% upfront, 40% mid-way, and 30% on delivery.",
      },
      {
        question: "Are there any hidden costs?",
        answer:
          "No, we believe in transparent pricing. All costs are clearly outlined in our project proposal, including development, testing, deployment, and any applicable third-party fees.",
      },
    ],
  },
  {
    id: 'process',
    title: 'Development Process',
    icon: Code,
    faqs: [
      {
        question: "What is your development process?",
        answer:
          "We follow an agile development methodology: Discovery → Design → Development → QA → Deployment → Maintenance, with regular communication throughout.",
      },
      {
        question: "How do you ensure code quality?",
        answer:
          "We use modern tools like CI/CD, peer review, automated testing, and follow clean code practices to ensure reliability and maintainability.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes, we provide support packages that include bug fixes, updates, monitoring, and ongoing improvements.",
      },
    ],
  },
  {
    id: 'timeline',
    title: 'Timeline & Delivery',
    icon: Clock,
    faqs: [
      {
        question: "How long does a typical project take?",
        answer:
          "Simple sites: 2–4 weeks, complex apps: 2–4 months, full platforms/mobile apps: 3–6 months, depending on scope.",
      },
      {
        question: "Can you work with tight deadlines?",
        answer:
          "Absolutely. We offer expedited delivery tailored to your project needs, timelines, and approval capacity.",
      },
      {
        question: "How do you handle project delays?",
        answer:
          "We maintain a buffer for edge cases and communicate transparently. If delay is on us, we’ll meet the deadline at no extra cost.",
      },
    ],
  },
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const toggleFAQ = (faqIndex: string) => {
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex)
  }

  return (
    <div className="pt-20 pb-16 bg-[#edf2f4] text-[#2b2d42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FAQ Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-[#8d99ae] max-w-3xl mx-auto">
            Find answers to common questions about services, process, pricing, and delivery. Can’t find what you need? Contact us directly.
          </p>
        </motion.div>

        {/* Grid with Sidebar + Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-2">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center p-3 rounded-xl transition text-left ${
                    selectedCategory === category.id
                      ? 'bg-[#d90429] text-white shadow-md'
                      : 'bg-white border border-[#8d99ae]/30 text-[#2b2d42] hover:bg-[#ef233c]/10'
                  }`}
                >
                  <category.icon className="h-5 w-5 mr-3" />
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Question List */}
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
                  .filter((c) => c.id === selectedCategory)
                  .map((category) => (
                    <div key={category.id}>
                      <div className="flex items-center mb-8">
                        <category.icon className="h-8 w-8 mr-3 text-[#d90429]" />
                        <h2 className="text-2xl font-bold">{category.title}</h2>
                      </div>

                      <div className="space-y-4">
                        {category.faqs.map((faq, idx) => {
                          const key = `${category.id}-${idx}`
                          return (
                            <div
                              key={key}
                              className="bg-white border border-[#8d99ae]/20 rounded-xl shadow-sm"
                            >
                              <button
                                onClick={() => toggleFAQ(key)}
                                className="w-full flex justify-between items-center p-6 text-left rounded-xl hover:bg-[#ef233c]/5 transition"
                              >
                                <h3 className="text-lg font-semibold pr-4">
                                  {faq.question}
                                </h3>
                                <ChevronDown
                                  className={`h-5 w-5 text-[#d90429] transition-transform ${
                                    openFAQ === key ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>

                              {/* FAQ Answer */}
                              <AnimatePresence>
                                {openFAQ === key && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden border-t border-[#8d99ae]/20"
                                  >
                                    <div className="px-6 pb-6 pt-4 text-[#8d99ae] text-sm">
                                      {faq.answer}
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-[#d90429] text-white rounded-2xl p-8 max-w-3xl mx-auto shadow-md">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="mb-5">
              We&apos;re here to help. Reach out to our team for personalized assistance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-[#d90429] font-semibold rounded-xl hover:bg-[#ef233c]/10 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
