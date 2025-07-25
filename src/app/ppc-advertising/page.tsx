import { Metadata } from 'next'
import PpcAdvertisingClient from './ppc-advertisingClient'

export const metadata: Metadata = {
  title: 'PPC Advertising Services | Targeted Campaigns | Terzettoo',
  description: 'Expertly managed pay-per-click advertising campaigns to drive immediate traffic and conversions.',
  keywords: 'ppc advertising, pay-per-click, google ads, bing ads, social media advertising, targeted campaigns',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'PPC Advertising Services | Terzettoo',
    description: 'Maximize ROI with targeted PPC campaigns managed by Terzettoo’s experts.',
    url: 'https://terzettoo.com/ppc-advertising',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/ppc-advertising',
  },
}

export default function PpcAdvertisingPage() {
  return <PpcAdvertisingClient />
}
