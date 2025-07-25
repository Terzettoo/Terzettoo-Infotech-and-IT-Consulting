import { Metadata } from 'next'
import ReactJsDevelopmentClient from './react-js-developmentClient'

export const metadata: Metadata = {
  title: 'React JS Development Services | Dynamic Web Apps | Terzettoo',
  description: 'Build fast, scalable, and interactive web applications using React JS with modern development practices.',
  keywords: 'react js development, react web apps, dynamic web applications, frontend development, react experts',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'React JS Development Services | Terzettoo',
    description: 'Custom React JS applications focused on performance, scalability, and user experience.',
    url: 'https://terzettoo.com/react-js-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/react-js-development',
  },
}

export default function ReactJsDevelopmentPage() {
  return <ReactJsDevelopmentClient />
}
