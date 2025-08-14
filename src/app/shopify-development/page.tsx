import { Metadata } from 'next'
import ShopifyDevelopmentClient from './shopify-developmentClient'

export const metadata: Metadata = {
  title: 'Shopify Development Services | Custom Shopify Stores | Terzettoo',
  description: 'Custom Shopify development services delivering scalable, secure, and user-friendly online stores tailored to your business needs with Terzettoo.',
  keywords: 'shopify development, custom shopify stores, ecommerce development, shopify themes, shopify apps,Terzettoo',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Shopify Development Services | Terzettoo',
    description: 'Build scalable and customizable Shopify stores with Terzettoo’s expert developers.',
    url: 'https://www.terzettoo.com/shopify-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/shopify-development',
  },
}

export default function ShopifyDevelopmentPage() {
  return <ShopifyDevelopmentClient />
}
