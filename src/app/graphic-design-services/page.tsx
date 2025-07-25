import { Metadata } from 'next'
import GraphicDesignServicesClient from './graphic-design-servicesClient'

export const metadata: Metadata = {
  title: 'Graphic Design Services | Creative & Impactful Designs | Terzettoo',
  description: 'Deliver visually stunning and brand-aligned graphic design solutions including branding, print design, and digital graphics.',
  keywords: 'graphic design, branding, print design, digital graphics, creative design services',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Graphic Design Services | Terzettoo',
    description: 'Creative graphic design solutions to communicate your brand message effectively.',
    url: 'https://terzettoo.com/graphic-design-services',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/graphic-design-services',
  },
}

export default function GraphicDesignServicesPage() {
  return <GraphicDesignServicesClient />
}
