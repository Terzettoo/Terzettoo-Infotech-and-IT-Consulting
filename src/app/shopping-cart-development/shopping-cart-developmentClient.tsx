'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { ShoppingCart, Code, Zap, Users, Globe, Shield } from 'lucide-react'

const shoppingCartDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Shopping Cart Development',
    subtitle: 'Seamless & Secure Checkout Solutions',
    description: 'Develop custom shopping cart solutions that provide smooth, secure, and user-friendly checkout experiences.',
    primaryCTA: 'Start Shopping Cart Project',
    secondaryCTA: 'View Our Solutions',
    heroImage: '🛒'
  },
  overview: {
    title: 'Comprehensive Shopping Cart Development',
    description: 'We build scalable and secure shopping cart systems tailored to your ecommerce needs, ensuring high conversion rates.',
    keyPoints: [
      'Custom Cart Design & Development',
      'Payment Gateway Integration',
      'Multi-Currency Support',
      'User-Friendly Interface',
      'Mobile Optimization',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: 'Shopping Cart Development Features',
    items: [
      {
        icon: Code,
        title: 'Customizable Cart',
        description: 'Tailor shopping cart features to your business requirements.'
      },
      {
        icon: Zap,
        title: 'Fast & Secure',
        description: 'Optimized for quick and safe transactions.'
      },
      {
        icon: ShoppingCart,
        title: 'Easy Checkout',
        description: 'Streamlined checkout process to reduce cart abandonment.'
      },
      {
        icon: Users,
        title: 'Customer Management',
        description: 'Manage customer data and preferences efficiently.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Support for international customers and currencies.'
      },
      {
        icon: Shield,
        title: 'Security Compliance',
        description: 'Ensure PCI compliance and data protection.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Shopping Cart Development',
    items: [
      {
        title: 'Increased Sales',
        description: 'Improve conversion rates with a smooth checkout experience.'
      },
      {
        title: 'Customer Satisfaction',
        description: 'Provide a secure and user-friendly shopping experience.'
      },
      {
        title: 'Scalable Solutions',
        description: 'Shopping carts that grow with your business.'
      },
      {
        title: 'Reliable Support',
        description: 'Ongoing maintenance and technical assistance.'
      }
    ]
  },
  process: {
    title: 'Our Shopping Cart Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Analysis',
        description: 'Understand your ecommerce and checkout needs.'
      },
      {
        number: '02',
        title: 'Design & Development',
        description: 'Create custom shopping cart solutions.'
      },
      {
        number: '03',
        title: 'Testing & Deployment',
        description: 'Ensure quality and launch the shopping cart.'
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
    items: ['Magento', 'Shopify', 'WooCommerce', 'React', 'Node.js', 'Stripe', 'PayPal', 'AWS']
  },
  stats: [
    { number: '100+', label: 'Shopping Carts Delivered' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '20+', label: 'Ecommerce Experts' },
    { number: '7+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Shopping Cart Development Services?',
    paragraphs: [
      'Our ecommerce team builds secure and scalable shopping cart solutions tailored to your business.',
      'We focus on user experience, security, and performance to maximize your sales.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Carts Delivered', value: '100+' },
      { label: 'Satisfied Clients', value: '95%' },
      { label: 'Ecommerce Experts', value: '20+' },
      { label: 'Years in Business', value: '7+' }
    ]
  }
}

export default function ShoppingCartDevelopmentClient() {
  return <ServicePageTemplate content={shoppingCartDevelopmentContent} />
}
