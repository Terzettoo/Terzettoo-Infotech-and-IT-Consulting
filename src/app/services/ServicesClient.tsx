'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Zap,
  Shield,
  Cloud,
  Database,
  Briefcase,
  Lightbulb,
  BarChart
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Custom Website Development',
    description:
      'Responsive, fast, and SEO-optimized websites built with modern frameworks like Next.js, React, and Vue.js.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Focused',
      'Custom CMS Integration',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    features: [
      'Cross-platform',
      'Native Performance',
      'App Store Optimization',
      'Push Notifications',
    ],
  },
  {
    icon: Zap,
    title: 'API Development & Integration',
    description:
      'RESTful and GraphQL APIs with seamless third-party integrations and microservices architecture.',
    features: [
      'RESTful APIs',
      'GraphQL',
      'Third-party Integration',
      'Microservices',
    ],
  },
  {
    icon: Shield,
    title: 'Testing & Quality Assurance',
    description:
      'Comprehensive testing strategies including unit testing, integration testing, and automated QA processes.',
    features: [
      'Unit Testing',
      'Integration Testing',
      'Automated QA',
      'Performance Testing',
    ],
  },
  {
    icon: Cloud,
    title: 'DevOps & Deployment',
    description:
      'CI/CD pipelines, cloud infrastructure setup, and automated deployment solutions for scalable applications.',
    features: [
      'CI/CD Pipelines',
      'Cloud Infrastructure',
      'Automated Deployment',
      'Monitoring & Analytics',
    ],
  },
  {
    icon: Database,
    title: 'Database Design & Management',
    description:
      'Scalable database solutions with optimization, backup strategies, and data migration services.',
    features: [
      'Database Design',
      'Performance Optimization',
      'Data Migration',
      'Backup Solutions',
    ],
  },

  // --- IT Consulting Services ---
  {
    icon: Briefcase,
    title: 'IT Strategy & Consulting',
    description:
      'Expert guidance to align technology investments with business goals for long-term success.',
    features: [
      'Technology Roadmaps',
      'IT Governance',
      'Process Optimization',
      'Cost Efficiency Planning',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Digital Transformation Consulting',
    description:
      'Helping businesses modernize processes, adopt emerging technologies, and innovate effectively.',
    features: [
      'Workflow Automation',
      'Cloud Migration Strategy',
      'AI/ML Adoption',
      'Change Management',
    ],
  },
  {
    icon: BarChart,
    title: 'Business Intelligence & Analytics Consulting',
    description:
      'Data-driven decision-making through advanced analytics, BI tools, and performance tracking.',
    features: [
      'Custom BI Dashboards',
      'KPI Tracking',
      'Predictive Analytics',
      'Data Visualization',
    ],
  },
]

export default function ServicesClient() {
  return (
    <div className="pt-20 pb-16 bg-[#edf2f4] text-[#2b2d42] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-[#8d99ae] max-w-3xl mx-auto">
            We offer comprehensive software development and IT consulting services
            to help your business grow and succeed in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-[#8d99ae]/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon + Heading */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#ef233c]/10 rounded-xl mr-4">
                  <service.icon className="h-6 w-6 text-[#d90429]" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-[#8d99ae] mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 text-sm text-[#2b2d42]">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-[#d90429] rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
