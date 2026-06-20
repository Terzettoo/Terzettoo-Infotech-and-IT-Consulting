'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const shopifyStores = [
  { id: 1, name: 'Ala Couture', url: 'https://www.alacouture.com/', image: '/image/ShopifyStore/1.webp' },
  { id: 2, name: 'Loosid', url: 'https://getloosid.com/', image: '/image/ShopifyStore/2.webp' },
  { id: 3, name: 'MRJOIAS', url: 'https://mrjoias.pt/', image: '/image/ShopifyStore/3.webp' },
  { id: 4, name: 'Total Saloon Supplies', url: 'https://totalsalonsupplies.com/', image: '/image/ShopifyStore/4.webp' },
  { id: 5, name: 'efendina', url: 'https://efendina.com/en-gl', image: '/image/ShopifyStore/5.webp' },
  { id: 6, name: 'Atelier Mariniere', url: 'https://ateliermariniere.com/', image: '/image/ShopifyStore/6.webp' },
  { id: 7, name: 'My Daily Therapy', url: 'https://mydailytherapy.com/', image: '/image/ShopifyStore/7.webp' },
  { id: 8, name: 'I love Cruiser', url: 'https://ilovecruiser.com.au/', image: '/image/ShopifyStore/8.webp' },
]

const youtubeVideos = [
  'X-MK2R1Qbmg',
  'xja5Yq0coFA',
  'UFB-amGvRJI',
]

export default function ShopifyPortfolio() {
  return (
    <div className="w-full">
      {/* Store Setup Section */}
      <div className="mb-20">
        <div className="flex items-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#d90429]">Store Setup</h3>
          <div className="flex-grow h-px bg-[#d90429]/20 ml-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopifyStores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#8d99ae]/20 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Link href={store.url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-[400px] overflow-hidden bg-gray-100 cursor-pointer">
                <Image
                  src={store.image}
                  alt={`${store.name} website preview`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 text-[#d90429] p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
              </Link>
              
              <div className="p-4 bg-white border-t border-[#8d99ae]/10 text-center">
                <Link href={store.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-black transition-colors cursor-pointer">
                  {store.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shopify Custom App Section */}
      <div>
        <div className="flex items-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#d90429]">Shopify Custom App</h3>
          <div className="flex-grow h-px bg-[#d90429]/20 ml-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {youtubeVideos.map((videoId, index) => (
            <motion.div
              key={videoId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-[#8d99ae]/20 bg-gray-900"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title={`Shopify Custom App Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
