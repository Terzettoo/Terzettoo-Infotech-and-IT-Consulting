import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Terzettoo - Premium Software Solutions',
  description: 'Terzettoo is your trusted partner for premium software solutions. We specialize in custom web development, mobile apps, API integration, and DevOps solutions. Transform your business with our expert digital services.',
  keywords: 'Terzettoo, software development company, web development, mobile apps, API development, DevOps, custom software solutions, digital transformation, software consulting, IT services',
  authors: [{ name: 'Terzettoo' }],
  icons: {
    icon: '/Terzettoo_logo_remove_BG.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://terzettoo.com',
    siteName: 'Terzettoo',
    title: 'Terzettoo - Premium Software Solutions',
    description: 'Terzettoo is your trusted partner for premium software solutions. Transform your business with our expert digital services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Terzettoo - Premium Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terzettoo - Premium Software Solutions',
    description: 'Terzettoo is your trusted partner for premium software solutions. Transform your business with our expert digital services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-site-verification-here',
  },
  metadataBase: new URL('https://terzettoo.com'),
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/Terzettoo_logo_remove_BG.png" type="image/png" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DN9RC5XEDP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DN9RC5XEDP', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen bg-[#edf2f4] text-[#2b2d42] antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

