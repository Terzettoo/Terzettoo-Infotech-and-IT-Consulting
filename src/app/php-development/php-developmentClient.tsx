'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Code, Zap, Users, Globe, Shield, Database } from 'lucide-react'

const phpDevelopmentContent: ServiceContent = {
  hero: {
    title: 'PHP Development',
    subtitle: 'Robust & Scalable Web Solutions',
    description: 'Build secure, scalable, and high-performance web applications using PHP tailored to your business needs.',
    primaryCTA: 'Start PHP Project',
    secondaryCTA: 'View PHP Solutions',
    heroImage: '/image/Services/php-web-development.jpg'
  },
  overview: {
    title: 'Comprehensive PHP Development',
    description: 'We deliver custom PHP applications with a focus on security, scalability, and maintainability.',
    keyPoints: [
      'Custom Web Application Development',
      'API Development & Integration',
      'CMS Development',
      'Agile Development Process',
      'Performance Optimization',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: 'PHP Development Features',
    items: [
      {
        icon: Code,
        title: 'Robust Architecture',
        description: 'Design scalable and maintainable PHP applications.'
      },
      {
        icon: Zap,
        title: 'High Performance',
        description: 'Optimize applications for speed and responsiveness.'
      },
      {
        icon: Database,
        title: 'Database Integration',
        description: 'Seamless integration with MySQL, PostgreSQL, and other databases.'
      },
      {
        icon: Users,
        title: 'User-Friendly Interfaces',
        description: 'Create intuitive and engaging user experiences.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Deploy applications accessible worldwide.'
      },
      {
        icon: Shield,
        title: 'Security Best Practices',
        description: 'Implement robust security measures to protect data.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of PHP Development',
    items: [
      {
        title: 'Scalability',
        description: 'Applications that grow with your business.'
      },
      {
        title: 'Reliability',
        description: 'Stable and secure PHP solutions.'
      },
      {
        title: 'Cost Efficiency',
        description: 'Optimized development and maintenance costs.'
      },
      {
        title: 'Expert Support',
        description: 'Dedicated team for ongoing assistance.'
      }
    ]
  },
  process: {
    title: 'Our PHP Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Analysis',
        description: 'Understand business needs and technical requirements.'
      },
      {
        number: '02',
        title: 'Design & Architecture',
        description: 'Plan scalable and secure application architecture.'
      },
      {
        number: '03',
        title: 'Development & Testing',
        description: 'Agile development with continuous testing.'
      },
      {
        number: '04',
        title: 'Deployment & Maintenance',
        description: 'Launch and provide ongoing support.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['PHP', 'Laravel', 'Symfony', 'MySQL', 'PostgreSQL', 'Docker', 'AWS']
  },
  stats: [
    { number: '85+', label: 'PHP Projects Delivered' },
    { number: '93%', label: 'Client Satisfaction' },
    { number: '3+', label: 'PHP Experts' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our PHP Development Services?',
    paragraphs: [
      'Our PHP team delivers robust and scalable applications tailored to your business needs.',
      'We focus on security, performance, and maintainability to ensure long-term success.',
      'Our agile approach guarantees timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '85+' },
      { label: 'Satisfied Clients', value: '93%' },
      { label: 'PHP Experts', value: '20+' },
      { label: 'Years in Business', value: '10+' }
    ]
  }
}

export default function PhpDevelopmentClient() {
  return <ServicePageTemplate content={phpDevelopmentContent} />
}
