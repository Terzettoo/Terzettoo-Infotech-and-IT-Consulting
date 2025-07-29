'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Users, BarChart2, Zap, Globe, Shield, MessageCircle } from 'lucide-react'

const socialMediaMarketingContent: ServiceContent = {
  hero: {
    title: 'Social Media Marketing',
    subtitle: 'Engage & Grow Your Audience',
    description: 'Strategic social media marketing to build brand awareness, engage your audience, and drive conversions.',
    primaryCTA: 'Start Social Media Campaign',
    secondaryCTA: 'View Our Work',
    heroImage: '/image/Services/Social-media-marketing.png'
  },
  overview: {
    title: 'Comprehensive Social Media Marketing',
    description: 'We create tailored social media strategies across platforms to maximize your brand’s reach and engagement.',
    keyPoints: [
      'Platform-Specific Strategies',
      'Content Creation & Curation',
      'Community Management',
      'Paid Social Advertising',
      'Analytics & Reporting',
      'Influencer Partnerships'
    ]
  },
  features: {
    title: 'Social Media Marketing Features',
    items: [
      {
        icon: Users,
        title: 'Audience Engagement',
        description: 'Build meaningful connections with your target audience.'
      },
      {
        icon: BarChart2,
        title: 'Performance Analytics',
        description: 'Track and optimize social media campaigns.'
      },
      {
        icon: Zap,
        title: 'Content Strategy',
        description: 'Create compelling content tailored to each platform.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Expand your brand presence worldwide.'
      },
      {
        icon: MessageCircle,
        title: 'Community Management',
        description: 'Manage and grow your online communities.'
      },
      {
        icon: Shield,
        title: 'Brand Protection',
        description: 'Maintain a positive online reputation.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Social Media Marketing',
    items: [
      {
        title: 'Increased Brand Awareness',
        description: 'Reach a wider audience and build brand recognition.'
      },
      {
        title: 'Higher Engagement',
        description: 'Connect with customers through interactive content.'
      },
      {
        title: 'Lead Generation',
        description: 'Attract and convert potential customers.'
      },
      {
        title: 'Improved Customer Loyalty',
        description: 'Build lasting relationships with your audience.'
      }
    ]
  },
  process: {
    title: 'Our Social Media Marketing Process',
    steps: [
      {
        number: '01',
        title: 'Strategy Development',
        description: 'Create a customized social media plan.'
      },
      {
        number: '02',
        title: 'Content Creation',
        description: 'Develop engaging content for your platforms.'
      },
      {
        number: '03',
        title: 'Campaign Execution',
        description: 'Launch and manage social media campaigns.'
      },
      {
        number: '04',
        title: 'Monitoring & Reporting',
        description: 'Track performance and optimize strategies.'
      }
    ]
  },
  technologies: {
    title: 'Tools & Platforms',
    items: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Hootsuite', 'Buffer', 'Google Analytics']
  },
  stats: [
    { number: '300+', label: 'Social Campaigns Delivered' },
    { number: '94%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Social Media Experts' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Social Media Marketing Services?',
    paragraphs: [
      'Our social media team crafts data-driven strategies that engage your audience and grow your brand.',
      'We focus on creating compelling content and managing communities effectively.',
      'Our transparent reporting keeps you informed and involved.'
    ],
    facts: [
      { label: 'Campaigns Delivered', value: '300+' },
      { label: 'Satisfied Clients', value: '94%' },
      { label: 'Social Media Experts', value: '20+' },
      { label: 'Years in Business', value: '7+' }
    ]
  }
}

export default function SocialMediaMarketingClient() {
  return <ServicePageTemplate content={socialMediaMarketingContent} />
}
