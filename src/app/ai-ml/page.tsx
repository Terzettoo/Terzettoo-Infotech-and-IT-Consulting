import { Metadata } from 'next'
import AiMlClient from './ai-mlClient'

export const metadata: Metadata = {
  title: 'AI & Machine Learning Services | Terzettoo',
  description: 'Leverage AI and machine learning to transform your business with terzettoo. Custom AI solutions, predictive analytics, and intelligent automation.',
  keywords: 'AI services, machine learning, predictive analytics, AI solutions, intelligent automation, Terzettoo',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'AI & Machine Learning Services | Terzettoo',
    description: 'Custom AI and machine learning solutions to drive innovation and business growth.',
    url: 'https://www.terzettoo.com/ai-ml',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/ai-ml',
  },
}

export default function AiMlPage() {
  return <AiMlClient />
}
