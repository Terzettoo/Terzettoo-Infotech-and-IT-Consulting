'use client'
import { motion } from 'framer-motion'
import { Users, Target, Eye, Award } from 'lucide-react'

const teamMembers = [
  {
    name: 'Alex Rodriguez',
    role: 'CEO & Full-Stack Developer',
    image: '/team/alex.jpg',
    bio: '10+ years of experience in software architecture and team leadership.',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Frontend Developer',
    image: '/team/sarah.jpg',
    bio: 'Expert in React, Next.js, and modern UI/UX design principles.',
  },
  {
    name: 'Michael Kim',
    role: 'Backend Developer',
    image: '/team/michael.jpg',
    bio: 'Specialized in scalable APIs, databases, and cloud infrastructure.',
  },
  {
    name: 'Emma Wilson',
    role: 'Mobile App Developer',
    image: '/team/emma.jpg',
    bio: 'React Native and Flutter expert with 50+ published apps.',
  },
]

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description:
      'We stay ahead of technology trends to deliver cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description:
      'Your success is our success. We build lasting partnerships.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description:
      'We maintain the highest standards in code quality and project delivery.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'Clear communication and honest project updates throughout development.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20 pb-16 bg-[#edf2f4] text-[#2b2d42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">About Terzettoo</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#8d99ae]">
            We&apos;re a passionate team of developers, designers, and innovators dedicated to 
            creating exceptional software solutions that drive business growth.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-[#8d99ae]/20"
          >
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-[#d90429] mr-3" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="leading-relaxed text-[#8d99ae]">
              To empower businesses with innovative, scalable, and user-centric software solutions 
              that solve real-world problems and create meaningful digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-[#8d99ae]/20"
          >
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-[#d90429] mr-3" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="leading-relaxed text-[#8d99ae]">
              To be the leading software development partner that transforms ideas into 
              exceptional digital products, setting new standards for quality and innovation.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-white rounded-xl shadow-md border border-[#8d99ae]/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ef233c]/10 rounded-xl mb-4">
                  <value.icon className="h-6 w-6 text-[#d90429]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-[#8d99ae]">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Meet the Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-[#d90429] text-white flex items-center justify-center text-2xl font-bold shadow-md">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-[#d90429] font-medium mb-2">{member.role}</p>
                <p className="text-sm text-[#8d99ae]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
