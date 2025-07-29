'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Code, Zap, Users, Globe, Shield, Monitor } from 'lucide-react'

const reactJsDevelopmentContent: ServiceContent = {
  hero: {
    title: 'React JS Development',
    subtitle: 'Dynamic & Interactive Web Applications',
    description: 'Build fast, scalable, and interactive web applications using React JS with modern development practices.',
    primaryCTA: 'Start React JS Project',
    secondaryCTA: 'View React JS Work',
    heroImage: '/image/Services/ReactJs-Web-App-Development.jpg'
  },
  overview: {
    title: 'Comprehensive React JS Development',
    description: 'We deliver custom React JS applications with a focus on performance, scalability, and user experience.',
    keyPoints: [
      'Component-Based Architecture',
      'Reusable UI Components',
      'State Management Solutions',
      'Performance Optimization',
      'SEO-Friendly Development',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: 'React JS Development Features',
    items: [
      {
        icon: Code,
        title: 'Modern JavaScript',
        description: 'Utilize ES6+ features for clean and efficient code.'
      },
      {
        icon: Zap,
        title: 'Fast Rendering',
        description: 'Virtual DOM for high-performance UI updates.'
      },
      {
        icon: Monitor,
        title: 'Responsive Design',
        description: 'Ensure seamless experience across devices.'
      },
      {
        icon: Users,
        title: 'User-Friendly Interfaces',
        description: 'Create intuitive and engaging user experiences.'
      },
      {
        icon: Globe,
        title: 'SEO Optimization',
        description: 'Build SEO-friendly React applications.'
      },
      {
        icon: Shield,
        title: 'Secure Applications',
        description: 'Implement best practices for web security.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of React JS Development',
    items: [
      {
        title: 'Improved Performance',
        description: 'Fast and efficient web applications.'
      },
      {
        title: 'Scalability',
        description: 'Applications that grow with your business.'
      },
      {
        title: 'Better SEO',
        description: 'Enhanced search engine visibility.'
      },
      {
        title: 'Maintainability',
        description: 'Clean and modular codebase.'
      }
    ]
  },
  process: {
    title: 'Our React JS Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Gathering',
        description: 'Understand your web app goals and needs.'
      },
      {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Create UI/UX designs and interactive prototypes.'
      },
      {
        number: '03',
        title: 'Development & Testing',
        description: 'Build and test the React JS application.'
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
    items: ['React', 'Redux', 'TypeScript', 'Next.js', 'Webpack', 'Jest', 'React Router']
  },
  stats: [
    { number: '120+', label: 'React JS Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'React Experts' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our React JS Development Services?',
    paragraphs: [
      'Our React JS team builds fast, scalable, and SEO-friendly web applications tailored to your business needs.',
      'We focus on performance, usability, and maintainability to deliver impactful user experiences.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '120+' },
      { label: 'Satisfied Clients', value: '98%' },
      { label: 'React Experts', value: '35+' },
      { label: 'Years in Business', value: '8+' }
    ]
  }
}

export default function ReactJsDevelopmentClient() {
  return <ServicePageTemplate content={reactJsDevelopmentContent} />
}
