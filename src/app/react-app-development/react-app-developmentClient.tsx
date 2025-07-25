'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Smartphone, Code, Zap, Shield, Users, Globe } from 'lucide-react'

const reactNativeContent: ServiceContent = {
  hero: {
    title: 'React Native Development',
    subtitle: 'Cross-Platform Mobile Excellence',
    description: 'Build beautiful, high-performance mobile apps for iOS and Android with a single codebase. Leverage React Native for faster development and consistent user experiences.',
    primaryCTA: 'Start React Native Project',
    secondaryCTA: 'View Cross-Platform Apps',
    heroImage: '⚛️'
  },
  overview: {
    title: 'React Native Cross-Platform Development',
    description: 'Maximize your development efficiency with React Native. Write once, run everywhere approach that delivers native performance while reducing development time and costs.',
    keyPoints: [
      'Single Codebase for iOS & Android',
      'Native Performance & Look',
      'Hot Reloading for Fast Development',
      'Extensive Third-Party Library Support',
      'Code Sharing with Web Applications',
      'Easy Maintenance and Updates'
    ]
  },
  features: {
    title: 'React Native Development Features',
    items: [
      {
        icon: Code,
        title: 'Write Once, Run Everywhere',
        description: 'Develop for both iOS and Android simultaneously with shared business logic and UI components.'
      },
      {
        icon: Zap,
        title: 'Hot Reloading',
        description: 'See changes instantly during development without losing app state for faster iterations.'
      },
      {
        icon: Smartphone,
        title: 'Native Performance',
        description: 'Bridge to native modules ensures your app performs like a truly native application.'
      },
      {
        icon: Users,
        title: 'Rich Ecosystem',
        description: 'Leverage thousands of npm packages and React Native libraries for rapid development.'
      },
      {
        icon: Globe,
        title: 'Code Reusability',
        description: 'Share code between mobile and web applications using React and React Native.'
      },
      {
        icon: Shield,
        title: 'Proven Stability',
        description: 'Backed by Facebook/Meta and used by companies like Uber, Instagram, and Airbnb.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of React Native Development',
    items: [
      {
        title: 'Faster Time to Market',
        description: 'Develop for both platforms simultaneously, reducing development time by up to 50%.'
      },
      {
        title: 'Cost-Effective Solution',
        description: 'Single development team and codebase significantly reduces project costs.'
      },
      {
        title: 'Easy Maintenance',
        description: 'Update both iOS and Android apps simultaneously with shared codebase.'
      },
      {
        title: 'JavaScript Expertise',
        description: 'Leverage existing web development skills and team for mobile app development.'
      }
    ]
  },
  process: {
    title: 'React Native Development Process',
    steps: [
      {
        number: '01',
        title: 'Project Setup',
        description: 'Initialize React Native project with proper folder structure and dependencies.'
      },
      {
        number: '02',
        title: 'Component Development',
        description: 'Build reusable components that work seamlessly on both platforms.'
      },
      {
        number: '03',
        title: 'Platform Integration',
        description: 'Implement platform-specific features and native module integrations.'
      },
      {
        number: '04',
        title: 'Testing & Deployment',
        description: 'Comprehensive testing on both platforms and store submissions.'
      }
    ]
  },
  technologies: {
    title: 'React Native Tech Stack',
    items: ['React Native', 'JavaScript/TypeScript', 'Redux/Context API', 'React Navigation', 'Expo', 'Native Modules', 'Jest', 'Detox']
  },
  stats: [
    { number: '50%', label: 'Faster Development' },
    { number: '90%', label: 'Code Reusability' },
    { number: '100+', label: 'React Native Apps' },
    { number: '99%', label: 'Client Satisfaction' }
  ]
}

export default function ReactAppDevelopmentClient() {
  return <ServicePageTemplate content={reactNativeContent} />
}
