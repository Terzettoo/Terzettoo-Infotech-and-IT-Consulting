'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#edf2f4] text-[#2b2d42] border-b border-[#8d99ae]/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#d90429] rounded-lg flex items-center justify-center text-white font-bold text-sm">
              T
            </div>
            <span className="text-xl font-bold text-[#2b2d42]">Terzettoo</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#ef233c] transition-colors">Home</Link>
            <Link href="/services" className="hover:text-[#ef233c] transition-colors">Services</Link>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className="flex items-center hover:text-[#ef233c] transition-colors"
              >
                Company
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isCompanyOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    key="dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#8d99ae]/30 rounded-lg shadow-xl"
                  >
                    {[
                      { label: 'About Us', href: '/company/about' },
                      { label: 'Portfolio', href: '/company/portfolio' },
                      { label: 'FAQ', href: '/company/faq' }
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className={`block px-4 py-2 text-[#2b2d42] hover:bg-[#ef233c]/10 hover:text-[#d90429] transition ${
                          idx === 0 ? 'rounded-t-lg' : idx === 2 ? 'rounded-b-lg' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-[#d90429] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#ef233c] transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2b2d42] hover:bg-[#edf2f4]/50 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#edf2f4] border-t border-[#8d99ae]/30 shadow-xl"
          >
            <div className="px-4 py-4 space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'About Us', href: '/company/about' },
                { label: 'Portfolio', href: '/company/portfolio' },
                { label: 'FAQ', href: '/company/faq' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg text-[#2b2d42] hover:bg-[#d90429]/10 transition"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="block px-4 py-2 text-center bg-[#d90429] text-white font-medium rounded-lg hover:bg-[#ef233c] transition"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
