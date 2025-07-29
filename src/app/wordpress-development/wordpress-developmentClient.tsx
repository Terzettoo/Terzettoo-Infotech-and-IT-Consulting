'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Code, Zap, Users, Globe, Shield, Layout } from 'lucide-react'

const wordpressDevelopmentContent: ServiceContent = {
  hero: {
    title: 'WordPress Development',
    subtitle: 'Custom WordPress Websites & Solutions',
    description: 'Build scalable, secure, and SEO-friendly WordPress websites tailored to your business needs.',
    primaryCTA: 'Start WordPress Project',
    secondaryCTA: 'View WordPress Portfolio',
    heroImage: '/image/Services/wordpress.jpg'
  },
  overview: {
    title: 'Comprehensive WordPress Development',
    description: 'We provide custom WordPress development services including theme customization, plugin development, and site optimization.',
    keyPoints: [
      'Custom Theme Development',
      'Plugin Development & Integration',
      'Responsive Design',
      'SEO Optimization',
      'Performance Tuning',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: 'WordPress Development Features',
    items: [
      {
        icon: Code,
        title: 'Custom Themes',
        description: 'Create unique and brand-aligned WordPress themes.'
      },
      {
        icon: Zap,
        title: 'Plugin Development',
        description: 'Develop custom plugins to extend site functionality.'
      },
      {
        icon: Layout,
        title: 'Responsive Design',
        description: 'Ensure seamless experience across all devices.'
      },
      {
        icon: Users,
        title: 'User-Friendly Admin',
        description: 'Easy-to-manage backend for site administrators.'
      },
      {
        icon: Globe,
        title: 'SEO Friendly',
        description: 'Optimize your site for better search engine rankings.'
      },
      {
        icon: Shield,
        title: 'Security Best Practices',
        description: 'Implement robust security measures to protect your site.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of WordPress Development',
    items: [
      {
        title: 'Easy Content Management',
        description: 'Manage your website content effortlessly.'
      },
      {
        title: 'Customizable Solutions',
        description: 'Tailor your site to meet unique business needs.'
      },
      {
        title: 'Scalable Platform',
        description: 'Grow your website as your business expands.'
      },
      {
        title: 'Reliable Support',
        description: 'Ongoing maintenance and technical assistance.'
      }
    ]
  },
  process: {
    title: 'Our WordPress Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Gathering',
        description: 'Understand your website goals and needs.'
      },
      {
        number: '02',
        title: 'Design & Development',
        description: 'Create custom themes and plugins.'
      },
      {
        number: '03',
        title: 'Testing & Deployment',
        description: 'Ensure quality and launch your WordPress site.'
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
    items: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'WooCommerce', 'Elementor', 'Yoast SEO']
  },
  stats: [
    { number: '120+', label: 'WordPress Sites Delivered' },
    { number: '97%', label: 'Client Satisfaction' },
    { number: '5+', label: 'WordPress Experts' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our WordPress Development Services?',
    paragraphs: [
      'Our WordPress team builds scalable and customizable websites tailored to your business needs.',
      'We focus on user experience, performance, and security to maximize your online presence.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Sites Delivered', value: '120+' },
      { label: 'Satisfied Clients', value: '97%' },
      { label: 'WordPress Experts', value: '30+' },
      { label: 'Years in Business', value: '10+' }
    ]
  }
}

export default function WordpressDevelopmentClient() {
  return <ServicePageTemplate content={wordpressDevelopmentContent} />
}
