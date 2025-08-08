'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { ClipboardCheck, GaugeCircle, AlarmCheck, ShieldCheck, GitCommitHorizontal, BarChart2 } from 'lucide-react'

const content: ServiceContent = {
  hero: {
    title: 'Project Oversight & Quality Monitoring',
    subtitle: 'Independent Governance for Predictable Delivery',
    description:
      'We provide neutral oversight across planning, execution, and quality—so you avoid delays, scope creep, and hidden risks.',
    primaryCTA: 'Book a Health Check',
    secondaryCTA: 'Download QA Checklist',
    heroImage: '/image/Services/project-oversight.png',
  },
  stats: [
    { number: '95%', label: 'On-time Deliveries' },
    { number: '30%', label: 'Risk Reduced' },
    { number: '25%', label: 'Defects Lowered' },
    { number: '100%', label: 'Traceable Metrics' },
  ],
  overview: {
    title: 'What We Monitor',
    description:
      'We track plans, risks, and quality signals continuously—and intervene before issues escalate.',
    keyPoints: [
      'Milestones, velocity, burn-down',
      'Risk & dependency registers',
      'Defect leakage & escape rate',
      'Code quality & test coverage',
      'Release readiness scorecards',
      'Stakeholder communication',
    ],
  },
  features: {
    title: 'Oversight Capabilities',
    items: [
      { icon: GaugeCircle, title: 'Delivery Metrics', description: 'Velocity, predictability, and schedule tracking.' },
      { icon: ClipboardCheck, title: 'Quality Governance', description: 'Definition of Done, test coverage, gate reviews.' },
      { icon: AlarmCheck, title: 'Risk Management', description: 'Early identification, owners, and mitigation plans.' },
      { icon: GitCommitHorizontal, title: 'Engineering Health', description: 'PR cadence, cycle time, and CI/CD health.' },
      { icon: ShieldCheck, title: 'Security & Compliance', description: 'Security checks, access control, and audits.' },
      { icon: BarChart2, title: 'Executive Reporting', description: 'Concise dashboards and actionable summaries.' },
    ],
  },
  process: {
    title: 'Governance Flow',
    steps: [
      { number: '01', title: 'Baseline', description: 'Agree metrics, thresholds, and reporting cadence.' },
      { number: '02', title: 'Monitor', description: 'Collect signals from tools and ceremonies.' },
      { number: '03', title: 'Intervene', description: 'Flag deviations and recommend corrective actions.' },
      { number: '04', title: 'Improve', description: 'Retrospectives, learnings, and process tuning.' },
    ],
  },
  benefits: {
    title: 'Value Delivered',
    items: [
      { title: 'Predictability', description: 'Fewer surprises with continuous, transparent tracking.' },
      { title: 'Higher Quality', description: 'Guardrails that reduce defects and rework.' },
      { title: 'Faster Decisions', description: 'Signal-driven recommendations to unblock teams.' },
      { title: 'Stakeholder Trust', description: 'Clear reporting builds confidence across the org.' },
    ],
  },
}

export default function ProjectOversightQualityMonitoringClient() {
  return <ServicePageTemplate content={content} />
}
