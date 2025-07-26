import { Metadata } from 'next'
import PythonWebDevelopmentClient from './python-web-developmentClient'

export const metadata: Metadata = {
  title: 'Python Web Development Services | Scalable & Secure Web Apps | Terzettoo',
  description: 'Custom Python web development services using Django, Flask, and FastAPI to build scalable, secure, and high-performance web applications.',
  keywords: 'python web development, django development, flask development, fastapi, scalable web apps, secure web applications',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Python Web Development Services | Terzettoo',
    description: 'Build scalable and secure Python web applications tailored to your business needs.',
    url: 'https://terzettoo.com/python-web-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/python-web-development',
  },
}

export default function PythonWebDevelopmentPage() {
  return <PythonWebDevelopmentClient />
}
