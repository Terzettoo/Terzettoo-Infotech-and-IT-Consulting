'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink, Globe, Smartphone, Database, Zap,
  ArrowRight, Filter
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import TestimonialsSection from "@/components/sections/TestimonialsSection";


const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description:
      'A comprehensive e-commerce solution with advanced inventory management and payment integration.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    features: [
      'Real-time inventory',
      'Payment processing',
      'Admin dashboard',
      'Mobile responsive',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    icon: Globe,
    results: {
      metric1: '40% increase in sales',
      metric2: '25% faster checkout',
      metric3: '99.9% uptime',
    },
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description:
      'Cross-platform mobile app for fitness tracking with social features and workout plans.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    features: ['Workout tracking', 'Social sharing', 'Progress analytics', 'Custom plans'],
    liveUrl: 'https://appstore.com/app',
    githubUrl: 'https://github.com/example',
    icon: Smartphone,
    results: {
      metric1: '10K+ downloads',
      metric2: '4.8/5 rating',
      metric3: '80% user retention',
    },
  },
  {
    id: 3,
    title: 'Restaurant Management System',
    category: 'Full Stack',
    description:
      'Complete restaurant management solution with POS, inventory, and customer management.',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Socket.io'],
    features: [
      'POS integration',
      'Inventory tracking',
      'Order management',
      'Real-time updates',
    ],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    icon: Database,
    results: {
      metric1: '60% faster orders',
      metric2: '30% cost reduction',
      metric3: 'Real-time sync',
    },
  },
  {
    id: 4,
    title: 'IoT Dashboard',
    category: 'Web Development',
    description:
      'Real-time IoT device monitoring dashboard with advanced analytics and alerts.',
    technologies: ['Vue.js', 'Python', 'InfluxDB', 'WebSocket'],
    features: [
      'Real-time monitoring',
      'Custom alerts',
      'Data visualization',
      'Device management',
    ],
    liveUrl: 'https://dashboard.example.com',
    githubUrl: 'https://github.com/example',
    icon: Zap,
    results: {
      metric1: 'Real-time data',
      metric2: '99% accuracy',
      metric3: '24/7 monitoring',
    },
  },
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Full Stack'];

export default function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // This effect is intentionally left empty as it was only used for the scrolled state
    // which has been removed
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className=" bg-[#d90429] text-[#2b2d42]">

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden h-[vh] max-h-[800px]">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/Portfolio/Project_Hero.webp" // Replace with your image path
            alt="Digital technology background"
            fill
            className="object-cover"
            priority // Important for above-the-fold images
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for better text contrast */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d90429]/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto !text-white">
              Transforming Ideas into <span className="text-[#ffffff]">Digital Success</span>
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              Explore our collection of successful projects that showcase our expertise, innovation, and dedication to delivering exceptional digital experiences.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex justify-center gap-4"
            >
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex cursor-pointer items-center px-6 py-3 bg-[#d90429] text-white rounded-lg font-medium hover:bg-[#ef233c] transition-all shadow-lg shadow-[#d90429]/30"
              >
                View Our Work
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-white/90 border border-[#8d99ae]/30 text-[#2b2d42] rounded-lg font-medium hover:border-[#d90429]/50 hover:text-[#d90429] transition">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#d90429]">Featured Projects</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#8d99ae]">
              Discover our handpicked selection of projects that showcase our expertise across different domains.
            </p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-16"
          >
            <div className="inline-flex bg-[#edf2f4] border border-[#8d99ae]/20 rounded-xl p-1">
              <div className="flex items-center px-4 text-[#8d99ae]">
                <Filter className="h-4 w-4 mr-2" />
                <span>Filter by:</span>
              </div>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category
                    ? 'bg-[#d90429] text-white shadow-md'
                    : 'text-[#2b2d42] hover:bg-[#ef233c]/10'
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid - Now 3 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-[#edf2f4] rounded-2xl overflow-hidden border border-[#8d99ae]/20 transition-all duration-300 hover:shadow-xl hover:border-[#d90429]/30 flex flex-col"
              >
                {/* Project Header */}
                <div className="relative h-48 bg-gradient-to-r from-[#d90429] to-[#ef233c] flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-white opacity-20" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white relative z-10 px-4 text-center">
                    {project.title}
                  </h3>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  {/* Description */}
                  <p className="text-[#8d99ae] mb-6 flex-grow">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={`${project.id}-${tech}`}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white text-[#d90429] text-sm rounded-lg border border-[#8d99ae]/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-[#2b2d42] flex items-center">
                      <span className="w-2 h-2 bg-[#d90429] rounded-full mr-2"></span>
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 text-sm text-[#2b2d42]">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#d90429] rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Single Live Demo Button */}
                  <div className="mt-auto pt-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#d90429] !text-white rounded-lg hover:bg-[#ef233c] transition"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-t from-[#d90429] to-[#ef233c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Let&apos;s collaborate to create something amazing. Our team is ready to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#d90429] rounded-lg font-bold hover:bg-gray-100 transition cursor-pointer text-center"
              >
                Get a Free Consultation
              </motion.a>
            </Link>

            <Link href="/services" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white !text-white rounded-lg font-bold hover:bg-white/10 transition cursor-pointer text-center"
              >
                View Our Services
              </motion.a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}