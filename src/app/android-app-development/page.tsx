import { Metadata } from 'next'
import AndroidAppDevelopmentClient from './android-app-developmentClient'

export const metadata: Metadata = {
  title: 'Android App Development Services | Custom Android Apps | Terzettoo',
  description: 'Expert Android app development services delivering scalable, high-performance applications tailored to your business needs with Terzettoo.',
  keywords: 'android app development, custom android apps, Terzettoo, mobile app development, android development services, app development',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Android App Development Services | Terzettoo',
    description: 'Build custom Android applications with Terzettoo’s expert developers. Scalable, secure, and user-friendly apps.',
    url: 'https://www.terzettoo.com/android-app-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/android-app-development',
  },
}

export default function AndroidAppDevelopmentPage() {
  return <AndroidAppDevelopmentClient />
}
