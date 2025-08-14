import { Metadata } from 'next'
import ErpImplementationClient from './erp-implementation-and-customizationClient'

export const metadata: Metadata = {
  title: 'ERP Implementation and Customization Services | Streamline Business Operations | Terzettoo',
  description: 'End-to-end ERP implementation and customization services tailored to your business needs for improved efficiency and productivity with Terzettoo.',
  keywords: 'ERP implementation, ERP customization, business process automation, ERP integration, ERP solutions, Terzettoo',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'ERP Implementation and Customization Services | Terzettoo',
    description: 'Implement and customize ERP solutions to optimize your business processes and drive growth with Terzettoo.',
    url: 'https://www.terzettoo.com/erp-implementation-and-customization',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/erp-implementation-and-customization',
  },
}

export default function ErpImplementationPage() {
  return <ErpImplementationClient />
}
