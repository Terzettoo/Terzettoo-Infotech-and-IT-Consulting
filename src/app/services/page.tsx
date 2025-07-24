import ServicesClient from './ServicesClient'

export const metadata = {
  title: 'Services | Terzettoo Software Development & Digital Solutions',
  description: 'Discover Terzettoo\'s full range of software development services, including web development, mobile apps, API integration, DevOps, and consulting.',
  keywords: 'Terzettoo services, software development, web development, mobile app development, API integration, DevOps, IT consulting, digital solutions',
  openGraph: {
    title: 'Services | Terzettoo Software Development & Digital Solutions',
    description: 'Discover Terzettoo\'s full range of software development services, including web development, mobile apps, API integration, DevOps, and consulting.',
  }
}

export default function ServicesPage() {
  return <ServicesClient />
}
