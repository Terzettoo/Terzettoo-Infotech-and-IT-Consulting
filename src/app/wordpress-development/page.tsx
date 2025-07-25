import { Metadata } from 'next'
import WordpressDevelopmentClient from './wordpress-developmentClient'

export const metadata: Metadata = {
  title: 'WordPress Development Services | Custom WordPress Websites | Terzettoo',
  description: 'Custom WordPress development services delivering scalable, secure, and SEO-friendly websites tailored to your business needs.',
  keywords: 'wordpress development, custom wordpress sites, wordpress themes, wordpress plugins, seo friendly wordpress',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'WordPress Development Services | Terzettoo',
    description: 'Build scalable and customizable WordPress websites with Terzettoo’s expert developers.',
    url: 'https://terzettoo.com/wordpress-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/wordpress-development',
  },
}

export default function WordpressDevelopmentPage() {
  return <WordpressDevelopmentClient />
}
