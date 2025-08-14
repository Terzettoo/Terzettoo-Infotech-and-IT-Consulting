import { Metadata } from 'next'
import ChatbotDevelopmentClient from './chatbot-developmentClient'

export const metadata: Metadata = {
  title: 'Chatbot Development Services | AI Chatbots | Terzettoo',
  description: 'Build intelligent AI-powered chatbots to enhance customer engagement and automate business processes with Terzettoo.',
  keywords: 'chatbot development, AI chatbots, conversational agents,Terzettoo, customer support automation, chatbot services',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Chatbot Development Services | Terzettoo',
    description: 'Custom chatbot solutions leveraging AI and machine learning to improve customer experience and operational efficiency.',
    url: 'https://www.terzettoo.com/chatbot-development',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/chatbot-development',
  },
}

export default function ChatbotDevelopmentPage() {
  return <ChatbotDevelopmentClient />
}
