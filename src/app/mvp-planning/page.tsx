import { Metadata } from 'next'
import MVPPlanningClient from './mvp-planningClient'

export const metadata: Metadata = {
  title: 'MVP Planning & Roadmapping | Terzettoo',
  description:
    'Plan, prioritize, and launch a Minimum Viable Product fast. Clear scope, right features, validated roadmap, and efficient go-to-market with Terzettoo.',
  alternates: { canonical: 'https://www.terzettoo.com/mvp-planning' },
  openGraph: {
    title: 'MVP Planning & Roadmapping | Terzettoo',
    description: 'Validate fast, build smart. We scope MVPs that de-risk and deliver ROI with Terzettoo.',
    url: 'https://www.terzettoo.com/mvp-planning',
    siteName: 'Terzettoo',
    type: 'website',
  },
}

export default function Page() {
  return <MVPPlanningClient />
}