// src/app/company/portfolio/page.tsx
'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe, Smartphone, Database, Zap } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A comprehensive e-commerce solution with advanced inventory management and payment integration.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    features: ["Real-time inventory", "Payment processing", "Admin dashboard", "Mobile responsive"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    icon: Globe,
    results: {
      metric1: "40% increase in sales",
      metric2: "25% faster checkout",
      metric3: "99.9% uptime"
    }
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description: "Cross-platform mobile app for fitness tracking with social features and workout plans.",
    image: "/projects/fitness-app.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    features: ["Workout tracking", "Social sharing", "Progress analytics", "Custom plans"],
    liveUrl: "https://appstore.com/app",
    githubUrl: "https://github.com/example",
    icon: Smartphone,
    results: {
      metric1: "10K+ downloads",
      metric2: "4.8/5 rating",
      metric3: "80% user retention"
    }
  },
  {
    id: 3,
    title: "Restaurant Management System",
    category: "Full Stack",
    description: "Complete restaurant management solution with POS, inventory, and customer management.",
    image: "/projects/restaurant.jpg",
    technologies: ["React", "Express.js", "PostgreSQL", "Socket.io"],
    features: ["POS integration", "Inventory tracking", "Order management", "Real-time updates"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    icon: Database,
    results: {
      metric1: "60% faster orders",
      metric2: "30% cost reduction",
      metric3: "Real-time sync"
    }
  },
  {
    id: 4,
    title: "IoT Dashboard",
    category: "Web Development",
    description: "Real-time IoT device monitoring dashboard with advanced analytics and alerts.",
    image: "/projects/iot-dashboard.jpg",
    technologies: ["Vue.js", "Python", "InfluxDB", "WebSocket"],
    features: ["Real-time monitoring", "Custom alerts", "Data visualization", "Device management"],
    liveUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/example",
    icon: Zap,
    results: {
      metric1: "Real-time data",
      metric2: "99% accuracy",
      metric3: "24/7 monitoring"
    }
  }
]

const categories = ["All", "Web Development", "Mobile Development", "Full Stack"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our collection of successful projects that showcase our expertise 
            and commitment to delivering exceptional results.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <project.icon className="h-20 w-20 text-white/80" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Results:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        {project.results.metric1}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                        {project.results.metric2}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                        {project.results.metric3}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
