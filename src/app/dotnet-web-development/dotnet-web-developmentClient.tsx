'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Server, Code, Zap, Users, Globe, Shield } from 'lucide-react'

const dotnetWebDevelopmentContent: ServiceContent = {
  hero: {
    title: '.NET Web Development',
    subtitle: 'Robust & Scalable Web Solutions',
    description: 'Build secure, scalable, and high-performance web applications using Microsoft .NET technologies tailored to your business needs.',
    primaryCTA: 'Start .NET Project',
    secondaryCTA: 'View .NET Solutions',
    heroImage: '/image/Services/asp-net.webp'
  },
  overview: {
    title: 'Comprehensive .NET Web Development',
    description: 'We deliver custom .NET web applications with a focus on security, scalability, and maintainability.',
    keyPoints: [
      'Custom Web Application Development',
      'API Development & Integration',
      'Cloud & On-Premises Solutions',
      'Agile Development Process',
      'Performance Optimization',
      'Ongoing Support & Maintenance'
    ]
  },
  features: {
    title: '.NET Web Development Features',
    items: [
      {
        icon: Code,
        title: 'Robust Architecture',
        description: 'Design scalable and maintainable web applications.'
      },
      {
        icon: Zap,
        title: 'High Performance',
        description: 'Optimize applications for speed and responsiveness.'
      },
      {
        icon: Server,
        title: 'API Development',
        description: 'Build secure and efficient APIs for your applications.'
      },
      {
        icon: Users,
        title: 'User-Friendly Interfaces',
        description: 'Create intuitive and engaging user experiences.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Deploy applications accessible worldwide.'
      },
      {
        icon: Shield,
        title: 'Security Best Practices',
        description: 'Implement robust security measures to protect data.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of .NET Web Development',
    items: [
      {
        title: 'Scalability',
        description: 'Applications that grow with your business.'
      },
      {
        title: 'Reliability',
        description: 'Stable and secure web solutions.'
      },
      {
        title: 'Cost Efficiency',
        description: 'Optimized development and maintenance costs.'
      },
      {
        title: 'Expert Support',
        description: 'Dedicated team for ongoing assistance.'
      }
    ]
  },
  process: {
    title: 'Our .NET Web Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Analysis',
        description: 'Understand business needs and technical requirements.'
      },
      {
        number: '02',
        title: 'Design & Architecture',
        description: 'Plan scalable and secure application architecture.'
      },
      {
        number: '03',
        title: 'Development & Testing',
        description: 'Agile development with continuous testing.'
      },
      {
        number: '04',
        title: 'Deployment & Maintenance',
        description: 'Launch and provide ongoing support.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['ASP.NET Core', 'C#', 'Entity Framework', 'Azure', 'SQL Server', 'Blazor', 'Docker', 'Kubernetes']
  },
  stats: [
    { number: '80+', label: '.NET Projects Delivered' },
    { number: '94%', label: 'Client Satisfaction' },
    { number: '25+', label: 'Expert Developers' },
    { number: '10+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our .NET Web Development Services?',
    paragraphs: [
      'Our .NET team delivers robust and scalable web applications tailored to your business needs.',
      'We focus on security, performance, and maintainability to ensure long-term success.',
      'Our agile approach guarantees timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '80+' },
      { label: 'Satisfied Clients', value: '94%' },
      { label: 'Expert Developers', value: '25+' },
      { label: 'Years in Business', value: '10+' }
    ]
  }
}

export default function DotnetWebDevelopmentClient() {
  return <ServicePageTemplate content={dotnetWebDevelopmentContent} />
}
