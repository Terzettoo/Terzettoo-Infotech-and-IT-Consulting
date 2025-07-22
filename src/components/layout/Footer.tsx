'use client'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#edf2f4] text-[#2b2d42] border-t border-[#8d99ae]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#d90429] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                T
              </div>
              <span className="text-xl font-bold">Terzettoo</span>
            </div>

            <p className="text-[#8d99ae] mb-6">
              Delivering premium software solutions that drive business growth and innovation.
            </p>

            <div className="space-y-2 text-sm text-[#8d99ae]">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@terzettoo.com
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Tech District, TC 12345
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-[#8d99ae]">
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
                    className="hover:text-[#2b2d42] font-medium transition"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-[#8d99ae]">
              {[
                { label: 'About Us', href: '/company/about' },
                { label: 'Portfolio', href: '/company/portfolio' },
                { label: 'FAQ', href: '/company/faq' },
                { label: 'Contact', href: '/contact' }
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-[#2b2d42] font-medium transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-[#8d99ae] mb-4">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm border border-[#8d99ae]/30 rounded-l-lg focus:ring-2 focus:ring-[#d90429] focus:outline-none bg-white text-[#2b2d42]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#d90429] hover:bg-[#ef233c] transition text-white rounded-r-lg"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8d99ae]/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#8d99ae]">
          <p>© 2024 Terzettoo. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#2b2d42]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#2b2d42]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
