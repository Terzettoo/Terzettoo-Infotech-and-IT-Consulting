import { Metadata } from 'next'
import ReactAppDevelopmentClient from './react-app-developmentClient'

export const metadata: Metadata = {
  title: 'React Native App Development | Cross-Platform Mobile Apps | Terzettoo',
  description: 'Build cross-platform mobile apps with React Native. Single codebase for iOS and Android with native performance and faster development cycles.',
  keywords: 'React Native development, cross-platform apps, React Native apps, mobile app development, JavaScript mobile apps',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'React Native App Development | Terzettoo',
    description: 'Create powerful cross-platform mobile applications with React Native. Single codebase, native performance.',
    url: 'https://terzettoo.com/react-app-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://terzettoo.com/react-app-development',
  },
}

export default function ReactAppDevelopmentPage() {
  return <ReactAppDevelopmentClient />
}
