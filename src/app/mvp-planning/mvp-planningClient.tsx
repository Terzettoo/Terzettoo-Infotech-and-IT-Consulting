'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Rocket, LayoutGrid, Gauge, BarChart2, CheckCircle2, LucideRocket } from 'lucide-react'

const content: ServiceContent = {
  hero: {
    title: 'MVP Planning',
    subtitle: 'Validate Fast. Launch Smart.',
    description:
      'We help you identify the smallest, most valuable product slice to validate your market hypothesis—then plan a delivery that is fast, lean, and investor-ready.',
    primaryCTA: 'Plan Your MVP',
    secondaryCTA: 'See Launch Results',
    heroImage: '/image/Services/mvp-planning.png',
  },
  stats: [
    { number: '4+', label: 'Week MVPs' },
    { number: '50%', label: 'Cost Saved' },
    { number: '3x', label: 'Faster Decisions' },
    { number: '90%', label: 'Hypothesis Coverage' },
  ],
  overview: {
    title: 'MVP that Actually Moves Needles',
    description:
      'We focus on core value delivery and validation loops: what’s essential to prove demand and collect data.',
    keyPoints: [
      'Core value proposition and JTBD',
      'Feature slicing & prioritization',
      'Go-to-market and feedback loops',
      'Analytics & success metrics',
      'Pilot audience and rollout plan',
      'Post-MVP roadmap',
    ],
  },
  features: {
    title: 'Planning Pillars',
    items: [
      { icon: Rocket, title: 'Value First', description: 'Ship the smallest version that delivers core value.' },
      { icon: LayoutGrid, title: 'Feature Slicing', description: 'Prioritize learnings and build paths deliberately.' },
      { icon: Gauge, title: 'Time-boxed Delivery', description: 'Strict constraints keep momentum and focus.' },
      { icon: BarChart2, title: 'Measure & Learn', description: 'Instrument analytics and define target signals.' },
      { icon: CheckCircle2, title: 'Validation Gates', description: 'Predefined criteria trigger iterate or expand.' },
      { icon: LucideRocket, title: 'Investor-Ready', description: 'Narrative, milestones, and ROI story included.' },
    ],
  },
  process: {
    title: 'From Idea to MVP',
    steps: [
      { number: '01', title: 'Define', description: 'Users, pains, JTBD, core outcomes.' },
      { number: '02', title: 'Slice', description: 'Must-have vs. nice-to-have, risk areas.' },
      { number: '03', title: 'Build', description: 'Time-boxed sprints, demo cadence.' },
      { number: '04', title: 'Validate', description: 'Analyze signals and plan next iteration.' },
    ],
  },
  benefits: {
    title: 'Why Work With Us',
    items: [
      { title: 'Reduce Burn', description: 'Avoid building features that don’t contribute to validation.' },
      { title: 'Investor Confidence', description: 'A credible plan with clear metrics and milestones.' },
      { title: 'Momentum', description: 'Tight feedback loops to accelerate product-market fit.' },
      { title: 'Clarity', description: 'Everyone aligned on scope, risk, and success signals.' },
    ],
  },
}

export default function MVPPlanningClient() {
  return <ServicePageTemplate content={content} />
}
