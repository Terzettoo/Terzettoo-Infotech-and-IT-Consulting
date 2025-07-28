'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Tablet, Code, Zap, Users, Globe, Shield } from 'lucide-react'

const ipadAppDevelopmentContent: ServiceContent = {
  hero: {
    title: 'iPad App Development',
    subtitle: 'Custom iPad Applications',
    description: 'Develop tailored iPad applications with seamless performance and intuitive user experience for all iPad models.',
    primaryCTA: 'Start iPad Project',
    secondaryCTA: 'View iPad Apps',
    heroImage: '/image/Services/ipad-app-development.jpg'
  },
  overview: {
    title: 'Comprehensive iPad App Development',
    description: 'We build scalable and secure iPad apps tailored to your business needs, ensuring high performance and user satisfaction.',
    keyPoints: [
      'Custom iPad App Development',
      'User-Centric Design',
      'Robust Backend Integration',
      'Agile Development Process',
      'App Store Deployment',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: 'iPad App Development Features',
    items: [
      {
        icon: Code,
        title: 'Native iPad Development',
        description: 'Build apps using Swift and Objective-C for optimal performance.'
      },
      {
        icon: Zap,
        title: 'Fast & Responsive',
        description: 'Optimized for smooth and responsive user experience.'
      },
      {
        icon: Tablet,
        title: 'Device Compatibility',
        description: 'Support for all iPad models.'
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
    title: 'Benefits of iPad App Development',
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
    title: 'Our iPad App Development Process',
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
        description: 'Build and test the iPad app iteratively.'
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
    { number: '70+', label: 'iPad Apps Delivered' },
    { number: '93%', label: 'Client Satisfaction' },
    { number: '15+', label: 'iPad Experts' },
    { number: '6+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our iPad App Development Services?',
    paragraphs: [
      'Our iPad development team delivers high-quality apps tailored to your business needs.',
      'We focus on performance, user experience, and App Store compliance.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Apps Delivered', value: '70+' },
      { label: 'Satisfied Clients', value: '93%' },
      { label: 'iPad Experts', value: '15+' },
      { label: 'Years in Business', value: '6+' }
    ]
  }
}

export default function IpadAppDevelopmentClient() {
  return <ServicePageTemplate content={ipadAppDevelopmentContent} />
}
