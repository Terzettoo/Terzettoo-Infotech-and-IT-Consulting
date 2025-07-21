// src/components/sections/ServicesOverview.tsx
'use client'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Zap, Shield, Cloud, Database, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks',
    features: ['React/Next.js', 'Responsive Design', 'SEO Optimized']
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    features: ['React Native', 'Flutter', 'App Store Ready']
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Seamless API development and third-party service integrations',
    features: ['RESTful APIs', 'GraphQL', 'Microservices']
  },
  {
    icon: Shield,
    title: 'Testing & QA',
    description: 'Comprehensive testing strategies for reliable software delivery',
    features: ['Automated Testing', 'Performance', 'Security Audits']
  },
  {
    icon: Cloud,
    title: 'DevOps',
    description: 'Cloud infrastructure setup and deployment automation',
    features: ['CI/CD Pipelines', 'AWS/Azure', 'Docker/K8s']
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Scalable database solutions with optimization and management',
    features: ['SQL/NoSQL', 'Data Migration', 'Performance Tuning']
  }
]

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive software development services to transform your ideas into powerful digital solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                  <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview