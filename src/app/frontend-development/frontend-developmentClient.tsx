'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Monitor, Code, Zap, Users, Globe, Shield } from 'lucide-react'

const frontendDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Frontend Development',
    subtitle: 'Engaging & Responsive Interfaces',
    description: 'Create visually appealing, responsive, and user-friendly frontend applications that deliver seamless user experiences.',
    primaryCTA: 'Start Frontend Project',
    secondaryCTA: 'View Frontend Work',
    heroImage: '/image/Services/frontend-development.png'
  },
  overview: {
    title: 'Comprehensive Frontend Development',
    description: 'We build custom frontend solutions using modern frameworks and technologies tailored to your business needs.',
    keyPoints: [
      'Responsive Web Design',
      'Single Page Applications',
      'Cross-Browser Compatibility',
      'Performance Optimization',
      'Accessibility Compliance',
      'Ongoing Maintenance'
    ]
  },
  features: {
    title: 'Frontend Development Features',
    items: [
      {
        icon: Code,
        title: 'Modern Frameworks',
        description: 'Expertise in React, Angular, Vue, and more.'
      },
      {
        icon: Zap,
        title: 'Fast Load Times',
        description: 'Optimized code for quick rendering and interaction.'
      },
      {
        icon: Monitor,
        title: 'Responsive Design',
        description: 'Seamless experience across devices and screen sizes.'
      },
      {
        icon: Users,
        title: 'User-Centric Interfaces',
        description: 'Designs focused on usability and engagement.'
      },
      {
        icon: Globe,
        title: 'SEO Friendly',
        description: 'Built with SEO best practices for better visibility.'
      },
      {
        icon: Shield,
        title: 'Secure Frontend',
        description: 'Implementing security best practices to protect users.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Frontend Development',
    items: [
      {
        title: 'Improved User Experience',
        description: 'Engage users with intuitive and attractive interfaces.'
      },
      {
        title: 'Increased Conversion Rates',
        description: 'Optimized designs to drive user actions.'
      },
      {
        title: 'Better SEO Performance',
        description: 'Enhance search engine rankings with SEO-friendly code.'
      },
      {
        title: 'Scalable Solutions',
        description: 'Frontend architectures that grow with your business.'
      }
    ]
  },
  process: {
    title: 'Our Frontend Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Gathering',
        description: 'Understand your frontend needs and goals.'
      },
      {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Create UI/UX designs and interactive prototypes.'
      },
      {
        number: '03',
        title: 'Development & Testing',
        description: 'Build and test the frontend application.'
      },
      {
        number: '04',
        title: 'Deployment & Support',
        description: 'Launch and provide ongoing maintenance.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Webpack', 'Tailwind CSS', 'Sass', 'Jest']
  },
  stats: [
    { number: '150+', label: 'Frontend Projects Delivered' },
    { number: '97%', label: 'Client Satisfaction' },
    { number: '3+', label: 'Frontend Experts' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Frontend Development Services?',
    paragraphs: [
      'Our frontend team creates engaging and responsive interfaces tailored to your business needs.',
      'We focus on performance, usability, and SEO to deliver impactful user experiences.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '150+' },
      { label: 'Satisfied Clients', value: '97%' },
      { label: 'Frontend Experts', value: '40+' },
      { label: 'Years in Business', value: '10+' }
    ]
  }
}

export default function FrontendDevelopmentClient() {
  return <ServicePageTemplate content={frontendDevelopmentContent} />
}
