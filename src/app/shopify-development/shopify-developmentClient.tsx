'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { ShoppingCart, Code, Zap, Users, Globe, Shield } from 'lucide-react'

const shopifyDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Shopify Development',
    subtitle: 'Custom Shopify Stores & Solutions',
    description: 'Build scalable and customizable Shopify stores tailored to your business needs with seamless user experience.',
    primaryCTA: 'Start Shopify Project',
    secondaryCTA: 'View Shopify Stores',
    heroImage: '/image/Services/Shopify-Development.webp'
  },
  overview: {
    title: 'Comprehensive Shopify Development',
    description: 'We develop custom Shopify solutions including store setup, theme customization, and app integrations.',
    keyPoints: [
      'Custom Store Design',
      'Theme Development & Customization',
      'App Integration & Development',
      'Payment Gateway Setup',
      'SEO & Performance Optimization',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: 'Shopify Development Features',
    items: [
      {
        icon: Code,
        title: 'Custom Themes',
        description: 'Create unique and brand-aligned Shopify themes.'
      },
      {
        icon: Zap,
        title: 'App Integrations',
        description: 'Integrate third-party apps to extend store functionality.'
      },
      {
        icon: ShoppingCart,
        title: 'Seamless Checkout',
        description: 'Optimize checkout process for higher conversions.'
      },
      {
        icon: Users,
        title: 'User-Friendly Admin',
        description: 'Easy-to-manage store backend for business owners.'
      },
      {
        icon: Globe,
        title: 'Global Store Setup',
        description: 'Support for multiple currencies and languages.'
      },
      {
        icon: Shield,
        title: 'Secure & Compliant',
        description: 'Ensure PCI compliance and data security.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Shopify Development',
    items: [
      {
        title: 'Fast Time to Market',
        description: 'Launch your online store quickly and efficiently.'
      },
      {
        title: 'Customizable Solutions',
        description: 'Tailor your store to meet unique business needs.'
      },
      {
        title: 'Scalable Platform',
        description: 'Grow your store as your business expands.'
      },
      {
        title: 'Reliable Support',
        description: 'Ongoing maintenance and technical assistance.'
      }
    ]
  },
  process: {
    title: 'Our Shopify Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Gathering',
        description: 'Understand your ecommerce goals and needs.'
      },
      {
        number: '02',
        title: 'Design & Development',
        description: 'Create custom Shopify themes and features.'
      },
      {
        number: '03',
        title: 'Testing & Deployment',
        description: 'Ensure quality and launch your Shopify store.'
      },
      {
        number: '04',
        title: 'Maintenance & Support',
        description: 'Provide ongoing support and updates.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['Shopify', 'Liquid', 'JavaScript', 'React', 'GraphQL', 'Shopify APIs', 'Stripe', 'PayPal']
  },
  stats: [
    { number: '150+', label: 'Shopify Stores Delivered' },
    { number: '96%', label: 'Client Satisfaction' },
    { number: '25+', label: 'Shopify Experts' },
    { number: '7+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Shopify Development Services?',
    paragraphs: [
      'Our Shopify team builds scalable and customizable stores tailored to your business needs.',
      'We focus on user experience, performance, and security to maximize your sales.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Stores Delivered', value: '150+' },
      { label: 'Satisfied Clients', value: '96%' },
      { label: 'Shopify Experts', value: '25+' },
      { label: 'Years in Business', value: '7+' }
    ]
  }
}

export default function ShopifyDevelopmentClient() {
  return <ServicePageTemplate content={shopifyDevelopmentContent} />
}
