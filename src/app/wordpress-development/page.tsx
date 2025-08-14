import { Metadata } from 'next'
import WordpressDevelopmentClient from './wordpress-developmentClient'

export const metadata: Metadata = {
  title: 'WordPress Development Services | Custom WordPress Websites | Terzettoo',
  description: 'Custom WordPress development services delivering scalable, secure, and SEO-friendly websites tailored to your business needs with Terzettoo.',
  keywords: 'wordpress development, custom wordpress sites, wordpress themes, wordpress plugins, Terzettoo, seo friendly wordpress',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'WordPress Development Services | Terzettoo',
    description: 'Build scalable and customizable WordPress websites with Terzettoo’s expert developers with Terzettoo.',
    url: 'https://www.terzettoo.com/wordpress-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/wordpress-development',
  },
}

export default function WordpressDevelopmentPage() {
  return <WordpressDevelopmentClient />
}
