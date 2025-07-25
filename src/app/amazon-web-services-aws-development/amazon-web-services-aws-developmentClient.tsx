'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Cloud, Zap, Shield, Users, Globe, Server } from 'lucide-react'

const awsDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Amazon Web Services (AWS) Development',
    subtitle: 'Scalable & Secure Cloud Solutions',
    description: 'Leverage AWS cloud services to build scalable, secure, and cost-effective applications tailored to your business needs.',
    primaryCTA: 'Start AWS Project',
    secondaryCTA: 'View Cloud Solutions',
    heroImage: '☁️'
  },
  overview: {
    title: 'Comprehensive AWS Development',
    description: 'We provide end-to-end AWS development services including cloud architecture, migration, and management.',
    keyPoints: [
      'Cloud Infrastructure Design',
      'AWS Migration & Deployment',
      'Serverless Application Development',
      'Security & Compliance',
      'Cost Optimization',
      '24/7 Monitoring & Support'
    ]
  },
  features: {
    title: 'AWS Development Features',
    items: [
      {
        icon: Cloud,
        title: 'Scalable Architecture',
        description: 'Design cloud-native applications that scale with your business.'
      },
      {
        icon: Zap,
        title: 'Serverless Computing',
        description: 'Build efficient serverless applications using AWS Lambda and related services.'
      },
      {
        icon: Shield,
        title: 'Security & Compliance',
        description: 'Implement robust security measures and ensure compliance with industry standards.'
      },
      {
        icon: Users,
        title: 'Managed Services',
        description: 'Comprehensive management of your AWS environment.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Deploy applications across multiple AWS regions worldwide.'
      },
      {
        icon: Server,
        title: 'Cost Optimization',
        description: 'Optimize cloud costs without compromising performance.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of AWS Development',
    items: [
      {
        title: 'Scalability',
        description: 'Easily scale your applications to meet demand.'
      },
      {
        title: 'Reliability',
        description: 'Highly available and fault-tolerant cloud solutions.'
      },
      {
        title: 'Cost Efficiency',
        description: 'Pay-as-you-go pricing to optimize your budget.'
      },
      {
        title: 'Expert Support',
        description: 'Access to experienced AWS developers and architects.'
      }
    ]
  },
  process: {
    title: 'Our AWS Development Process',
    steps: [
      {
        number: '01',
        title: 'Assessment & Planning',
        description: 'Analyze your current infrastructure and plan cloud migration.'
      },
      {
        number: '02',
        title: 'Architecture Design',
        description: 'Design scalable and secure AWS architectures.'
      },
      {
        number: '03',
        title: 'Development & Deployment',
        description: 'Build and deploy cloud-native applications.'
      },
      {
        number: '04',
        title: 'Monitoring & Optimization',
        description: 'Continuous monitoring and cost optimization.'
      }
    ]
  },
  technologies: {
    title: 'AWS Services We Use',
    items: ['AWS Lambda', 'EC2', 'S3', 'DynamoDB', 'CloudFormation', 'API Gateway', 'CloudWatch', 'IAM']
  },
  stats: [
    { number: '100+', label: 'AWS Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '20+', label: 'AWS Certified Experts' },
    { number: '8+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our AWS Development Services?',
    paragraphs: [
      'Our AWS team delivers scalable and secure cloud solutions tailored to your business needs.',
      'We focus on cost optimization, security, and performance to maximize your cloud investment.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '100+' },
      { label: 'Satisfied Clients', value: '98%' },
      { label: 'AWS Experts', value: '20+' },
      { label: 'Years in Business', value: '8+' }
    ]
  }
}

export default function AwsDevelopmentClient() {
  return <ServicePageTemplate content={awsDevelopmentContent} />
}
