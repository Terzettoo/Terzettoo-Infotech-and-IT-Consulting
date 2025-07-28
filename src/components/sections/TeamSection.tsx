'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Globe } from 'lucide-react'

const TeamSection = () => {
  const teamMembers = [

    {
      name: 'Bhavin Kapadiya',
      role: 'Full Stack Developer',
      image: '/image/Team/Bhavin.JPG',
      social: {
        github: 'http://github.com/bhavin522/',
        linkedin: 'https://www.linkedin.com/in/bhavin-kapadiya-dev/',
        globe: 'https://bhavin-kapadiya.vercel.app/'
      }
    },
    {
      name: 'Jatin Maurya',
      role: 'Full Stack Developer',
      image: '/image/Team/unnamed.png',
      social: {
        github: 'https://github.com/mauryajatin45',
        linkedin: 'https://www.linkedin.com/in/mauryajatin/',
        globe: 'https://www.mauryajatin.me'
      }
    },
    {
      name: 'Jigar Prajapati',
      role: 'Wordpress and Shopify Developer',
      image: '/image/Team/Jigar.jpg',
      social: {
        github: 'https://github.com/jigar8849',
        linkedin: 'https://www.linkedin.com/in/jigarkumar-prajapati-a6a7b9237/',
        globe: 'https://portfolio-khaki-chi-11.vercel.app/'
      }
    }
  ]

  return (
    <section className="py-20 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[#d90429]/5 transform -skew-y-3 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#ef233c]/10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#d90429]/10 rounded-full mb-4">
            <span className="text-[#d90429] font-medium text-sm">The Brains Behind</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Innovators</h2>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
            The brilliant minds transforming ideas into digital reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full max-w-md mx-auto"
              style={{ aspectRatio: '4 / 5' }} // 4:5 aspect ratio applied
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                {/* Profile Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#d90429]/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  {/* Name and Role */}
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl !text-white font-bold mb-1">{member.name}</h3>
                    <p className="font-medium">{member.role}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center !text-white hover:text-[#d90429] transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center !text-white hover:text-[#d90429] transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.globe}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center !text-white hover:text-[#d90429] transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
