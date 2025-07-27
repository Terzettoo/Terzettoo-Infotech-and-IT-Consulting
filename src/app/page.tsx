// src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import StatsSection from '@/components/sections/StatsSection'

export const metadata = {
  title: 'Terzettoo - Innovative Software Solutions for Modern Businesses',
  description: 'Transform your business with Terzettoo\'s premium software solutions. We deliver cutting-edge web development, mobile apps, and digital transformation services tailored to your needs.',
  keywords: 'Terzettoo, software development, digital transformation, custom software, web development, mobile apps, business solutions, technology consulting',
  openGraph: {
    title: 'Terzettoo - Innovative Software Solutions for Modern Businesses',
    description: 'Transform your business with Terzettoo\'s premium software solutions. Expert developers delivering cutting-edge digital solutions.',
  }
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <StatsSection/>
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
