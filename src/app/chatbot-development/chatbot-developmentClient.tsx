'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { MessageCircle, Cpu, Zap, Users, Globe, Shield } from 'lucide-react'

const chatbotDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Chatbot Development',
    subtitle: 'Intelligent Conversational Agents',
    description: 'Build AI-powered chatbots to enhance customer engagement, automate support, and streamline business processes.',
    primaryCTA: 'Start Chatbot Project',
    secondaryCTA: 'Explore Chatbot Solutions',
    heroImage: '/image/Services/chatbot_development.png'
  },
  overview: {
    title: 'Comprehensive Chatbot Development',
    description: 'We create custom chatbots tailored to your business needs, leveraging natural language processing and machine learning.',
    keyPoints: [
      'AI-Powered Conversations',
      'Multi-Platform Support',
      '24/7 Customer Service',
      'Integration with CRM & APIs',
      'Customizable Workflows',
      'Analytics & Reporting'
    ]
  },
  features: {
    title: 'Chatbot Development Features',
    items: [
      {
        icon: Cpu,
        title: 'Natural Language Processing',
        description: 'Understand and respond to user queries effectively.'
      },
      {
        icon: Zap,
        title: 'Fast Response',
        description: 'Instant replies to customer inquiries.'
      },
      {
        icon: MessageCircle,
        title: 'Multi-Channel Support',
        description: 'Deploy chatbots on websites, social media, and messaging apps.'
      },
      {
        icon: Users,
        title: 'User Engagement',
        description: 'Enhance customer experience with personalized interactions.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Support multiple languages and regions.'
      },
      {
        icon: Shield,
        title: 'Secure & Compliant',
        description: 'Ensure data privacy and regulatory compliance.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Chatbot Development',
    items: [
      {
        title: 'Improved Customer Support',
        description: 'Provide instant assistance and reduce wait times.'
      },
      {
        title: 'Cost Savings',
        description: 'Automate repetitive tasks and reduce operational costs.'
      },
      {
        title: 'Increased Engagement',
        description: 'Keep customers engaged with interactive conversations.'
      },
      {
        title: 'Scalable Solutions',
        description: 'Easily scale chatbot capabilities as your business grows.'
      }
    ]
  },
  process: {
    title: 'Our Chatbot Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Analysis',
        description: 'Understand business goals and chatbot use cases.'
      },
      {
        number: '02',
        title: 'Design & Development',
        description: 'Build conversational flows and integrate AI models.'
      },
      {
        number: '03',
        title: 'Testing & Deployment',
        description: 'Ensure chatbot accuracy and deploy to platforms.'
      },
      {
        number: '04',
        title: 'Monitoring & Optimization',
        description: 'Continuously improve chatbot performance.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'TensorFlow', 'Python', 'Node.js', 'AWS Lex', 'Google Cloud AI']
  },
  stats: [
    { number: '120+', label: 'Chatbots Delivered' },
    { number: '96%', label: 'Client Satisfaction' },
    { number: '25+', label: 'AI Experts' },
    { number: '7+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Chatbot Development Services?',
    paragraphs: [
      'Our chatbot solutions combine AI expertise with business understanding to deliver impactful conversational agents.',
      'We focus on creating scalable, secure, and user-friendly chatbots tailored to your needs.',
      'Our agile development process ensures timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Chatbots Delivered', value: '120+' },
      { label: 'Satisfied Clients', value: '96%' },
      { label: 'AI Experts', value: '25+' },
      { label: 'Years in Business', value: '7+' }
    ]
  }
}

export default function ChatbotDevelopmentClient() {
  return <ServicePageTemplate content={chatbotDevelopmentContent} />
}
