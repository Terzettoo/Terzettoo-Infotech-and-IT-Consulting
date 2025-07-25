"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Database, LayoutDashboard, BarChart, Server, Cpu } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-[#edf2f4] via-white to-[#e9ecef] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left text-[#2b2d42]"
          >
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-block px-4 py-1.5 bg-[#d90429]/10 text-[#d90429] rounded-full text-sm font-medium mb-4"
              >
                <span className="mr-2">🚀</span> Premium Software Solutions
              </motion.div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Transform Your Business</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#d90429] to-[#ef233c]">
                With Digital Innovation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#2b2d42]/80 mb-8 leading-relaxed">
              We craft innovative, scalable, and robust software solutions that
              drive your business forward. From web applications to mobile apps,
              we deliver excellence in every project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#d90429] to-[#ef233c] !text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#ef233c]/30"
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
            <div className="grid grid-cols-3 gap-6 text-center max-w-md mx-auto lg:mx-0">
              {[
                ["150+", "Projects Delivered"],
                ["50+", "Happy Clients"],
                ["5+", "Years Experience"],
              ].map(([count, label], i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-sm"
                >
                  <div className="text-3xl font-bold text-[#2b2d42]">
                    {count}
                  </div>
                  <div className="text-sm text-[#8d99ae] mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Device Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Device Frame */}
            <div className="relative w-full max-w-md">
              {/* Device Container */}
              <div className="relative z-10 rounded-[2rem] border-[14px] border-gray-800 bg-gray-800 shadow-2xl h-[500px] overflow-hidden">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-4">
                  {/* App Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-800">Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="bg-white p-3 rounded-xl shadow-sm"
                    >
                      <div className="flex items-center">
                        <div className="bg-[#d90429]/10 p-2 rounded-lg mr-3">
                          <BarChart className="h-5 w-5 text-[#d90429]" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Revenue</div>
                          <div className="font-bold">$24.8K</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="bg-white p-3 rounded-xl shadow-sm"
                    >
                      <div className="flex items-center">
                        <div className="bg-[#2b2d42]/10 p-2 rounded-lg mr-3">
                          <Cpu className="h-5 w-5 text-[#2b2d42]" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Performance</div>
                          <div className="font-bold">98.6%</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Graph Area */}
                  <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-sm">Analytics</h4>
                      <span className="text-xs text-[#d90429] font-medium">+12.4%</span>
                    </div>
                    
                    {/* Simple Graph */}
                    <div className="flex items-end h-24 gap-1">
                      {[30, 45, 60, 75, 55, 80, 65].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
                          className={`w-full rounded-t ${
                            i === 3 ? "bg-[#d90429]" : "bg-[#d90429]/30"
                          }`}
                        ></motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recent Activity */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-semibold text-sm mb-3">Recent Activity</h4>
                    <div className="space-y-3">
                      {[
                        { icon: <LayoutDashboard className="h-4 w-4" />, text: "Dashboard updated", time: "2 min ago" },
                        { icon: <Server className="h-4 w-4" />, text: "Server optimized", time: "24 min ago" },
                        { icon: <Smartphone className="h-4 w-4" />, text: "Mobile app deployed", time: "1 hour ago" }
                      ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.2 }}
                          className="flex items-center"
                        >
                          <div className="bg-[#edf2f4] p-1.5 rounded-lg mr-3">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">{item.text}</div>
                            <div className="text-xs text-gray-500">{item.time}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Camera Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-4 bg-white border border-[#d90429]/20 rounded-2xl shadow-lg"
              >
                <Code className="h-8 w-8 text-[#d90429]" />
              </motion.div>
              
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 p-4 bg-white border border-[#d90429]/20 rounded-2xl shadow-lg"
              >
                <Database className="h-8 w-8 text-[#d90429]" />
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -right-8 p-3 bg-gradient-to-r from-[#d90429] to-[#ef233c] text-white rounded-full shadow-lg"
              >
                <Smartphone className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-[#d90429]/5 blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#2b2d42]/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-[#ef233c]/5 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;