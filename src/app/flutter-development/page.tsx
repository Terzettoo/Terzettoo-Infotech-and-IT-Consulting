import { Metadata } from 'next'
import FlutterDevelopmentClient from './flutter-developmentClient'

export const metadata: Metadata = {
  title: 'Flutter Development Services | Cross-Platform Apps | Terzettoo',
  description: 'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter with Terzettoo.',
  keywords: 'flutter development, cross-platform apps, mobile app development, dart programming, flutter apps, Terzettoo',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Flutter Development Services | Terzettoo',
    description: 'High-performance Flutter apps with expressive UI and native performance across platforms with Terzettoo.',
    url: 'https://www.terzettoo.com/flutter-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/flutter-development',
  },
}

export default function FlutterDevelopmentPage() {
  return <FlutterDevelopmentClient />
}
