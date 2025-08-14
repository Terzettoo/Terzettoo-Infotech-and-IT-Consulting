import { Metadata } from 'next'
import EcommercePortalDevelopmentClient from './ecommerce-portal-developmentClient'

export const metadata: Metadata = {
  title: 'Ecommerce Portal Development Services | Scalable Online Stores | Terzettoo',
  description: 'Custom ecommerce portal development services to build scalable, secure, and user-friendly online stores tailored to your business needs with Terzettoo.',
  keywords: 'ecommerce portal development, online store development, scalable ecommerce,Terzettoo, secure ecommerce, custom ecommerce solutions',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Ecommerce Portal Development Services | Terzettoo',
    description: 'Build scalable and secure ecommerce portals with Terzettoo’s expert developers to enhance customer experience and drive sales with Terzettoo.',
    url: 'https://www.terzettoo.com/ecommerce-portal-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/ecommerce-portal-development',
  },
}

export default function EcommercePortalDevelopmentPage() {
  return <EcommercePortalDevelopmentClient />
}
