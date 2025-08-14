import { Metadata } from 'next'
import GraphicDesignServicesClient from './graphic-design-servicesClient'

export const metadata: Metadata = {
  title: 'Graphic Design Services | Creative & Impactful Designs | Terzettoo',
  description: 'Deliver visually stunning and brand-aligned graphic design solutions including branding, print design, and digital graphics with Terzettoo.',
  keywords: 'graphic design, branding, print design, digital graphics, creative design services, Terzettoo',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Graphic Design Services | Terzettoo',
    description: 'Creative graphic design solutions to communicate your brand message effectively with Terzettoo.',
    url: 'https://www.terzettoo.com/graphic-design-services',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/graphic-design-services',
  },
}

export default function GraphicDesignServicesPage() {
  return <GraphicDesignServicesClient />
}
