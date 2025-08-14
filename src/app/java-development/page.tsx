import { Metadata } from 'next'
import JavaDevelopmentClient from './java-developmentClient'

export const metadata: Metadata = {
  title: 'Java Development Services | Robust Java Applications | Terzettoo',
  description: 'Custom Java development services delivering secure, scalable, and high-performance applications tailored to your business needs with Terzettoo.',
  keywords: 'Java development, Java applications, Spring Framework, Hibernate, Terzettoo enterprise Java, scalable Java solutions',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Java Development Services | Terzettoo',
    description: 'Build robust and scalable Java applications with Terzettoo’s expert developers.',
    url: 'https://www.terzettoo.com/java-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/java-development',
  },
}

export default function JavaDevelopmentPage() {
  return <JavaDevelopmentClient />
}
