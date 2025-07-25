import { Metadata } from 'next'
import SeoServicesClient from './seo-servicesClient'

export const metadata: Metadata = {
  title: 'SEO Services | Improve Search Rankings | Terzettoo',
  description: 'Tailored SEO strategies to boost your website’s visibility, drive organic traffic, and increase conversions.',
  keywords: 'seo services, search engine optimization, keyword research, link building, content marketing, seo audit',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'SEO Services | Terzettoo',
    description: 'Comprehensive SEO solutions to enhance your online presence and grow your business.',
    url: 'https://terzettoo.com/seo-services',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/seo-services',
  },
}

export default function SeoServicesPage() {
  return <SeoServicesClient />
}
