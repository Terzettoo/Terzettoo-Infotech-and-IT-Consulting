import FAQClient from './FAQClient'

export const metadata = {
  title: 'FAQ | Terzettoo Frequently Asked Questions & Support',
  description: 'Find answers to common questions about Terzettoo\'s software services, pricing, process, and support. Get the information you need to start your project.',
  keywords: 'Terzettoo FAQ, software support, project questions, pricing, development process, Terzettoo help, client support',
  openGraph: {
    title: 'FAQ | Terzettoo Frequently Asked Questions & Support',
    description: 'Find answers to common questions about Terzettoo\'s software services, pricing, process, and support. Get the information you need to start your project.',
  }
}

export default function FAQPage() {
  return <FAQClient />
}
