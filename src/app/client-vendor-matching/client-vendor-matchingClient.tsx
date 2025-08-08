'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { FileSearch, FileSignature, BadgeCheck, Scale, ShieldCheck, Handshake } from 'lucide-react'

const content: ServiceContent = {
  hero: {
    title: 'Client–Vendor Matching',
    subtitle: 'Find the Right Partner, First Time',
    description:
      'We manage the vendor selection process end-to-end—RFPs, technical vetting, comparable scoring, and contract safeguards—so you choose confidently.',
    primaryCTA: 'Start Vendor Search',
    secondaryCTA: 'Request RFP Template',
    heroImage: '/image/Services/client-vendor-matching.png',
  },
  stats: [
    { number: '60%', label: 'Faster Shortlists' },
    { number: '20%', label: 'Avg. Cost Savings' },
    { number: '100%', label: 'Comparable Bids' },
    { number: '0', label: 'Surprise Clauses' },
  ],
  overview: {
    title: 'Selection You Can Trust',
    description:
      'We bring structure and transparency to the selection process with clear scoring models and due diligence.',
    keyPoints: [
      'RFP creation and vendor outreach',
      'Comparable evaluation matrices',
      'Security & compliance checks',
      'Technical interviews & references',
      'Contract & SLA guidance',
      'Post-award onboarding',
    ],
  },
  features: {
    title: 'What’s Included',
    items: [
      { icon: FileSearch, title: 'Discovery & RFP', description: 'Define scope and send structured RFPs to the right vendors.' },
      { icon: Scale, title: 'Comparable Scoring', description: 'Price vs. capability vs. risk—side-by-side scoring.' },
      { icon: BadgeCheck, title: 'Due Diligence', description: 'Security posture, delivery maturity, and references.' },
      { icon: FileSignature, title: 'Contract Guardrails', description: 'SLA, penalties, IP, and exit provisions.' },
      { icon: ShieldCheck, title: 'Risk Management', description: 'Identify red flags and mitigation before award.' },
      { icon: Handshake, title: 'Onboarding Support', description: 'Smooth kickoff, communication cadence, and tools.' },
    ],
  },
  process: {
    title: 'Matching Process',
    steps: [
      { number: '01', title: 'Define', description: 'Scope, criteria, and target vendor profile.' },
      { number: '02', title: 'Source', description: 'RFP issuance, Q&A, and shortlist.' },
      { number: '03', title: 'Validate', description: 'Interviews, PoCs, security checks.' },
      { number: '04', title: 'Award', description: 'Contract finalization and onboarding.' },
    ],
  },
  benefits: {
    title: 'Why Choose Us',
    items: [
      { title: 'Comparable Bids', description: 'Apples-to-apples comparison eliminates ambiguity.' },
      { title: 'Lower Risk', description: 'Structured diligence prevents expensive mistakes.' },
      { title: 'Speed & Clarity', description: 'Shortlists you can act on quickly.' },
      { title: 'Aligned Contracts', description: 'Terms that protect your IP and timelines.' },
    ],
  },
}

export default function ClientVendorMatchingClient() {
  return <ServicePageTemplate content={content} />
}
