import { Metadata } from 'next'
import DotnetWebDevelopmentClient from './dotnet-web-developmentClient'

export const metadata: Metadata = {
  title: '.NET Web Development Services | Scalable Web Apps | Terzettoo',
  description: 'Build secure, scalable, and high-performance web applications using Microsoft .NET technologies tailored to your business needs.',
  keywords: '.NET web development, ASP.NET Core, C# web apps, scalable web applications, secure web development',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: '.NET Web Development Services | Terzettoo',
    description: 'Custom .NET web applications with a focus on security, scalability, and maintainability.',
    url: 'https://terzettoo.com/dotnet-web-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/dotnet-web-development',
  },
}

export default function DotnetWebDevelopmentPage() {
  return <DotnetWebDevelopmentClient />
}
