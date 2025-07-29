'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Smartphone, Code, Zap, Shield, Users, Globe } from 'lucide-react'

const androidAppDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Android App Development',
    subtitle: 'Robust Android Solutions',
    description: 'Develop high-quality, scalable Android applications tailored to your business needs. Our expert team ensures seamless performance across all Android devices.',
    primaryCTA: 'Start Android Project',
    secondaryCTA: 'View Android Apps',
    heroImage: '/image/Services/android-app-development.webp'
  },
  overview: {
    title: 'Comprehensive Android App Development',
    description: 'We specialize in creating custom Android apps that deliver exceptional user experiences and drive business growth.',
    keyPoints: [
      'Custom Android App Design',
      'Performance Optimization',
      'Integration with Backend Systems',
      'Agile Development Methodology',
      'Support for Multiple Android Versions',
      'Post-Launch Maintenance'
    ]
  },
  features: {
    title: 'Android App Development Features',
    items: [
      {
        icon: Code,
        title: 'Custom UI/UX',
        description: 'Designing intuitive and engaging user interfaces tailored for Android users.'
      },
      {
        icon: Zap,
        title: 'Optimized Performance',
        description: 'Ensuring smooth and responsive app performance on all devices.'
      },
      {
        icon: Smartphone,
        title: 'Device Compatibility',
        description: 'Supporting a wide range of Android devices and OS versions.'
      },
      {
        icon: Users,
        title: 'User-Centric Design',
        description: 'Focusing on user experience to increase engagement and retention.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Apps designed to scale and serve users worldwide.'
      },
      {
        icon: Shield,
        title: 'Security Best Practices',
        description: 'Implementing robust security measures to protect user data.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Our Android App Development',
    items: [
      {
        title: 'Faster Time to Market',
        description: 'Efficient development cycles to launch your app quickly.'
      },
      {
        title: 'Cost-Effective Solutions',
        description: 'Optimized development processes to reduce costs without compromising quality.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Apps built to grow with your business needs.'
      },
      {
        title: 'Dedicated Support',
        description: 'Ongoing maintenance and updates from our expert team.'
      }
    ]
  },
  process: {
    title: 'Our Android App Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Gathering',
        description: 'Understanding your business goals and app requirements.'
      },
      {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Creating user-centric designs and interactive prototypes.'
      },
      {
        number: '03',
        title: 'Development & Testing',
        description: 'Agile development with continuous testing and quality assurance.'
      },
      {
        number: '04',
        title: 'Deployment & Maintenance',
        description: 'Launching the app and providing ongoing support and updates.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Firebase', 'Retrofit', 'RxJava', 'JUnit']
  },
  stats: [
    { number: '150+', label: 'Android Apps Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Expert Developers' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Android App Development Services?',
    paragraphs: [
      'Our Android app development team delivers custom, high-quality applications tailored to your business needs.',
      'We focus on performance optimization, user-centric design, and scalable architecture to ensure your app’s success.',
      'Our agile methodology ensures timely delivery and continuous improvement based on user feedback.'
    ],
    facts: [
      { label: 'Apps Delivered', value: '150+' },
      { label: 'Satisfied Clients', value: '98%' },
      { label: 'Expert Developers', value: '40+' },
      { label: 'Years in Business', value: '12+' }
    ]
  }
}

export default function AndroidAppDevelopmentClient() {
  return <ServicePageTemplate content={androidAppDevelopmentContent} />
}
