'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Cpu, BarChart2, Zap, Users, Globe, Shield } from 'lucide-react'

const aiMlContent: ServiceContent = {
  hero: {
    title: 'AI & Machine Learning',
    subtitle: 'Innovative AI Solutions',
    description: 'Harness the power of artificial intelligence and machine learning to transform your business processes and drive innovation with Terzettoo.',
    primaryCTA: 'Start AI Project',
    secondaryCTA: 'Explore AI Solutions',
    heroImage: '/image/Services/ai_ml.png'
  },
  overview: {
    title: 'Comprehensive AI & Machine Learning Services',
    description: 'We provide custom AI and machine learning solutions tailored to your business needs, including predictive analytics, natural language processing, and computer vision.',
    keyPoints: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'AI Model Development',
      'Data Processing & Analysis',
      'AI Integration & Deployment'
    ]
  },
  features: {
    title: 'AI & Machine Learning Features',
    items: [
      {
        icon: Cpu,
        title: 'Advanced Algorithms',
        description: 'Utilize state-of-the-art machine learning algorithms for accurate predictions.'
      },
      {
        icon: BarChart2,
        title: 'Data Analytics',
        description: 'Extract valuable insights from complex datasets.'
      },
      {
        icon: Zap,
        title: 'Automation',
        description: 'Automate repetitive tasks to improve efficiency.'
      },
      {
        icon: Users,
        title: 'User Behavior Analysis',
        description: 'Understand and predict user behavior for better engagement.'
      },
      {
        icon: Globe,
        title: 'Scalable Solutions',
        description: 'AI solutions designed to grow with your business.'
      },
      {
        icon: Shield,
        title: 'Security & Compliance',
        description: 'Ensure data privacy and compliance with industry standards.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of AI & Machine Learning',
    items: [
      {
        title: 'Improved Decision Making',
        description: 'Leverage data-driven insights for strategic decisions.'
      },
      {
        title: 'Increased Efficiency',
        description: 'Automate processes to save time and reduce errors.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Stay ahead with innovative AI technologies.'
      },
      {
        title: 'Custom Solutions',
        description: 'Tailored AI models to meet your unique business challenges.'
      }
    ]
  },
  process: {
    title: 'Our AI & Machine Learning Process',
    steps: [
      {
        number: '01',
        title: 'Data Collection',
        description: 'Gather and preprocess relevant data.'
      },
      {
        number: '02',
        title: 'Model Development',
        description: 'Build and train machine learning models.'
      },
      {
        number: '03',
        title: 'Testing & Validation',
        description: 'Evaluate model performance and accuracy.'
      },
      {
        number: '04',
        title: 'Deployment & Monitoring',
        description: 'Deploy models and monitor for continuous improvement.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'AWS SageMaker', 'Azure ML', 'Google AI Platform']
  },
  stats: [
    { number: '200+', label: 'AI Projects Delivered' },
    { number: '97%', label: 'Client Satisfaction' },
    { number: '7+', label: 'AI Experts' },
    { number: '4+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our AI & Machine Learning Services?',
    paragraphs: [
      'Our AI team combines deep technical expertise with industry knowledge to deliver impactful AI solutions.',
      'We focus on creating scalable, secure, and efficient AI models tailored to your business needs.',
      'Our agile approach ensures continuous improvement and alignment with your goals.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '200+' },
      { label: 'Satisfied Clients', value: '97%' },
      { label: 'AI Experts', value: '30+' },
      { label: 'Years in Business', value: '8+' }
    ]
  }
}

export default function AiMlClient() {
  return <ServicePageTemplate content={aiMlContent} />
}
