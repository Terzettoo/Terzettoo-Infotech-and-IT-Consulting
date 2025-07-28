import Head from 'next/head'
import Image from 'next/image'
import { CareerClient } from './careerClient'

export default function CareerPage() {
  return (
    <>
      <Head>
        <title>Career Opportunities | Join Our Innovative Team</title>
        <meta name="description" content="Explore exciting career opportunities with our company." />
      </Head>

      {/* Image and Intro Section (outside container for full width) */}
      <section className="relative w-full h-[40vh] mb-16 mt-16">
        {/* Background image */}
        <Image
          src="/image/Others/Careers.jpeg"
          alt="Team working together"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay (optional for better text readability) */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Centered Text Over Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold mb-4 !text-white">Build Your Future With Us</h1>
          <p className="text-xl text-white max-w-3xl">
            Join our team of innovators and problem-solvers. We&apos;re committed to your growth and success while delivering exceptional products to our customers.
          </p>
        </div>
      </section>


      {/* Main Content (wrapped in container) */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <CareerClient />
      </main>
    </>
  )
}
