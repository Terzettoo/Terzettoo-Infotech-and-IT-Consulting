'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Code, Zap, Users, Globe, Shield, Cpu } from 'lucide-react'

const pythonWebDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Python Web Development',
    subtitle: 'Robust and Scalable Web Solutions',
    description: 'Build powerful, scalable, and secure web applications using Python frameworks tailored to your business needs.',
    primaryCTA: 'Start Python Web Project',
    secondaryCTA: 'View Python Web Portfolio',
    heroImage: '/image/Services/python-development.jpg'
  },
  overview: {
    title: 'Comprehensive Python Web Development',
    description: 'We deliver custom Python web applications with clean architecture, high performance, and seamless integrations.',
    keyPoints: [
      'Django and Flask Frameworks',
      'RESTful API Development',
      'Database Design and Management',
      'Third-Party Integrations',
      'Security and Compliance',
      'Maintenance and Support'
    ]
  },
  features: {
    title: 'Python Web Development Features',
    items: [
      {
        icon: Code,
        title: 'Clean and Maintainable Code',
        description: 'Follow best practices for scalable and maintainable Python code.'
      },
      {
        icon: Zap,
        title: 'Fast Development Cycles',
        description: 'Agile development with rapid prototyping and iteration.'
      },
      {
        icon: Cpu,
        title: 'High Performance',
        description: 'Optimized backend for fast and reliable web applications.'
      },
      {
        icon: Users,
        title: 'User-Centric Design',
        description: 'Focus on usability and user experience.'
      },
      {
        icon: Globe,
        title: 'Global Scalability',
        description: 'Applications designed to scale with your business growth.'
      },
      {
        icon: Shield,
        title: 'Security Best Practices',
        description: 'Implement robust security measures to protect your data.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Python Web Development',
    items: [
      {
        title: 'Rapid Development',
        description: 'Accelerate time to market with efficient development.'
      },
      {
        title: 'Cost-Effective Solutions',
        description: 'Reduce development and maintenance costs.'
      },
      {
        title: 'Flexible and Scalable',
        description: 'Easily adapt and grow your web applications.'
      },
      {
        title: 'Expert Support',
        description: 'Dedicated team for ongoing maintenance and improvements.'
      }
    ]
  },
  process: {
    title: 'Our Python Web Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Gathering',
        description: 'Understand your business goals and technical needs.'
      },
      {
        number: '02',
        title: 'Design & Architecture',
        description: 'Plan scalable and maintainable system architecture.'
      },
      {
        number: '03',
        title: 'Development & Testing',
        description: 'Implement features with thorough testing and QA.'
      },
      {
        number: '04',
        title: 'Deployment & Support',
        description: 'Launch your application and provide ongoing support.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['Python', 'Django', 'Flask', 'FastAPI', 'PostgreSQL', 'MySQL', 'Docker', 'AWS']
  },
  stats: [
    { number: '80+', label: 'Python Web Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '20+', label: 'Python Experts' },
    { number: '10+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Python Web Development Services?',
    paragraphs: [
      'Our Python development team builds scalable and secure web applications tailored to your business.',
      'We emphasize clean code, performance, and user experience to deliver high-quality solutions.',
      'Our agile approach ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '80+' },
      { label: 'Satisfied Clients', value: '95%' },
      { label: 'Python Experts', value: '20+' },
      { label: 'Years in Business', value: '10+' }
    ]
  }
}

export default function PythonWebDevelopmentClient() {
  return <ServicePageTemplate content={pythonWebDevelopmentContent} />
}
