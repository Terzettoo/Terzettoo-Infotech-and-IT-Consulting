import { Metadata } from 'next'
import AwsDevelopmentClient from './amazon-web-services-aws-developmentClient'

export const metadata: Metadata = {
  title: 'Amazon Web Services (AWS) Development | Scalable Cloud Solutions | Terzettoo',
  description: 'Leverage AWS cloud services to build scalable, secure, and cost-effective applications tailored to your business needs.',
  keywords: 'aws development, cloud computing, serverless applications, aws migration, cloud architecture',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'AWS Development Services | Terzettoo',
    description: 'Build scalable and secure cloud solutions with Terzettoo’s AWS experts.',
    url: 'https://terzettoo.com/amazon-web-services-aws-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/amazon-web-services-aws-development',
  },
}

export default function AwsDevelopmentPage() {
  return <AwsDevelopmentClient />
}
