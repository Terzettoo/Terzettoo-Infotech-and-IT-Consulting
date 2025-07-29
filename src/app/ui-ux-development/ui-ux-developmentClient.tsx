'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Layout, Users, Zap, Globe, Shield, Star } from 'lucide-react'

const uiUxDevelopmentContent: ServiceContent = {
  hero: {
    title: 'UI/UX Development',
    subtitle: 'Designing Engaging User Experiences',
    description: 'Create intuitive and visually appealing user interfaces that enhance user engagement and satisfaction.',
    primaryCTA: 'Start UI/UX Project',
    secondaryCTA: 'View Design Portfolio',
    heroImage: '/image/Services/UI-UX-Designer.jpg'
  },
  overview: {
    title: 'Comprehensive UI/UX Development',
    description: 'We deliver user-centered design solutions that combine aesthetics with functionality to drive business success.',
    keyPoints: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Interaction Design',
      'Usability Testing',
      'Responsive Design'
    ]
  },
  features: {
    title: 'UI/UX Development Features',
    items: [
      {
        icon: Layout,
        title: 'User-Centered Design',
        description: 'Designs focused on user needs and behaviors.'
      },
      {
        icon: Zap,
        title: 'Rapid Prototyping',
        description: 'Quick iterations to validate design concepts.'
      },
      {
        icon: Star,
        title: 'Visual Appeal',
        description: 'Attractive and brand-aligned interfaces.'
      },
      {
        icon: Users,
        title: 'Usability Testing',
        description: 'Ensure designs are intuitive and effective.'
      },
      {
        icon: Globe,
        title: 'Responsive Design',
        description: 'Seamless experience across all devices.'
      },
      {
        icon: Shield,
        title: 'Accessibility',
        description: 'Designs compliant with accessibility standards.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of UI/UX Development',
    items: [
      {
        title: 'Improved User Engagement',
        description: 'Designs that keep users coming back.'
      },
      {
        title: 'Higher Conversion Rates',
        description: 'Optimized interfaces that drive actions.'
      },
      {
        title: 'Brand Consistency',
        description: 'Visual identity that strengthens your brand.'
      },
      {
        title: 'Reduced Development Costs',
        description: 'Early validation reduces costly changes later.'
      }
    ]
  },
  process: {
    title: 'Our UI/UX Development Process',
    steps: [
      {
        number: '01',
        title: 'Research & Discovery',
        description: 'Understand user needs and business goals.'
      },
      {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Create wireframes and interactive prototypes.'
      },
      {
        number: '03',
        title: 'Testing & Feedback',
        description: 'Conduct usability testing and refine designs.'
      },
      {
        number: '04',
        title: 'Delivery & Support',
        description: 'Provide final designs and ongoing support.'
      }
    ]
  },
  technologies: {
    title: 'Tools We Use',
    items: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Zeplin', 'Principle']
  },
  stats: [
    { number: '150+', label: 'UI/UX Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Design Experts' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our UI/UX Development Services?',
    paragraphs: [
      'Our design team creates user experiences that are both beautiful and functional.',
      'We focus on user research and iterative design to ensure success.',
      'Our collaborative approach ensures your vision is realized.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '150+' },
      { label: 'Satisfied Clients', value: '98%' },
      { label: 'Design Experts', value: '25+' },
      { label: 'Years in Business', value: '10+' }
    ]
  }
}

export default function UiUxDevelopmentClient() {
  return <ServicePageTemplate content={uiUxDevelopmentContent} />
}
