'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { ShoppingCart, Cpu, Zap, Users, Globe, Shield } from 'lucide-react'

const ecommercePortalDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Ecommerce Portal Development',
    subtitle: 'Scalable & Secure Online Stores',
    description: 'Build feature-rich, scalable, and secure ecommerce portals tailored to your business needs to enhance customer experience and drive sales.',
    primaryCTA: 'Start Ecommerce Project',
    secondaryCTA: 'View Ecommerce Solutions',
    heroImage: '🛒'
  },
  overview: {
    title: 'Comprehensive Ecommerce Portal Development',
    description: 'We develop custom ecommerce portals with seamless user experience, secure payment integration, and scalable architecture.',
    keyPoints: [
      'Custom Storefront Design',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing & Tracking',
      'Mobile-Friendly Design',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: 'Ecommerce Portal Features',
    items: [
      {
        icon: Cpu,
        title: 'Robust Backend',
        description: 'Scalable and secure backend systems for your ecommerce portal.'
      },
      {
        icon: Zap,
        title: 'Fast Performance',
        description: 'Optimized for quick load times and smooth user experience.'
      },
      {
        icon: ShoppingCart,
        title: 'User-Friendly Interface',
        description: 'Intuitive design to enhance customer engagement and conversion.'
      },
      {
        icon: Users,
        title: 'Customer Management',
        description: 'Tools to manage customer accounts and preferences.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Support for multiple currencies and languages.'
      },
      {
        icon: Shield,
        title: 'Security & Compliance',
        description: 'Ensure data protection and compliance with industry standards.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Ecommerce Portal Development',
    items: [
      {
        title: 'Increased Sales',
        description: 'Reach more customers and boost revenue.'
      },
      {
        title: 'Improved Customer Experience',
        description: 'Provide seamless shopping experience across devices.'
      },
      {
        title: 'Scalable Solutions',
        description: 'Grow your ecommerce platform as your business expands.'
      },
      {
        title: 'Reliable Support',
        description: 'Ongoing maintenance and technical support.'
      }
    ]
  },
  process: {
    title: 'Our Ecommerce Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Gathering',
        description: 'Understand your business goals and ecommerce needs.'
      },
      {
        number: '02',
        title: 'Design & Development',
        description: 'Create custom designs and develop the portal.'
      },
      {
        number: '03',
        title: 'Testing & Deployment',
        description: 'Ensure quality and launch the ecommerce portal.'
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
    items: ['Magento', 'Shopify', 'WooCommerce', 'React', 'Node.js', 'MySQL', 'AWS', 'Stripe']
  },
  stats: [
    { number: '120+', label: 'Ecommerce Portals Delivered' },
    { number: '93%', label: 'Client Satisfaction' },
    { number: '30+', label: 'Development Experts' },
    { number: '8+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Ecommerce Portal Development Services?',
    paragraphs: [
      'Our ecommerce team builds scalable and secure online stores tailored to your business.',
      'We focus on user experience, performance, and security to maximize your sales.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Portals Delivered', value: '120+' },
      { label: 'Satisfied Clients', value: '93%' },
      { label: 'Development Experts', value: '30+' },
      { label: 'Years in Business', value: '8+' }
    ]
  }
}

export default function EcommercePortalDevelopmentClient() {
  return <ServicePageTemplate content={ecommercePortalDevelopmentContent} />
}
