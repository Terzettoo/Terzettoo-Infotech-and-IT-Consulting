'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Megaphone, BarChart2, Zap, Users, Globe, Shield } from 'lucide-react'

const contentMarketingContent: ServiceContent = {
  hero: {
    title: 'Content Marketing & Strategy',
    subtitle: 'Engage, Educate, Convert',
    description: 'Develop compelling content strategies that drive traffic, engage audiences, and convert leads into customers.',
    primaryCTA: 'Start Content Strategy',
    secondaryCTA: 'View Our Work',
    heroImage: '/image/Services/Content marketing.jpg'
  },
  overview: {
    title: 'Comprehensive Content Marketing Services',
    description: 'We create tailored content marketing strategies that align with your business goals and resonate with your target audience.',
    keyPoints: [
      'Content Strategy Development',
      'SEO-Optimized Content',
      'Multi-Channel Distribution',
      'Audience Engagement',
      'Performance Analytics',
      'Continuous Optimization'
    ]
  },
  features: {
    title: 'Content Marketing Features',
    items: [
      {
        icon: Megaphone,
        title: 'Strategic Planning',
        description: 'Crafting data-driven content plans to maximize impact.'
      },
      {
        icon: BarChart2,
        title: 'Analytics & Reporting',
        description: 'Measuring content performance and ROI.'
      },
      {
        icon: Zap,
        title: 'Content Creation',
        description: 'Producing high-quality, engaging content.'
      },
      {
        icon: Users,
        title: 'Audience Targeting',
        description: 'Reaching the right audience with personalized messaging.'
      },
      {
        icon: Globe,
        title: 'Multi-Channel Reach',
        description: 'Distributing content across various platforms.'
      },
      {
        icon: Shield,
        title: 'Brand Consistency',
        description: 'Maintaining a consistent brand voice and message.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Content Marketing',
    items: [
      {
        title: 'Increased Brand Awareness',
        description: 'Build a strong brand presence in your market.'
      },
      {
        title: 'Higher Engagement',
        description: 'Connect with your audience through valuable content.'
      },
      {
        title: 'Lead Generation',
        description: 'Attract and convert potential customers.'
      },
      {
        title: 'Improved SEO',
        description: 'Boost search engine rankings with optimized content.'
      }
    ]
  },
  process: {
    title: 'Our Content Marketing Process',
    steps: [
      {
        number: '01',
        title: 'Research & Analysis',
        description: 'Understand your market and audience.'
      },
      {
        number: '02',
        title: 'Strategy Development',
        description: 'Create a tailored content plan.'
      },
      {
        number: '03',
        title: 'Content Creation & Distribution',
        description: 'Produce and share engaging content.'
      },
      {
        number: '04',
        title: 'Monitoring & Optimization',
        description: 'Track performance and refine strategy.'
      }
    ]
  },
  technologies: {
    title: 'Tools & Platforms',
    items: ['Google Analytics', 'SEMrush', 'HubSpot', 'WordPress', 'Mailchimp', 'Hootsuite']
  },
  stats: [
    { number: '300+', label: 'Content Pieces Created' },
    { number: '90%', label: 'Client Satisfaction' },
    { number: '20+', label: 'Marketing Experts' },
    { number: '5+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Content Marketing Services?',
    paragraphs: [
      'Our team crafts data-driven content strategies that deliver measurable results.',
      'We focus on creating engaging, SEO-optimized content tailored to your audience.',
      'Our continuous optimization ensures your content stays relevant and effective.'
    ],
    facts: [
      { label: 'Content Pieces', value: '300+' },
      { label: 'Satisfied Clients', value: '90%' },
      { label: 'Marketing Experts', value: '20+' },
      { label: 'Years in Business', value: '5+' }
    ]
  }
}

export default function ContentMarketingClient() {
  return <ServicePageTemplate content={contentMarketingContent} />
}
