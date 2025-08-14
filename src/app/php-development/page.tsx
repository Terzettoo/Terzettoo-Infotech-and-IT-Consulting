import { Metadata } from 'next'
import PhpDevelopmentClient from './php-developmentClient'

export const metadata: Metadata = {
  title: 'PHP Development Services | Robust Web Applications | Terzettoo',
  description: 'Custom PHP development services delivering secure, scalable, and high-performance web applications tailored to your business needs with Terzettoo.',
  keywords: 'php development, php web applications, laravel, symfony, web development,Terzettoo , scalable php solutions',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'PHP Development Services | Terzettoo',
    description: 'Build robust and scalable PHP applications with Terzettoo’s expert developers with Terzettoo.',
    url: 'https://www.terzettoo.com/php-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/php-development',
  },
}

export default function PhpDevelopmentPage() {
  return <PhpDevelopmentClient />
}
