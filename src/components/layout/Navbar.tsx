'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const companyRef = useRef<HTMLDivElement>(null)
  const [mobileServiceOpen, setMobileServiceOpen] = useState<Record<string, boolean>>({})

  const serviceCategories = {
    'Mobile Development': [
      { label: 'Mobile App Development', href: '/mobile-app-development' },
      { label: 'Android App Development', href: '/android-app-development' },
      { label: 'iOS App Development', href: '/ios-app-development' },
      { label: 'iPad App Development', href: '/ipad-app-development' },
      { label: 'React Native Development', href: '/react-app-development' },
      { label: 'Flutter Development', href: '/flutter-development' },
    ],
    'Web Development': [
      { label: 'Web Development', href: '/web-development' },
      { label: 'Frontend Development', href: '/frontend-development' },
      { label: 'React.js Development', href: '/react-js-development' },
      { label: 'E-commerce Development', href: '/ecommerce-portal-development' },
      { label: 'Shopify Development', href: '/shopify-development' },
      { label: 'WordPress Development', href: '/wordpress-development' },
    ],
    'Backend & Technologies': [
      { label: 'Java Development', href: '/java-development' },
      { label: 'PHP Development', href: '/php-development' },
      { label: '.NET Development', href: '/dotnet-web-development' },
      { label: 'Python Development', href: '/python-web-development' },
      { label: 'AWS Development', href: '/amazon-web-services-aws-development' },
    ],
    'AI & Advanced Tech': [
      { label: 'AI/ML Solutions', href: '/ai-ml' },
      { label: 'Data Analytics', href: '/data-analytics' },
      { label: 'Computer Vision', href: '/computer-vision' },
      { label: 'Chatbot Development', href: '/chatbot-development' },
    ],
    'Design & Marketing': [
      { label: 'UI/UX Development', href: '/ui-ux-development' },
      { label: 'Digital Marketing', href: '/digital-marketing' },
      { label: 'SEO Services', href: '/seo-services' },
      { label: 'PPC Advertising', href: '/ppc-advertising' },
      { label: 'Social Media Marketing', href: '/social-media-marketing' },
      { label: 'Content Marketing', href: '/content-marketing-and-strategy' },
      { label: 'Graphic Design', href: '/graphic-design-services' },
    ],
    'Enterprise Solutions': [
      { label: 'ERP Implementation', href: '/erp-implementation-and-customization' },
      { label: 'Shopping Cart Development', href: '/shopping-cart-development' },
    ]
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) {
        setIsCompanyOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Toggle mobile service category
  const toggleMobileCategory = (category: string) => {
    setMobileServiceOpen(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#edf2f4] text-[#2b2d42] border-b border-[#8d99ae]/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              <img src="/logo.png" className="w-4" alt="Logo of Terzettoo" />
            </div>
            <span className="text-xl font-bold text-[#d90429]">terzettoo</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#ef233c] transition-colors">
              Home
            </Link>

            {/* Services Mega Menu */}
            <div 
              className="relative" 
              ref={servicesRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center hover:text-[#ef233c] transition-colors"
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    key="services-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white border border-[#8d99ae]/30 rounded-lg shadow-xl p-6"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(serviceCategories).map(([category, services]) => (
                        <div key={category}>
                          <h4 className="font-semibold text-[#d90429] mb-3 text-sm">
                            {category}
                          </h4>
                          <ul className="space-y-2">
                            {services.map((service, idx) => (
                              <li key={idx}>
                                <Link
                                  href={service.href}
                                  className="text-sm text-[#2b2d42] hover:text-[#d90429] transition block py-1"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative" 
              ref={companyRef}
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
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
                    key="company-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#8d99ae]/30 rounded-lg shadow-xl"
                  >
                    {[
                      { label: 'About Us', href: '/company/about' },
                      { label: 'Portfolio', href: '/company/portfolio' },
                      { label: 'Career', href: '/career' },
                      { label: 'FAQ', href: '/company/faq' },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className={`block px-4 py-2 text-[#2b2d42] hover:bg-[#ef233c]/10 hover:text-[#d90429] transition ${
                          idx === 0 ? 'rounded-t-lg' : idx === 3 ? 'rounded-b-lg' : ''
                        }`}
                        onClick={() => setIsCompanyOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/blog" 
              className="hover:text-[#ef233c] transition-colors"
            >
              Blog
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-[#d90429] !text-white px-4 py-2 rounded-lg font-medium hover:bg-[#ef233c] transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#2b2d42] hover:bg-[#edf2f4]/50 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#edf2f4] border-t border-[#8d99ae]/30 shadow-xl"
          >
            <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                className="block px-4 py-2 rounded-lg text-[#2b2d42] hover:bg-[#d90429]/10 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="px-4 py-2 font-semibold text-[#d90429] text-sm">
                  SERVICES
                </div>
                {Object.entries(serviceCategories).map(([category, services]) => (
                  <div key={category} className="border-b border-[#8d99ae]/20 last:border-0">
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 text-left text-[#2b2d42] hover:bg-[#d90429]/10 transition rounded"
                      onClick={() => toggleMobileCategory(category)}
                    >
                      <span className="text-sm font-medium">{category}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileServiceOpen[category] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileServiceOpen[category] && (
                      <div className="ml-4 py-1">
                        {services.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.href}
                            className="block px-4 py-1 text-sm text-[#2b2d42] hover:bg-[#d90429]/10 transition rounded"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href="/company/about"
                className="block px-4 py-2 rounded-lg text-[#2b2d42] hover:bg-[#d90429]/10 transition"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/company/portfolio"
                className="block px-4 py-2 rounded-lg text-[#2b2d42] hover:bg-[#d90429]/10 transition"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/career"
                className="block px-4 py-2 rounded-lg text-[#2b2d42] hover:bg-[#d90429]/10 transition"
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 rounded-lg text-[#2b2d42] hover:bg-[#d90429]/10 transition"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/company/faq"
                className="block px-4 py-2 rounded-lg text-[#2b2d42] hover:bg-[#d90429]/10 transition"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-2 text-center bg-[#d90429] text-white font-medium rounded-lg hover:bg-[#ef233c] transition"
                onClick={() => setIsOpen(false)}
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