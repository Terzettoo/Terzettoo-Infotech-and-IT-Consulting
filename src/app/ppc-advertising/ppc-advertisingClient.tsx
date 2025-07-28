'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { DollarSign, BarChart2, Zap, Users, Globe, Shield } from 'lucide-react'

const ppcAdvertisingContent: ServiceContent = {
  hero: {
    title: 'PPC Advertising',
    subtitle: 'Targeted & Effective Campaigns',
    description: 'Drive immediate traffic and conversions with expertly managed pay-per-click advertising campaigns.',
    primaryCTA: 'Start PPC Campaign',
    secondaryCTA: 'View Our Work',
    heroImage: '/image/Services/ppc-managemnt.jpg'
  },
  overview: {
    title: 'Comprehensive PPC Advertising Services',
    description: 'We create and manage PPC campaigns across platforms to maximize ROI and reach your target audience effectively.',
    keyPoints: [
      'Google Ads Management',
      'Bing Ads Management',
      'Social Media PPC',
      'Keyword Research & Optimization',
      'Ad Copywriting & Design',
      'Performance Tracking & Reporting'
    ]
  },
  features: {
    title: 'PPC Advertising Features',
    items: [
      {
        icon: DollarSign,
        title: 'Targeted Campaigns',
        description: 'Reach the right audience with precise targeting options.'
      },
      {
        icon: BarChart2,
        title: 'Data-Driven Optimization',
        description: 'Continuous monitoring and optimization for best results.'
      },
      {
        icon: Zap,
        title: 'Quick Results',
        description: 'Drive immediate traffic and leads to your business.'
      },
      {
        icon: Users,
        title: 'Audience Segmentation',
        description: 'Tailor ads to specific customer segments.'
      },
      {
        icon: Globe,
        title: 'Multi-Platform Reach',
        description: 'Advertise across search engines and social media.'
      },
      {
        icon: Shield,
        title: 'Budget Management',
        description: 'Optimize ad spend for maximum ROI.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of PPC Advertising',
    items: [
      {
        title: 'Increased Traffic',
        description: 'Attract more visitors to your website.'
      },
      {
        title: 'Higher Conversion Rates',
        description: 'Turn visitors into customers with targeted ads.'
      },
      {
        title: 'Measurable ROI',
        description: 'Track and analyze campaign performance.'
      },
      {
        title: 'Flexible Budgeting',
        description: 'Control your ad spend effectively.'
      }
    ]
  },
  process: {
    title: 'Our PPC Advertising Process',
    steps: [
      {
        number: '01',
        title: 'Campaign Planning',
        description: 'Define goals and target audience.'
      },
      {
        number: '02',
        title: 'Ad Creation',
        description: 'Develop compelling ad copy and creatives.'
      },
      {
        number: '03',
        title: 'Launch & Monitor',
        description: 'Launch campaigns and monitor performance.'
      },
      {
        number: '04',
        title: 'Optimization & Reporting',
        description: 'Optimize campaigns and provide detailed reports.'
      }
    ]
  },
  technologies: {
    title: 'Platforms We Use',
    items: ['Google Ads', 'Bing Ads', 'Facebook Ads', 'LinkedIn Ads', 'Google Analytics']
  },
  stats: [
    { number: '200+', label: 'PPC Campaigns Managed' },
    { number: '90%', label: 'Client Satisfaction' },
    { number: '15+', label: 'PPC Experts' },
    { number: '7+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our PPC Advertising Services?',
    paragraphs: [
      'Our PPC team delivers targeted campaigns that drive immediate results.',
      'We focus on data-driven optimization to maximize your ROI.',
      'Our transparent reporting keeps you informed every step of the way.'
    ],
    facts: [
      { label: 'Campaigns Managed', value: '200+' },
      { label: 'Satisfied Clients', value: '90%' },
      { label: 'PPC Experts', value: '15+' },
      { label: 'Years in Business', value: '7+' }
    ]
  }
}

export default function PpcAdvertisingClient() {
  return <ServicePageTemplate content={ppcAdvertisingContent} />
}
