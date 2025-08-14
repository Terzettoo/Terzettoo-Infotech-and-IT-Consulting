import { Metadata } from 'next'
import IpadAppDevelopmentClient from './ipad-app-developmentClient'

export const metadata: Metadata = {
  title: 'iPad App Development Services | Custom iPad Apps | Terzettoo',
  description: 'Custom iPad app development services delivering high-performance, user-friendly applications for all iPad models with Terzettoo.',
  keywords: 'iPad app development, iPad apps, Swift development, Objective-C development,Terzettoo , mobile app development',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'iPad App Development Services | Terzettoo',
    description: 'Build scalable and secure iPad applications tailored to your business needs with Terzettoo.',
    url: 'https://www.terzettoo.com/ipad-app-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/ipad-app-development',
  },
}

export default function IpadAppDevelopmentPage() {
  return <IpadAppDevelopmentClient />
}
