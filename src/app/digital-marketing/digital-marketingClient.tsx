'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Megaphone, BarChart2, Zap, Users, Globe, Shield } from 'lucide-react'

const digitalMarketingContent: ServiceContent = {
  hero: {
    title: 'Digital Marketing',
    subtitle: 'Grow Your Online Presence',
    description: 'Comprehensive digital marketing services to increase brand awareness, drive traffic, and boost conversions.',
    primaryCTA: 'Start Digital Marketing',
    secondaryCTA: 'View Our Campaigns',
    heroImage: '📣'
  },
  overview: {
    title: 'Comprehensive Digital Marketing Services',
    description: 'We offer tailored digital marketing strategies including SEO, PPC, social media, and content marketing to grow your business.',
    keyPoints: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing',
      'Content Marketing & Strategy',
      'Email Marketing',
      'Analytics & Reporting'
    ]
  },
  features: {
    title: 'Digital Marketing Features',
    items: [
      {
        icon: Megaphone,
        title: 'SEO Optimization',
        description: 'Improve your website ranking and visibility on search engines.'
      },
      {
        icon: BarChart2,
        title: 'Data-Driven Campaigns',
        description: 'Leverage analytics to optimize marketing efforts.'
      },
      {
        icon: Zap,
        title: 'PPC Advertising',
        description: 'Targeted ads to drive immediate traffic and leads.'
      },
      {
        icon: Users,
        title: 'Social Media Engagement',
        description: 'Build and engage your audience on social platforms.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Expand your brand presence worldwide.'
      },
      {
        icon: Shield,
        title: 'Brand Protection',
        description: 'Maintain a positive online reputation.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Digital Marketing',
    items: [
      {
        title: 'Increased Traffic',
        description: 'Attract more visitors to your website.'
      },
      {
        title: 'Higher Conversion Rates',
        description: 'Turn visitors into customers with targeted campaigns.'
      },
      {
        title: 'Improved Brand Awareness',
        description: 'Build a strong and recognizable brand.'
      },
      {
        title: 'Measurable Results',
        description: 'Track and analyze campaign performance.'
      }
    ]
  },
  process: {
    title: 'Our Digital Marketing Process',
    steps: [
      {
        number: '01',
        title: 'Strategy Development',
        description: 'Create a customized marketing plan.'
      },
      {
        number: '02',
        title: 'Campaign Execution',
        description: 'Implement marketing campaigns across channels.'
      },
      {
        number: '03',
        title: 'Monitoring & Optimization',
        description: 'Analyze results and optimize for better performance.'
      },
      {
        number: '04',
        title: 'Reporting',
        description: 'Provide detailed performance reports.'
      }
    ]
  },
  technologies: {
    title: 'Tools & Platforms',
    items: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'HubSpot', 'SEMrush', 'Mailchimp']
  },
  stats: [
    { number: '500+', label: 'Campaigns Delivered' },
    { number: '92%', label: 'Client Satisfaction' },
    { number: '30+', label: 'Marketing Experts' },
    { number: '6+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Digital Marketing Services?',
    paragraphs: [
      'Our digital marketing team crafts data-driven strategies that deliver measurable growth.',
      'We focus on creating targeted campaigns that engage your audience and drive conversions.',
      'Our continuous optimization ensures your marketing efforts stay effective and relevant.'
    ],
    facts: [
      { label: 'Campaigns Delivered', value: '500+' },
      { label: 'Satisfied Clients', value: '92%' },
      { label: 'Marketing Experts', value: '30+' },
      { label: 'Years in Business', value: '6+' }
    ]
  }
}

export default function DigitalMarketingClient() {
  return <ServicePageTemplate content={digitalMarketingContent} />
}
