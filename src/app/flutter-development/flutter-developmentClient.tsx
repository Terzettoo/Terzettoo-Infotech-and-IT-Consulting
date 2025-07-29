'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Smartphone, Code, Zap, Users, Globe, Shield } from 'lucide-react'

const flutterDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Flutter Development',
    subtitle: 'Cross-Platform Mobile Apps',
    description: 'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter.',
    primaryCTA: 'Start Flutter Project',
    secondaryCTA: 'View Flutter Apps',
    heroImage: '/image/Services/flutter-app-developent.webp'
  },
  overview: {
    title: 'Comprehensive Flutter Development',
    description: 'We deliver high-performance Flutter apps with expressive UI and native performance across platforms.',
    keyPoints: [
      'Single Codebase for Multiple Platforms',
      'Fast Development & Hot Reload',
      'Custom UI Components',
      'Integration with Backend Services',
      'Performance Optimization',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: 'Flutter Development Features',
    items: [
      {
        icon: Code,
        title: 'Cross-Platform Support',
        description: 'Develop apps for iOS, Android, web, and desktop with a single codebase.'
      },
      {
        icon: Zap,
        title: 'Hot Reload',
        description: 'See changes instantly during development for faster iterations.'
      },
      {
        icon: Smartphone,
        title: 'Expressive UI',
        description: 'Create beautiful and customizable user interfaces.'
      },
      {
        icon: Users,
        title: 'Community Support',
        description: 'Leverage a large and active Flutter developer community.'
      },
      {
        icon: Globe,
        title: 'Scalable Solutions',
        description: 'Build apps that grow with your business needs.'
      },
      {
        icon: Shield,
        title: 'Secure & Reliable',
        description: 'Implement best practices for app security and reliability.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Flutter Development',
    items: [
      {
        title: 'Faster Time to Market',
        description: 'Develop for multiple platforms simultaneously.'
      },
      {
        title: 'Cost Efficiency',
        description: 'Reduce development and maintenance costs.'
      },
      {
        title: 'High Performance',
        description: 'Deliver smooth and responsive user experiences.'
      },
      {
        title: 'Customizable UI',
        description: 'Create unique and engaging app designs.'
      }
    ]
  },
  process: {
    title: 'Our Flutter Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Gathering',
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
        description: 'Build and test the Flutter app iteratively.'
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
    items: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'GraphQL', 'Bloc', 'Provider', 'GetX']
  },
  stats: [
    { number: '80+', label: 'Flutter Apps Delivered' },
    { number: '96%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Flutter Experts' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Flutter Development Services?',
    paragraphs: [
      'Our Flutter team builds high-quality, cross-platform apps tailored to your business needs.',
      'We focus on performance, beautiful UI, and seamless user experience.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Apps Delivered', value: '80+' },
      { label: 'Satisfied Clients', value: '96%' },
      { label: 'Flutter Experts', value: '25+' },
      { label: 'Years in Business', value: '5+' }
    ]
  }
}

export default function FlutterDevelopmentClient() {
  return <ServicePageTemplate content={flutterDevelopmentContent} />
}
