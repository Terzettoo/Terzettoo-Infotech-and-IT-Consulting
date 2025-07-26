import { Metadata } from 'next'
import WebDevelopmentClient from './web-developmentClient'

export const metadata: Metadata = {
  title: 'Web Development Services | Modern & Responsive Websites | Terzettoo',
  description: 'Professional web development services delivering fast, scalable, and SEO-friendly websites tailored to your business goals.',
  keywords: 'web development, responsive websites, seo friendly web development, custom web applications, scalable web apps',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Web Development Services | Terzettoo',
    description: 'Build modern and responsive websites with Terzettoo’s expert web development team.',
    url: 'https://terzettoo.com/web-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/web-development',
  },
}

export default function WebDevelopmentPage() {
  return <WebDevelopmentClient />
}
