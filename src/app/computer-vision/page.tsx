import { Metadata } from 'next'
import ComputerVisionClient from './computer-visionClient'

export const metadata: Metadata = {
  title: 'Computer Vision Services | Image & Video Analysis | Terzettoo',
  description: 'Custom computer vision solutions including object detection, facial recognition, and image classification to automate and enhance business processes with Terzettoo.',
  keywords: 'computer vision, image analysis, video analysis, object detection, facial recognition, AI solutions, Terzettoo',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Computer Vision Services | Terzettoo',
    description: 'Leverage advanced computer vision technologies to transform your business with automation and insights with Terzettoo.',
    url: 'https://www.terzettoo.com/computer-vision',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/computer-vision',
  },
}

export default function ComputerVisionPage() {
  return <ComputerVisionClient />
}
