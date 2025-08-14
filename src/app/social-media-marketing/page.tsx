import { Metadata } from 'next'
import SocialMediaMarketingClient from './social-media-marketingClient'

export const metadata: Metadata = {
  title: 'Social Media Marketing Services | Engage & Grow | Terzettoo',
  description: 'Strategic social media marketing to build brand awareness, engage your audience, and drive conversions with Terzettoo.',
  keywords: 'social media marketing, social media campaigns, audience engagement, content creation, paid social ads, Terzettoo',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Social Media Marketing Services | Terzettoo',
    description: 'Tailored social media strategies to maximize your brand’s reach and engagement with Terzettoo.',
    url: 'https://www.terzettoo.com/social-media-marketing',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/social-media-marketing',
  },
}

export default function SocialMediaMarketingPage() {
  return <SocialMediaMarketingClient />
}
