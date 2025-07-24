"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Database } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-[#edf2f4] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left text-[#2b2d42]"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Software Solutions for Modern Businesses
            </h1>

            <p className="text-xl text-[#2b2d42]/80 mb-8 leading-relaxed">
              We craft innovative, scalable, and robust software solutions that
              drive your business forward. From web applications to mobile apps,
              we deliver excellence in every project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#d90429] !text-white font-bold rounded-xl hover:bg-[#ef233c] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/company/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#d90429] text-[#d90429] font-semibold rounded-xl hover:bg-[#ef233c]/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                ["150+", "Projects Delivered"],
                ["50+", "Happy Clients"],
                ["5+", "Years Experience"],
              ].map(([count, label], i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-[#2b2d42]">
                    {count}
                  </div>
                  <div className="text-sm text-[#8d99ae]">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 left-10 p-4 bg-white border border-[#d90429]/20 rounded-2xl shadow-md"
              >
                <Code className="h-8 w-8 text-[#d90429]" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute top-32 right-16 p-4 bg-white border border-[#d90429]/20 rounded-2xl shadow-md"
              >
                <Smartphone className="h-8 w-8 text-[#d90429]" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute bottom-20 left-16 p-4 bg-white border border-[#d90429]/20 rounded-2xl shadow-md"
              >
                <Database className="h-8 w-8 text-[#d90429]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
