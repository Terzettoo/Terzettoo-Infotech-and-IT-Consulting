'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Layers, Network, CreditCard, Users, ShieldCheck, BarChart3 } from 'lucide-react'

const content: ServiceContent = {
  hero: {
    title: 'SaaS Strategy',
    subtitle: 'Positioning, Pricing, and Platform',
    description:
      'We design SaaS strategies that align pricing, onboarding, retention, and multi-tenant architecture—so you scale efficiently and profitably.',
    primaryCTA: 'Schedule SaaS Workshop',
    secondaryCTA: 'Explore Success Stories',
    heroImage: '/image/Services/SAASStrategy.png',
  },
  stats: [
    { number: '25%', label: 'Churn Reduced' },
    { number: '30%', label: 'ARPU Growth' },
    { number: '3x', label: 'Onboarding Speed' },
    { number: '99.9%', label: 'Uptime Targets' },
  ],
  overview: {
    title: 'What We Cover',
    description:
      'From market positioning to growth loops and technical strategy—get a cohesive plan you can execute.',
    keyPoints: [
      'ICP, positioning, and messaging',
      'Pricing & packaging strategy',
      'Onboarding & activation design',
      'Retention & expansion loops',
      'Multi-tenant & data isolation',
      'Metering, billing, and compliance',
    ],
  },
  features: {
    title: 'Strategy Pillars',
    items: [
      { icon: CreditCard, title: 'Pricing & Packaging', description: 'Align value tiers to willingness to pay and market segments.' },
      { icon: Users, title: 'Onboarding & Activation', description: 'Frictionless setup and aha moments early.' },
      { icon: BarChart3, title: 'Growth Loops', description: 'In-product virality, referrals, and expansion drivers.' },
      { icon: Network, title: 'Scalable Architecture', description: 'Multi-tenant, usage metering, and fault isolation.' },
      { icon: ShieldCheck, title: 'Trust & Compliance', description: 'Security, SOC 2, GDPR readiness, and data control.' },
      { icon: Layers, title: 'Roadmap & Milestones', description: 'Execution plan with measurable outcomes.' },
    ],
  },
  process: {
    title: 'Engagement Flow',
    steps: [
      { number: '01', title: 'Assess', description: 'Market, product, metrics, and tech baseline.' },
      { number: '02', title: 'Design', description: 'Positioning, pricing, flows, technical plan.' },
      { number: '03', title: 'Pilot', description: 'Test changes with limited cohorts.' },
      { number: '04', title: 'Scale', description: 'Rollout, measure impact, iterate.' },
    ],
  },
  benefits: {
    title: 'Why It Works',
    items: [
      { title: 'Aligned Strategy', description: 'Commercial, product, and tech strategies in sync.' },
      { title: 'Faster Growth', description: 'Focus on drivers that compound over time.' },
      { title: 'Lower Churn', description: 'Design onboarding and value realization deliberately.' },
      { title: 'Future-Proof', description: 'Scalable, compliant technical foundations.' },
    ],
  },
}

export default function SaasStrategyClient() {
  return <ServicePageTemplate content={content} />
}
