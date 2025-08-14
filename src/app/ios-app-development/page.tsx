import { Metadata } from 'next'
import IosAppDevelopmentClient from './ios-app-developmentClient'

export const metadata: Metadata = {
  title: 'iOS App Development Services | iPhone & iPad Apps | Terzettoo',
  description: 'Custom iOS app development services delivering high-performance, user-friendly applications for iPhone and iPad devices with Terzettoo.',
  keywords: 'iOS app development, iPhone apps, iPad apps, Swift development, Objective-C development, mobile app development',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'iOS App Development Services | Terzettoo',
    description: 'Build scalable and secure iOS applications tailored to your business needs with Terzettoo with Terzettoo.',
    url: 'https://www.terzettoo.com/ios-app-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/ios-app-development',
  },
}

export default function IosAppDevelopmentPage() {
  return <IosAppDevelopmentClient />
}
