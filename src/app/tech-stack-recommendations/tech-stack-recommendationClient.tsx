'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Layers, CloudCog, ServerCog, Database, Shield, Gauge } from 'lucide-react'

const content: ServiceContent = {
  hero: {
    title: 'Tech Stack Recommendation',
    subtitle: 'Right Tools for the Right Job',
    description:
      'We recommend technology stacks that fit your product constraints: performance, security, scalability, maintainability, and team skills.',
    primaryCTA: 'Get Stack Review',
    secondaryCTA: 'See Reference Stacks',
    heroImage: '/image/Services/tech-stack.png',
  },
  stats: [
    { number: '40%', label: 'Fewer Incidents' },
    { number: '25%', label: 'Faster Delivery' },
    { number: '30%', label: 'Lower Infra Costs' },
    { number: '100%', label: 'Security Baselines' },
  ],
  overview: {
    title: 'Evaluation Dimensions',
    description:
      'We assess trade-offs across business needs, team capability, and technical constraints.',
    keyPoints: [
      'Performance & latency targets',
      'Security & compliance requirements',
      'Scalability & multi-region needs',
      'Team skills & hiring markets',
      'Vendor lock-in risk & TCO',
      'Operational maturity & SLAs',
    ],
  },
  features: {
    title: 'What You Receive',
    items: [
      { icon: Layers, title: 'Reference Architectures', description: 'High-level designs mapped to your use cases.' },
      { icon: ServerCog, title: 'Backend Options', description: 'Frameworks, languages, patterns best suited to your goals.' },
      { icon: Database, title: 'Data Layer Choices', description: 'OLTP, OLAP, caches, and streams—right tools for data.' },
      { icon: CloudCog, title: 'Cloud & DevOps', description: 'Infra as code, CI/CD, observability, and cost guardrails.' },
      { icon: Shield, title: 'Security Controls', description: 'AuthN/Z, secrets, encryption, least privilege access.' },
      { icon: Gauge, title: 'Benchmarks & Trade-offs', description: 'Comparative analysis with measurable criteria.' },
    ],
  },
  process: {
    title: 'How We Recommend',
    steps: [
      { number: '01', title: 'Assess', description: 'Current state, goals, constraints.' },
      { number: '02', title: 'Compare', description: 'Shortlist and benchmark alternatives.' },
      { number: '03', title: 'Design', description: 'Propose reference architecture & stack.' },
      { number: '04', title: 'Plan', description: 'Adoption plan, skills, and migration steps.' },
    ],
  },
  benefits: {
    title: 'Outcomes You Get',
    items: [
      { title: 'Reduced Risk', description: 'Avoid brittle choices and unnecessary complexity.' },
      { title: 'Speed with Safety', description: 'Ship faster without sacrificing maintainability.' },
      { title: 'Cost Control', description: 'Stacks that scale predictably with usage.' },
      { title: 'Team Fit', description: 'Choices that your team can own and grow with.' },
    ],
  },
}

export default function TechStackRecommendationClient() {
  return <ServicePageTemplate content={content} />
}
