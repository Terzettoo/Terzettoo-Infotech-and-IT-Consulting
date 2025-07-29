'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Coffee, Code, Zap, Users, Globe, Shield } from 'lucide-react'

const javaDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Java Development',
    subtitle: 'Robust & Scalable Java Applications',
    description: 'Build secure, scalable, and high-performance Java applications tailored to your business needs.',
    primaryCTA: 'Start Java Project',
    secondaryCTA: 'View Java Solutions',
    heroImage: '/image/Services/java-development.jpeg'
  },
  overview: {
    title: 'Comprehensive Java Development',
    description: 'We deliver custom Java applications with a focus on security, scalability, and maintainability.',
    keyPoints: [
      'Custom Java Application Development',
      'API Development & Integration',
      'Cloud & On-Premises Solutions',
      'Agile Development Process',
      'Performance Optimization',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: 'Java Development Features',
    items: [
      {
        icon: Code,
        title: 'Robust Architecture',
        description: 'Design scalable and maintainable Java applications.'
      },
      {
        icon: Zap,
        title: 'High Performance',
        description: 'Optimize applications for speed and responsiveness.'
      },
      {
        icon: Coffee,
        title: 'Enterprise Solutions',
        description: 'Build enterprise-grade applications with Java EE and Spring.'
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
    title: 'Benefits of Java Development',
    items: [
      {
        title: 'Scalability',
        description: 'Applications that grow with your business.'
      },
      {
        title: 'Reliability',
        description: 'Stable and secure Java solutions.'
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
    title: 'Our Java Development Process',
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
    items: ['Java SE', 'Java EE', 'Spring Framework', 'Hibernate', 'Maven', 'Docker', 'Kubernetes', 'AWS']
  },
  stats: [
    { number: '90+', label: 'Java Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Java Experts' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Java Development Services?',
    paragraphs: [
      'Our Java team delivers robust and scalable applications tailored to your business needs.',
      'We focus on security, performance, and maintainability to ensure long-term success.',
      'Our agile approach guarantees timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '90+' },
      { label: 'Satisfied Clients', value: '95%' },
      { label: 'Java Experts', value: '30+' },
      { label: 'Years in Business', value: '12+' }
    ]
  }
}

export default function JavaDevelopmentClient() {
  return <ServicePageTemplate content={javaDevelopmentContent} />
}
