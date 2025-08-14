import { Metadata } from 'next'
import MobileAppDevelopmentClient from './mobile-app-developmentClient'

export const metadata: Metadata = {
  title: 'Mobile App Development Services | iOS & Android Apps | Terzettoo',
  description: 'Professional mobile app development services for iOS and Android. Build scalable, user-friendly apps tailored to your business needs with Terzettoo.',
  keywords: 'mobile app development, iOS app development, Android app development, custom mobile apps,Terzettoo , app development services',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Mobile App Development Services | Terzettoo',
    description: 'Build scalable, user-friendly mobile applications for iOS and Android platforms with Terzettoo’s expert developers.',
    url: 'https://www.terzettoo.com/mobile-app-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/mobile-app-development',
  },
}

export default function MobileAppDevelopmentPage() {
  return <MobileAppDevelopmentClient />
}
