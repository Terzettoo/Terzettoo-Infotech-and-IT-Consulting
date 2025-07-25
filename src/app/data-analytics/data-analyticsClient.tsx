'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { BarChart2, Zap, Users, Globe, Shield, Database } from 'lucide-react'

const dataAnalyticsContent: ServiceContent = {
  hero: {
    title: 'Data Analytics',
    subtitle: 'Transform Data into Insights',
    description: 'Leverage data analytics to make informed business decisions, optimize operations, and drive growth.',
    primaryCTA: 'Start Data Analytics Project',
    secondaryCTA: 'View Analytics Solutions',
    heroImage: '📊'
  },
  overview: {
    title: 'Comprehensive Data Analytics Services',
    description: 'We provide end-to-end data analytics solutions including data collection, processing, visualization, and predictive modeling.',
    keyPoints: [
      'Data Collection & Integration',
      'Data Visualization & Reporting',
      'Predictive Analytics & Modeling',
      'Big Data Solutions',
      'Real-Time Analytics',
      'Data Governance & Security'
    ]
  },
  features: {
    title: 'Data Analytics Features',
    items: [
      {
        icon: BarChart2,
        title: 'Interactive Dashboards',
        description: 'Visualize key metrics with customizable dashboards.'
      },
      {
        icon: Zap,
        title: 'Real-Time Insights',
        description: 'Access up-to-date data for timely decision-making.'
      },
      {
        icon: Database,
        title: 'Big Data Processing',
        description: 'Handle large datasets efficiently and securely.'
      },
      {
        icon: Users,
        title: 'User Behavior Analysis',
        description: 'Understand customer behavior to improve engagement.'
      },
      {
        icon: Globe,
        title: 'Global Data Integration',
        description: 'Combine data from multiple sources worldwide.'
      },
      {
        icon: Shield,
        title: 'Data Security',
        description: 'Ensure compliance with data protection regulations.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Data Analytics',
    items: [
      {
        title: 'Improved Decision Making',
        description: 'Make data-driven business decisions.'
      },
      {
        title: 'Operational Efficiency',
        description: 'Optimize processes and reduce costs.'
      },
      {
        title: 'Customer Insights',
        description: 'Gain deeper understanding of customer needs.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Stay ahead with actionable insights.'
      }
    ]
  },
  process: {
    title: 'Our Data Analytics Process',
    steps: [
      {
        number: '01',
        title: 'Data Assessment',
        description: 'Evaluate existing data and sources.'
      },
      {
        number: '02',
        title: 'Strategy Development',
        description: 'Design analytics approach and tools.'
      },
      {
        number: '03',
        title: 'Implementation',
        description: 'Develop analytics models and dashboards.'
      },
      {
        number: '04',
        title: 'Monitoring & Optimization',
        description: 'Continuously improve analytics solutions.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['Tableau', 'Power BI', 'Python', 'R', 'Hadoop', 'Spark', 'SQL', 'AWS']
  },
  stats: [
    { number: '150+', label: 'Analytics Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '25+', label: 'Data Experts' },
    { number: '10+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Data Analytics Services?',
    paragraphs: [
      'Our data analytics team transforms raw data into actionable insights tailored to your business goals.',
      'We focus on accuracy, security, and usability to empower your decision-making.',
      'Our agile approach ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '150+' },
      { label: 'Satisfied Clients', value: '95%' },
      { label: 'Data Experts', value: '25+' },
      { label: 'Years in Business', value: '10+' }
    ]
  }
}

export default function DataAnalyticsClient() {
  return <ServicePageTemplate content={dataAnalyticsContent} />
}
