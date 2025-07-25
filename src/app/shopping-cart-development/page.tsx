import { Metadata } from 'next'
import ShoppingCartDevelopmentClient from './shopping-cart-developmentClient'

export const metadata: Metadata = {
  title: 'Shopping Cart Development Services | Secure Checkout Solutions | Terzettoo',
  description: 'Custom shopping cart development services delivering seamless, secure, and user-friendly checkout experiences.',
  keywords: 'shopping cart development, ecommerce checkout, secure checkout, custom shopping cart, ecommerce solutions',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Shopping Cart Development Services | Terzettoo',
    description: 'Build scalable and secure shopping cart solutions tailored to your ecommerce needs.',
    url: 'https://terzettoo.com/shopping-cart-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/shopping-cart-development',
  },
}

export default function ShoppingCartDevelopmentPage() {
  return <ShoppingCartDevelopmentClient />
}
