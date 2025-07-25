'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Smartphone, Code, Zap, Users, Globe, Shield } from 'lucide-react'

const iosDevelopmentContent: ServiceContent = {
  hero: {
    title: 'iOS Development',
    subtitle: 'Custom iOS Applications',
    description: 'Develop tailored iOS applications with seamless performance and intuitive user experience for all Apple devices.',
    primaryCTA: 'Start iOS Development',
    secondaryCTA: 'View iOS Projects',
    heroImage: '🍎'
  },
  overview: {
    title: 'Comprehensive iOS Development',
    description: 'We build scalable and secure iOS apps tailored to your business needs, ensuring high performance and user satisfaction.',
    keyPoints: [
      'Custom iOS App Development',
      'User-Centric Design',
      'Robust Backend Integration',
      'Agile Development Process',
      'App Store Deployment',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: 'iOS Development Features',
    items: [
      {
        icon: Code,
        title: 'Native iOS Development',
        description: 'Build apps using Swift and Objective-C for optimal performance.'
      },
      {
        icon: Zap,
        title: 'Fast & Responsive',
        description: 'Optimized for smooth and responsive user experience.'
      },
      {
        icon: Smartphone,
        title: 'Device Compatibility',
        description: 'Support for all Apple devices including iPhone and iPad.'
      },
      {
        icon: Users,
        title: 'User-Friendly Interfaces',
        description: 'Intuitive designs that enhance user engagement.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Deploy apps to a worldwide audience via the App Store.'
      },
      {
        icon: Shield,
        title: 'Security & Privacy',
        description: 'Implement best practices to protect user data.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of iOS Development',
    items: [
      {
        title: 'High Performance',
        description: 'Deliver smooth and reliable app experiences.'
      },
      {
        title: 'Enhanced User Engagement',
        description: 'Create apps that users love and trust.'
      },
      {
        title: 'App Store Optimization',
        description: 'Increase app visibility and downloads.'
      },
      {
        title: 'Expert Support',
        description: 'Ongoing maintenance and updates.'
      }
    ]
  },
  process: {
    title: 'Our iOS Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Analysis',
        description: 'Understand your app goals and requirements.'
      },
      {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Create UI/UX designs and interactive prototypes.'
      },
      {
        number: '03',
        title: 'Development & Testing',
        description: 'Build and test the iOS app iteratively.'
      },
      {
        number: '04',
        title: 'Deployment & Support',
        description: 'Launch the app and provide ongoing maintenance.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['Swift', 'Objective-C', 'Xcode', 'Cocoa Touch', 'Firebase', 'Realm', 'TestFlight']
  },
  stats: [
    { number: '85+', label: 'iOS Apps Delivered' },
    { number: '94%', label: 'Client Satisfaction' },
    { number: '18+', label: 'iOS Experts' },
    { number: '7+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our iOS Development Services?',
    paragraphs: [
      'Our iOS development team delivers high-quality apps tailored to your business needs.',
      'We focus on performance, user experience, and App Store compliance.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Apps Delivered', value: '85+' },
      { label: 'Satisfied Clients', value: '94%' },
      { label: 'iOS Experts', value: '18+' },
      { label: 'Years in Business', value: '7+' }
    ]
  }
}

export default function IosDevelopmentClient() {
  return <ServicePageTemplate content={iosDevelopmentContent} />
}
