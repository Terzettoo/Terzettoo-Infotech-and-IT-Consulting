import { Metadata } from 'next'
import ClientVendorMatchingClient from './client-vendor-matchingClient'

export const metadata: Metadata = {
  title: 'Client–Vendor Matching | RFP, Shortlisting, Due Diligence | Terzettoo',
  description:
    'We run vendor discovery, RFPs, and due diligence to match you with the right implementation partners—on budget, on time, on quality.',
  alternates: { canonical: 'https://terzettoo.com/client-vendor-matching' },
  openGraph: {
    title: 'Client–Vendor Matching | Terzettoo',
    description: 'Transparent selection, comparable bids, and accountable delivery.',
    url: 'https://terzettoo.com/client-vendor-matching',
    siteName: 'Terzettoo',
    type: 'website',
  },
}

export default function Page() {
  return <ClientVendorMatchingClient />
}
