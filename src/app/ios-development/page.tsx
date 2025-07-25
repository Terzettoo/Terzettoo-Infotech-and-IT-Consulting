import { Metadata } from 'next'
import IosDevelopmentClient from './ios-developmentClient'

export const metadata: Metadata = {
  title: 'iOS Development Services | Custom iOS Apps | Terzettoo',
  description: 'Custom iOS app development services delivering high-performance, user-friendly applications for all Apple devices.',
  keywords: 'iOS development, iPhone apps, iPad apps, Swift development, Objective-C development, mobile app development',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'iOS Development Services | Terzettoo',
    description: 'Build scalable and secure iOS applications tailored to your business needs with Terzettoo.',
    url: 'https://terzettoo.com/ios-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/ios-development',
  },
}

export default function IosDevelopmentPage() {
  return <IosDevelopmentClient />
}
