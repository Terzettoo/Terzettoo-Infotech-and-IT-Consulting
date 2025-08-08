'use client'

import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { ClipboardList, Target, Workflow, CheckCircle2, FileCheck, Layers } from 'lucide-react'

const content: ServiceContent = {
  hero: {
    title: 'Technical Product Roadmaps',
    subtitle: 'From Vision to Phased, Predictable Delivery',
    description:
      'We convert your product vision into clear, prioritized Technical Product Roadmaps—complete with milestones, dependencies, acceptance checkpoints, and delivery plans—so teams ship predictably with less rework.',
    primaryCTA: 'Start Roadmap Workshop',
    secondaryCTA: 'See Case Studies',
    heroImage: '/image/Services/technical-product-roadmaps.png',
  },
  writtenContent: {
    title: 'Roadmaps That Align Strategy and Execution',
    paragraphs: [
      'Most delays occur because teams aren’t aligned on priorities, success criteria, and constraints. Our roadmap process fixes this with phased planning, stakeholder alignment, and measurable gates.',
      'Deliverables include problem statements, capability sequencing, non-functional priorities, success metrics, and draft test plans—so engineering can execute with confidence.',
    ],
    facts: [
      { label: 'Average Rework Reduced', value: '35%' },
      { label: 'Time-to-Plan', value: '2–4 weeks' },
    ],
  },
  stats: [
    { number: '30%', label: 'Faster Kickoff' },
    { number: '35%', label: 'Less Rework' },
    { number: '100%', label: 'Traceable Milestones' },
    { number: '90%', label: 'Stakeholder Alignment' },
  ],
  overview: {
    title: 'What We Deliver',
    description:
      'We structure roadmaps to be implementable: scope, phases, flows, and acceptance criteria that map directly to tickets and releases.',
    keyPoints: [
      'Problem statement and scope definition',
      'User personas and journey priorities',
      'Functional & non-functional sequencing',
      'Prioritization (MoSCoW) and release plan',
      'Acceptance criteria and test outlines',
      'Success metrics and guardrails',
    ],
  },
  features: {
    title: 'Our Roadmap Approach',
    items: [
      {
        icon: ClipboardList,
        title: 'Discovery Workshops',
        description: 'Facilitated sessions to align business goals, risks, and feasibility.',
      },
      {
        icon: Target,
        title: 'Outcome-Driven Phasing',
        description: 'Define measurable outcomes per phase, not just feature lists.',
      },
      {
        icon: Workflow,
        title: 'Process & Systems Mapping',
        description: 'Map flows, systems, and integrations to prevent scope gaps.',
      },
      {
        icon: FileCheck,
        title: 'Acceptance Checkpoints',
        description: 'Each milestone includes testable acceptance criteria and quality gates.',
      },
      {
        icon: Layers,
        title: 'Dependency Mapping',
        description: 'Identify sequencing, external dependencies, and critical path early.',
      },
      {
        icon: CheckCircle2,
        title: 'Dev-Ready Roadmap Pack',
        description: 'Epics and stories aligned to sprints and releases for execution.',
      },
    ],
  },
  process: {
    title: 'How We Build Your Roadmap',
    steps: [
      { number: '01', title: 'Discovery', description: 'Stakeholders, goals, constraints, and regulatory concerns.' },
      { number: '02', title: 'Model & Prioritize', description: 'Personas, flows, data models, and phase-wise priorities.' },
      { number: '03', title: 'Draft Roadmap', description: 'Milestones, dependencies, acceptance criteria, and risks.' },
      { number: '04', title: 'Sign-off & Handover', description: 'Validation, traceability, backlog creation, and delivery plan.' },
    ],
  },
  technologies: {
    title: 'Artifacts & Tools',
    items: ['Roadmap (Quarterly/Phased)', 'Epics & Stories', 'User Flows', 'Jira/Linear', 'Confluence', 'API Specs (OpenAPI)'],
  },
  benefits: {
    title: 'Why Terzettoo',
    items: [
      { title: 'Clarity & Alignment', description: 'Everyone knows what ships, when, and why.' },
      { title: 'Predictable Delivery', description: 'Phased plans and checkpoints reduce surprises.' },
      { title: 'Less Rework', description: 'Early discovery and acceptance criteria prevent churn.' },
      { title: 'Outcome-Focused', description: 'Roadmaps tied to measurable business results.' },
    ],
  },
}

export default function TechnicalProductRoadmapsClient() {
  return <ServicePageTemplate content={content} />
}
