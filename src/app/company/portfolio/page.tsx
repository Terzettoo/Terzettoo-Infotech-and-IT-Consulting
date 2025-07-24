import PortfolioClient from './PortfolioClient'

export const metadata = {
  title: 'Portfolio | Terzettoo Projects & Case Studies',
  description: 'Explore Terzettoo\'s portfolio of successful software projects, web and mobile app solutions, and digital transformation case studies.',
  keywords: 'Terzettoo portfolio, software projects, web development case studies, mobile app portfolio, digital transformation, project showcase',
  openGraph: {
    title: 'Portfolio | Terzettoo Projects & Case Studies',
    description: 'Explore Terzettoo\'s portfolio of successful software projects, web and mobile app solutions, and digital transformation case studies.',
  }
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
