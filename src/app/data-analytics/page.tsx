import { Metadata } from 'next'
import DataAnalyticsClient from './data-analyticsClient'

export const metadata: Metadata = {
  title: 'Data Analytics Services | Transform Data into Insights | Terzettoo',
  description: 'End-to-end data analytics solutions including data collection, visualization, predictive modeling, and big data processing.',
  keywords: 'data analytics, big data, predictive analytics, data visualization, business intelligence',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Data Analytics Services | Terzettoo',
    description: 'Leverage data analytics to make informed business decisions and drive growth.',
    url: 'https://terzettoo.com/data-analytics',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/data-analytics',
  },
}

export default function DataAnalyticsPage() {
  return <DataAnalyticsClient />
}
