import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Terzettoo - Premium Software Solutions',
  description:
    'Professional software development company specializing in web development, mobile apps, API integration, and DevOps solutions.',
  keywords:
    'software development, web development, mobile apps, API development, DevOps, database design',
  authors: [{ name: 'Terzettoo' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#edf2f4] text-[#2b2d42] antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
