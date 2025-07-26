import { Metadata } from 'next'
import UiUxDevelopmentClient from './ui-ux-developmentClient'

export const metadata: Metadata = {
  title: 'UI/UX Development Services | Engaging User Experiences | Terzettoo',
  description: 'Professional UI/UX development services creating intuitive, visually appealing, and user-centered designs for web and mobile applications.',
  keywords: 'ui ux development, user experience design, user interface design, responsive design, usability testing',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'UI/UX Development Services | Terzettoo',
    description: 'Design engaging and user-friendly interfaces with Terzettoo’s expert UI/UX team.',
    url: 'https://terzettoo.com/ui-ux-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/ui-ux-development',
  },
}

export default function UiUxDevelopmentPage() {
  return <UiUxDevelopmentClient />
}
