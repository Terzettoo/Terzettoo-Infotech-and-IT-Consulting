import { Metadata } from 'next'
import FrontendDevelopmentClient from './frontend-developmentClient'

export const metadata: Metadata = {
  title: 'Frontend Development Services | Responsive Web Apps | Terzettoo',
  description: 'Create visually appealing, responsive, and user-friendly frontend applications using modern frameworks and technologies with Terzettoo.',
  keywords: 'frontend development, responsive web design, React development, Angular development, Vue.js development, web applications, Terzettoo',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Frontend Development Services | Terzettoo',
    description: 'Build engaging and SEO-friendly frontend applications tailored to your business needs with Terzettoo.',
    url: 'https://www.terzettoo.com/frontend-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/frontend-development',
  },
}

export default function FrontendDevelopmentPage() {
  return <FrontendDevelopmentClient />
}
