'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Camera, Cpu, Zap, Users, Globe, Shield } from 'lucide-react'

const computerVisionContent: ServiceContent = {
  hero: {
    title: 'Computer Vision',
    subtitle: 'Advanced Image & Video Analysis',
    description: 'Leverage computer vision technologies to extract meaningful information from images and videos, enabling automation and enhanced decision-making.',
    primaryCTA: 'Start Computer Vision Project',
    secondaryCTA: 'Explore Solutions',
    heroImage: '📷'
  },
  overview: {
    title: 'Comprehensive Computer Vision Services',
    description: 'We provide custom computer vision solutions including object detection, facial recognition, and image classification tailored to your business needs.',
    keyPoints: [
      'Object Detection & Recognition',
      'Facial Recognition',
      'Image & Video Analysis',
      'Real-Time Processing',
      'Custom Model Development',
      'Integration & Deployment'
    ]
  },
  features: {
    title: 'Computer Vision Features',
    items: [
      {
        icon: Cpu,
        title: 'Deep Learning Models',
        description: 'Utilize state-of-the-art neural networks for accurate image analysis.'
      },
      {
        icon: Camera,
        title: 'High-Resolution Processing',
        description: 'Handle high-resolution images and videos efficiently.'
      },
      {
        icon: Zap,
        title: 'Real-Time Analysis',
        description: 'Process visual data in real-time for immediate insights.'
      },
      {
        icon: Users,
        title: 'User Behavior Insights',
        description: 'Analyze user interactions through visual data.'
      },
      {
        icon: Globe,
        title: 'Scalable Solutions',
        description: 'Computer vision systems designed to grow with your business.'
      },
      {
        icon: Shield,
        title: 'Data Security',
        description: 'Ensure privacy and security of visual data.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Computer Vision',
    items: [
      {
        title: 'Automation',
        description: 'Automate visual inspection and monitoring tasks.'
      },
      {
        title: 'Improved Accuracy',
        description: 'Enhance decision-making with precise image analysis.'
      },
      {
        title: 'Cost Reduction',
        description: 'Reduce manual labor and operational costs.'
      },
      {
        title: 'Innovative Solutions',
        description: 'Leverage cutting-edge technology for competitive advantage.'
      }
    ]
  },
  process: {
    title: 'Our Computer Vision Process',
    steps: [
      {
        number: '01',
        title: 'Data Collection',
        description: 'Gather and label visual data.'
      },
      {
        number: '02',
        title: 'Model Training',
        description: 'Develop and train computer vision models.'
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
    items: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'Keras', 'AWS Rekognition', 'Azure Cognitive Services']
  },
  stats: [
    { number: '100+', label: 'Computer Vision Projects' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '20+', label: 'AI Experts' },
    { number: '7+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Computer Vision Services?',
    paragraphs: [
      'Our computer vision team delivers innovative solutions tailored to your business challenges.',
      'We focus on accuracy, scalability, and security to ensure impactful results.',
      'Our agile approach guarantees timely delivery and continuous improvement.'
    ],
    facts: [
      { label: 'Projects Delivered', value: '100+' },
      { label: 'Satisfied Clients', value: '95%' },
      { label: 'AI Experts', value: '20+' },
      { label: 'Years in Business', value: '7+' }
    ]
  }
}

export default function ComputerVisionClient() {
  return <ServicePageTemplate content={computerVisionContent} />
}
