'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Settings, Zap, Users, Globe, Shield } from 'lucide-react'

const erpImplementationContent: ServiceContent = {
  hero: {
    title: 'ERP Implementation and Customization',
    subtitle: 'Streamline Your Business Operations',
    description: 'Implement and customize ERP solutions tailored to your business processes for improved efficiency and productivity.',
    primaryCTA: 'Start ERP Project',
    secondaryCTA: 'View ERP Solutions',
    heroImage: '/image/Services/ERP.jpg'
  },
  overview: {
    title: 'Comprehensive ERP Implementation',
    description: 'We provide end-to-end ERP implementation and customization services to align with your unique business needs.',
    keyPoints: [
      'ERP System Selection & Planning',
      'Custom Module Development',
      'Integration with Existing Systems',
      'Data Migration & Training',
      'Post-Implementation Support',
      'Process Optimization'
    ]
  },
  features: {
    title: 'ERP Implementation Features',
    items: [
      {
        icon: Settings,
        title: 'Tailored Solutions',
        description: 'Customize ERP modules to fit your business workflows.'
      },
      {
        icon: Zap,
        title: 'Efficient Deployment',
        description: 'Streamlined implementation process minimizing downtime.'
      },
      {
        icon: Users,
        title: 'User Training',
        description: 'Comprehensive training to ensure smooth adoption.'
      },
      {
        icon: Globe,
        title: 'Scalable Systems',
        description: 'ERP solutions that grow with your business.'
      },
      {
        icon: Shield,
        title: 'Security & Compliance',
        description: 'Ensure data security and regulatory compliance.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of ERP Implementation',
    items: [
      {
        title: 'Improved Efficiency',
        description: 'Automate and optimize business processes.'
      },
      {
        title: 'Better Decision Making',
        description: 'Access real-time data for informed decisions.'
      },
      {
        title: 'Cost Savings',
        description: 'Reduce operational costs through streamlined workflows.'
      },
      {
        title: 'Enhanced Collaboration',
        description: 'Improve communication across departments.'
      }
    ]
  },
  process: {
    title: 'Our ERP Implementation Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Analysis',
        description: 'Understand your business needs and goals.'
      },
      {
        number: '02',
        title: 'System Design & Customization',
        description: 'Develop tailored ERP modules and workflows.'
      },
      {
        number: '03',
        title: 'Deployment & Training',
        description: 'Implement the system and train users.'
      },
      {
        number: '04',
        title: 'Support & Optimization',
        description: 'Provide ongoing support and system enhancements.'
      }
    ]
  },
  technologies: {
    title: 'ERP Platforms We Work With',
    items: ['SAP', 'Oracle ERP', 'Microsoft Dynamics', 'NetSuite', 'Odoo', 'Custom ERP Solutions']
  },
  stats: [
    { number: '75+', label: 'ERP Projects Delivered' },
    { number: '90%', label: 'Client Satisfaction' },
    { number: '5+', label: 'ERP Experts' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our ERP Implementation Services?',
    paragraphs: [
      'Our ERP team delivers customized solutions that streamline your business operations.',
      'We focus on efficient deployment, user training, and ongoing support to ensure success.',
      'Our agile approach guarantees timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '75+' },
      { label: 'Satisfied Clients', value: '90%' },
      { label: 'ERP Experts', value: '15+' }
    ]
  }
}

export default function ErpImplementationClient() {
  return <ServicePageTemplate content={erpImplementationContent} />
}
