import { Metadata } from 'next'
import TechnicalProductRoadmapsClient from './technical-product-roadmapsClient'

export const metadata: Metadata = {
  title: 'Technical Product Roadmaps Consulting | Terzettoo',
  description:
    'Turn strategy into execution with clear, prioritized Technical Product Roadmaps. Align vision, scope, timelines, and feasibility to ship predictably.',
  alternates: { canonical: 'https://terzettoo.com/technical-product-roadmaps' },
  openGraph: {
    title: 'Technical Product Roadmaps Consulting | Terzettoo',
    description:
      'Translate ideas into phased, testable roadmaps with milestones, dependencies, and delivery plans.',
    url: 'https://terzettoo.com/technical-product-roadmaps',
    siteName: 'Terzettoo',
    type: 'website',
  },
}

export default function Page() {
  return <TechnicalProductRoadmapsClient />
}
