// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";

export const metadata = {
  title: "Terzettoo - Innovative Software Solutions for Modern Businesses",
  description:
    "Transform your business with Terzettoo's premium software solutions. We deliver cutting-edge web development, mobile apps, and digital transformation services tailored to your needs.",
  keywords:
    "Terzettoo, software development, digital transformation, custom software, web development, mobile apps, business solutions, technology consulting",
  openGraph: {
    title: "Terzettoo - Innovative Software Solutions for Modern Businesses",
    description:
      "Transform your business with Terzettoo's premium software solutions. Expert developers delivering cutting-edge digital solutions.",
    images: [
      {
        url: 'https://terzettoo.com/Terzettoo_logo_remove_BG.png',
        width: 1200,
        height: 630,
        alt: 'Terzettoo - Infotech and IT Consulting Solutions',
      },
    ],
    siteName: 'Terzettoo',
    url: 'https://terzettoo.com/',
  },
  icons: {
    icon: "/Terzettoo_logo_remove_BG.png",
  },
  alternates: {
    canonical: 'https://terzettoo.com/',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
