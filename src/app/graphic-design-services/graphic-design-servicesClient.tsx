'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { PenTool, Palette, Zap, Users, Globe, Shield } from 'lucide-react'

const graphicDesignServicesContent: ServiceContent = {
  hero: {
    title: 'Graphic Design Services',
    subtitle: 'Creative & Impactful Designs',
    description: 'Deliver visually stunning and brand-aligned graphic design solutions to communicate your message effectively.',
    primaryCTA: 'Start Design Project',
    secondaryCTA: 'View Portfolio',
    heroImage: '/image/Services/Graphic-design.jpg'
  },
  overview: {
    title: 'Comprehensive Graphic Design Services',
    description: 'We provide custom graphic design services including branding, print design, digital graphics, and more.',
    keyPoints: [
      'Brand Identity Design',
      'Marketing Collateral',
      'Digital & Print Graphics',
      'UI/UX Design Support',
      'Creative Concept Development',
      'Ongoing Design Support'
    ]
  },
  features: {
    title: 'Graphic Design Features',
    items: [
      {
        icon: PenTool,
        title: 'Branding & Identity',
        description: 'Create memorable brand identities that resonate with your audience.'
      },
      {
        icon: Palette,
        title: 'Creative Concepts',
        description: 'Innovative design ideas tailored to your business goals.'
      },
      {
        icon: Zap,
        title: 'Fast Turnaround',
        description: 'Efficient design process to meet your deadlines.'
      },
      {
        icon: Users,
        title: 'Collaborative Approach',
        description: 'Work closely with our designers for the best results.'
      },
      {
        icon: Globe,
        title: 'Multi-Channel Design',
        description: 'Designs optimized for print, web, and social media.'
      },
      {
        icon: Shield,
        title: 'Quality Assurance',
        description: 'High-quality designs that meet industry standards.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Our Graphic Design Services',
    items: [
      {
        title: 'Enhanced Brand Recognition',
        description: 'Stand out with unique and consistent branding.'
      },
      {
        title: 'Increased Engagement',
        description: 'Attract and retain customers with compelling visuals.'
      },
      {
        title: 'Professional Quality',
        description: 'Designs that reflect your business professionalism.'
      },
      {
        title: 'Flexible Solutions',
        description: 'Design services tailored to your specific needs.'
      }
    ]
  },
  process: {
    title: 'Our Graphic Design Process',
    steps: [
      {
        number: '01',
        title: 'Discovery & Research',
        description: 'Understand your brand and design requirements.'
      },
      {
        number: '02',
        title: 'Concept Development',
        description: 'Create initial design concepts and ideas.'
      },
      {
        number: '03',
        title: 'Design Execution',
        description: 'Develop final designs and revisions.'
      },
      {
        number: '04',
        title: 'Delivery & Support',
        description: 'Provide final assets and ongoing design support.'
      }
    ]
  },
  technologies: {
    title: 'Tools & Software',
    items: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Figma', 'Sketch', 'CorelDRAW']
  },
  stats: [
    { number: '250+', label: 'Design Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Creative Designers' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Graphic Design Services?',
    paragraphs: [
      'Our creative team delivers impactful designs that align with your brand and business goals.',
      'We focus on quality, creativity, and collaboration to ensure your satisfaction.',
      'Our flexible approach allows us to tailor designs to your unique needs.'
    ],
    facts: [
      { label: 'Projects Completed', value: '250+' },
      { label: 'Satisfied Clients', value: '98%' },
      { label: 'Creative Designers', value: '15+' },
      { label: 'Years in Business', value: '7+' }
    ]
  }
}

export default function GraphicDesignServicesClient() {
  return <ServicePageTemplate content={graphicDesignServicesContent} />
}
