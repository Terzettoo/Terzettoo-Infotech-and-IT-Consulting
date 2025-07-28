'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Search, BarChart2, Zap, Users, Globe, Shield } from 'lucide-react'

const seoServicesContent: ServiceContent = {
  hero: {
    title: 'SEO Services',
    subtitle: 'Boost Your Search Rankings',
    description: 'Comprehensive SEO strategies to improve your website’s visibility, drive organic traffic, and increase conversions.',
    primaryCTA: 'Start SEO Campaign',
    secondaryCTA: 'View SEO Results',
    heroImage: '/image/Services/seo-services.png'
  },
  overview: {
    title: 'Comprehensive SEO Services',
    description: 'We provide tailored SEO solutions including on-page optimization, link building, and content strategy to enhance your online presence.',
    keyPoints: [
      'Keyword Research & Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Link Building Strategies',
      'Content Marketing Integration',
      'Performance Tracking & Reporting'
    ]
  },
  features: {
    title: 'SEO Service Features',
    items: [
      {
        icon: Search,
        title: 'Keyword Optimization',
        description: 'Target the right keywords to attract qualified traffic.'
      },
      {
        icon: BarChart2,
        title: 'Analytics & Reporting',
        description: 'Track SEO performance and ROI with detailed reports.'
      },
      {
        icon: Zap,
        title: 'Technical SEO',
        description: 'Improve site speed, mobile-friendliness, and crawlability.'
      },
      {
        icon: Users,
        title: 'Content Strategy',
        description: 'Develop SEO-friendly content that engages your audience.'
      },
      {
        icon: Globe,
        title: 'Local & Global SEO',
        description: 'Optimize for local search and international markets.'
      },
      {
        icon: Shield,
        title: 'SEO Compliance',
        description: 'Ensure adherence to search engine guidelines.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of SEO Services',
    items: [
      {
        title: 'Increased Organic Traffic',
        description: 'Attract more visitors through improved search rankings.'
      },
      {
        title: 'Higher Conversion Rates',
        description: 'Drive qualified leads to your website.'
      },
      {
        title: 'Long-Term Growth',
        description: 'Build sustainable online presence and brand authority.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Stay ahead of competitors in search results.'
      }
    ]
  },
  process: {
    title: 'Our SEO Process',
    steps: [
      {
        number: '01',
        title: 'SEO Audit',
        description: 'Analyze current website performance and issues.'
      },
      {
        number: '02',
        title: 'Strategy Development',
        description: 'Create a customized SEO plan.'
      },
      {
        number: '03',
        title: 'Implementation',
        description: 'Optimize website and content.'
      },
      {
        number: '04',
        title: 'Monitoring & Reporting',
        description: 'Track progress and adjust strategies.'
      }
    ]
  },
  technologies: {
    title: 'SEO Tools We Use',
    items: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog']
  },
  stats: [
    { number: '400+', label: 'SEO Campaigns Delivered' },
    { number: '92%', label: 'Client Satisfaction' },
    { number: '25+', label: 'SEO Experts' },
    { number: '10+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our SEO Services?',
    paragraphs: [
      'Our SEO team delivers data-driven strategies that improve your search rankings and drive organic traffic.',
      'We focus on sustainable growth and compliance with search engine guidelines.',
      'Our transparent reporting keeps you informed and involved.'
    ],
    facts: [
      { label: 'Campaigns Delivered', value: '400+' },
      { label: 'Satisfied Clients', value: '92%' },
      { label: 'SEO Experts', value: '25+' },
      { label: 'Years in Business', value: '10+' }
    ]
  }
}

export default function SeoServicesClient() {
  return <ServicePageTemplate content={seoServicesContent} />
}
