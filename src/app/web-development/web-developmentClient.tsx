'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Code, Zap, Users, Globe, Shield, Layout } from 'lucide-react'

const webDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Web Development',
    subtitle: 'Building Modern and Responsive Websites',
    description: 'Create fast, scalable, and SEO-friendly websites tailored to your business goals using the latest web technologies.',
    primaryCTA: 'Start Web Development Project',
    secondaryCTA: 'View Web Portfolio',
    heroImage: '/image/Services/web-development.jpg'
  },
  overview: {
    title: 'Comprehensive Web Development Services',
    description: 'We deliver custom web solutions with a focus on performance, usability, and scalability to help your business grow online.',
    keyPoints: [
      'Custom Website Development',
      'Responsive and Mobile-Friendly Design',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Integration',
      'Maintenance and Support'
    ]
  },
  features: {
    title: 'Web Development Features',
    items: [
      {
        icon: Code,
        title: 'Custom Code',
        description: 'Tailored web applications built to your specifications.'
      },
      {
        icon: Zap,
        title: 'Fast Performance',
        description: 'Optimized for speed and responsiveness.'
      },
      {
        icon: Layout,
        title: 'Responsive Design',
        description: 'Seamless experience across all devices.'
      },
      {
        icon: Users,
        title: 'User-Friendly Interfaces',
        description: 'Intuitive designs that enhance user engagement.'
      },
      {
        icon: Globe,
        title: 'SEO Optimized',
        description: 'Built with SEO best practices to improve visibility.'
      },
      {
        icon: Shield,
        title: 'Secure and Reliable',
        description: 'Implementing security best practices to protect your site.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Our Web Development',
    items: [
      {
        title: 'Increased Online Presence',
        description: 'Reach more customers with a professional website.'
      },
      {
        title: 'Improved User Experience',
        description: 'Engage visitors with intuitive and attractive designs.'
      },
      {
        title: 'Scalable Solutions',
        description: 'Grow your website as your business expands.'
      },
      {
        title: 'Ongoing Support',
        description: 'Reliable maintenance and updates.'
      }
    ]
  },
  process: {
    title: 'Our Web Development Process',
    steps: [
      {
        number: '01',
        title: 'Discovery & Planning',
        description: 'Understand your business needs and goals.'
      },
      {
        number: '02',
        title: 'Design & Development',
        description: 'Create custom designs and develop the website.'
      },
      {
        number: '03',
        title: 'Testing & Launch',
        description: 'Ensure quality and deploy your website.'
      },
      {
        number: '04',
        title: 'Maintenance & Growth',
        description: 'Provide ongoing support and enhancements.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'REST APIs', 'AWS', 'Docker']
  },
  stats: [
    { number: '200+', label: 'Web Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Web Experts' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Web Development Services?',
    paragraphs: [
      'Our web development team builds fast, scalable, and SEO-friendly websites tailored to your business.',
      'We focus on user experience, performance, and security to deliver high-quality solutions.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '200+' },
      { label: 'Satisfied Clients', value: '98%' },
      { label: 'Web Experts', value: '40+' },
      { label: 'Years in Business', value: '12+' }
    ]
  }
}

export default function WebDevelopmentClient() {
  return <ServicePageTemplate content={webDevelopmentContent} />
}
