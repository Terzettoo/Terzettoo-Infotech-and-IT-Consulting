import { Metadata } from 'next'
import ContentMarketingClient from './content-marketing-and-strategyClient'

export const metadata: Metadata = {
  title: 'Content Marketing & Strategy Services | Terzettoo',
  description: 'Develop compelling content marketing strategies that drive traffic, engage audiences, and convert leads into customers with Terzettoo.',
  keywords: 'content marketing, content strategy, SEO content, lead generation,Terzettoo ,digital marketing',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Content Marketing & Strategy Services | Terzettoo',
    description: 'Tailored content marketing strategies to grow your brand and increase conversions.',
    url: 'https://www.terzettoo.com/content-marketing-and-strategy',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/content-marketing-and-strategy',
  },
}

export default function ContentMarketingPage() {
  return <ContentMarketingClient />
}
