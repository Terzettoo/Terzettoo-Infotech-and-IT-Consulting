import { Metadata } from 'next'
import DigitalMarketingClient from './digital-marketingClient'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | SEO, PPC & Social Media | Terzettoo',
  description: 'Comprehensive digital marketing services including SEO, PPC, social media marketing, and content strategy to grow your business.',
  keywords: 'digital marketing, SEO, PPC, social media marketing, content marketing, online advertising',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Digital Marketing Services | Terzettoo',
    description: 'Tailored digital marketing strategies to increase brand awareness, drive traffic, and boost conversions.',
    url: 'https://terzettoo.com/digital-marketing',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/digital-marketing',
  },
}

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />
}
