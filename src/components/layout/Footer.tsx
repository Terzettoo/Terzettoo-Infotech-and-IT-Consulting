'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#d90429] text-white border-t border-[#ef233c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/Terzettoo_logo_remove_BG.png"
                  alt="Terzettoo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Terzettoo</span>
            </div>

            <p className="text-[#ffffff ] mb-6">
              Delivering premium software solutions that drive business growth and innovation.
            </p>

            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://linkedin.com/company/terzettoo"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-white !hover:text-[#ffb8c6] transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/terzettoo_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-white !hover:text-[#ffb8c6] transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/terzettoo"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-white !hover:text-[#ffb8c6] transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/terzettoo"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-white !hover:text-[#ffb8c6] transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com/terzettoo"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-white !hover:text-[#ffb8c6] transition"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg !font-semibold mb-4 !text-white">Services</h3>
            <ul className="space-y-2 !text-[#ffb8c6]">
              {[
                'Web Development',
                'Mobile Apps',
                'API Development',
                'DevOps',
                'Testing & QA'
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="!text-[#ffffff] hover:!text-[#ffb8c6] font-light transition"
                  > ⇨ &nbsp;
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg !font-semibold mb-4 !text-white">Company</h3>
            <ul className="space-y-2 text-[#ffb8c6]">
              {[
                { label: 'About Us', href: '/company/about' },
                { label: 'Portfolio', href: '/company/portfolio' },
                { label: 'FAQ', href: '/company/faq' },
                { label: 'Contact', href: '/contact' }
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className=" !text-[#ffffff] hover:!text-[#ffb8c6] font-light transition"
                  >⇨ &nbsp;
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg !font-semibold mb-4 !text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 !text-white flex-shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 !text-white" />
                <span>admin@terzettoo.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 !text-white" />
                <span>+91 70690 13316</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 !text-white" />
                <span>+91 6356 633 868</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ef233c] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#ffffff]">
          <p>© {new Date().getFullYear()} Terzettoo. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer