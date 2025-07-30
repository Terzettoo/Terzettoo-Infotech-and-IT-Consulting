import ContactClient from './ContactClient'

export const metadata = {
  title: 'Contact Terzettoo | Get in Touch for Software Solutions',
  description: 'Contact Terzettoo for custom software development, web and mobile app solutions. Reach out to our team for consultations, quotes, and business inquiries.',
  keywords: 'Contact Terzettoo, software development contact, web development inquiry, mobile app consultation, business software solutions, Ahmedabad, India',
  openGraph: {
    title: 'Contact Terzettoo | Get in Touch for Software Solutions',
    description: 'Contact Terzettoo for custom software development, web and mobile app solutions. Reach out to our team for consultations, quotes, and business inquiries.',
  },
  alternates: {
    canonical: 'https://terzettoo.com/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
