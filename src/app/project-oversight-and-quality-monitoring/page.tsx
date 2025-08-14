import { Metadata } from 'next'
import ProjectOversightQualityMonitoringClient from './project-oversight-and-quality-monitoringClient'

export const metadata: Metadata = {
  title: 'Project Oversight & Quality Monitoring | Terzettoo',
  description:
    'Independent PMO-style oversight, QA governance, and delivery audits to keep your projects on track—on time, on budget, on quality with Terzettoo.',
  alternates: { canonical: 'https://www.terzettoo.com/project-oversight-and-quality-monitoring' },
  openGraph: {
    title: 'Project Oversight & Quality Monitoring | Terzettoo',
    description: 'Visibility, governance, and assurance across delivery with Terzettoo.',
    url: 'https://www.terzettoo.com/project-oversight-and-quality-monitoring',
    siteName: 'Terzettoo',
    type: 'website',
  },
}

export default function Page() {
  return <ProjectOversightQualityMonitoringClient />
}
