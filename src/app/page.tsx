// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";

export const metadata = {
  title: "Terzettoo - Infotech & IT Consulting Solutions",
  description:
    "Empower your business with Terzettoo's comprehensive Infotech and IT consulting solutions. We deliver innovative software, digital transformation, and expert technology consulting for modern enterprises.",
  keywords:
    "Infotech, IT consulting, software solutions, digital transformation, technology consulting, business IT services, custom software, web development, mobile apps, enterprise IT, Terzettoo, IT strategy, IT support, IT solutions, IT partner",
  openGraph: {
    title: "Terzettoo - Infotech & IT Consulting Solutions",
    description:
      "Empower your business with Terzettoo's Infotech and IT consulting expertise. Innovative software, digital transformation, and technology solutions for growth.",
    images: [
      {
        url: 'https://www.terzettoo.com/Terzettoo_logo_remove_BG.png',
        width: 1200,
        height: 630,
        alt: 'Terzettoo - Infotech and IT Consulting Solutions',
      },
    ],
    siteName: 'Terzettoo',
    url: 'https://www.terzettoo.com/',
  },
  icons: {
    icon: "/Terzettoo_logo_remove_BG.png",
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/',
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
