import { Metadata } from 'next'
import DigitalMarketingClient from './digital-marketingClient'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | SEO, PPC & Social Media | Terzettoo',
  description: 'Comprehensive digital marketing services including SEO, PPC, social media marketing, and content strategy to grow your business with Terzettoo.',
  keywords: 'digital marketing, SEO, PPC, social media marketing,Terzettoo, content marketing, online advertising',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Digital Marketing Services | Terzettoo',
    description: 'Tailored digital marketing strategies to increase brand awareness, drive traffic, and boost conversions with Terzettoo.',
    url: 'https://www.terzettoo.com/digital-marketing',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/digital-marketing',
  },
}

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />
}
