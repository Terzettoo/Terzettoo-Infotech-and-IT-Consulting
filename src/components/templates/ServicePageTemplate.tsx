// src/components/templates/ServicePageTemplate.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

export interface ServiceContent {
  hero: {
    title: string
    subtitle: string
    description: string
    primaryCTA: string
    secondaryCTA: string
    heroImage?: string
  }
  overview: {
    title: string
    description: string
    keyPoints: string[]
  }
  features: {
    title: string
    items: Array<{
      icon: LucideIcon
      title: string
      description: string
    }>
  }
  benefits: {
    title: string
    items: Array<{
      title: string
      description: string
    }>
  }
  process: {
    title: string
    steps: Array<{
      number: string
      title: string
      description: string
    }>
  }
  technologies?: {
    title: string
    items: string[]
  }
  stats: Array<{
    number: string
    label: string
  }>
  writtenContent?: {
    title: string
    paragraphs: string[]
    facts: Array<{
      label: string
      value: string
    }>
  }
  faq?: Array<{
    question: string
    answer: string
  }>
}

interface ServicePageTemplateProps {
  content: ServiceContent
}

export default function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  return (
    <div className="bg-[#edf2f4] text-[#2b2d42]">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#edf2f4] to-[#d1d9db]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {content.hero.title}
              </h1>
              <h2 className="text-2xl text-[#d90429] font-semibold mb-4">
                {content.hero.subtitle}
              </h2>
              <p className="text-xl text-[#8d99ae] mb-8 leading-relaxed">
                {content.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#d90429] text-white font-bold rounded-xl hover:bg-[#ef233c] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {content.hero.primaryCTA}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/company/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#d90429] text-[#d90429] font-semibold rounded-xl hover:bg-[#ef233c]/10 transition-all duration-300"
                >
                  {content.hero.secondaryCTA}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="w-full h-64 bg-gradient-to-br from-[#d90429] to-[#ef233c] rounded-xl flex items-center justify-center text-white text-6xl font-bold">
                  {content.hero.heroImage || '🚀'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Written Content & Facts Section */}
      {content.writtenContent && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-center">{content.writtenContent.title}</h2>
              {content.writtenContent.paragraphs.map((para, idx) => (
                <p key={idx} className="text-lg text-[#8d99ae] mb-4 max-w-4xl mx-auto leading-relaxed">
                  {para}
                </p>
              ))}
              <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                {content.writtenContent.facts.map((fact, idx) => (
                  <div key={idx} className="bg-[#edf2f4] p-6 rounded-lg shadow-md text-center">
                    <div className="text-3xl font-bold text-[#d90429] mb-2">{fact.value}</div>
                    <div className="text-[#2b2d42] font-semibold">{fact.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {content.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-[#d90429] mb-2">{stat.number}</div>
                <div className="text-[#8d99ae]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{content.overview.title}</h2>
            <p className="text-xl text-[#8d99ae] max-w-3xl mx-auto mb-8">
              {content.overview.description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.overview.keyPoints.map((point, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#d90429] mr-3 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{content.features.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#edf2f4] p-8 rounded-2xl"
              >
                <div className="p-3 bg-[#ef233c]/10 rounded-xl w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-[#d90429]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[#8d99ae]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{content.process.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#d90429] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#8d99ae]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {content.technologies && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-8">{content.technologies.title}</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {content.technologies.items.map((tech, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-[#ef233c]/10 text-[#d90429] rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{content.benefits.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-[#8d99ae]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#d90429] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss your requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#d90429] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/company/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
