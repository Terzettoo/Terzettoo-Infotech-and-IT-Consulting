import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Business Digital Agency</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-orange-500 transition-colors">
                HOME
              </a>
              <a href="/about" className="hover:text-orange-500 transition-colors">
                ABOUT
              </a>
              <a href="/portfolio" className="hover:text-orange-500 transition-colors">
                PORTFOLIO
              </a>
              <a href="/services" className="hover:text-orange-500 transition-colors">
                SERVICES
              </a>
              <a href="/blog" className="hover:text-orange-500 transition-colors">
                BLOG
              </a>
              <a href="/contact" className="hover:text-orange-500 transition-colors">
                CONTACT
              </a>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
              GET STARTED
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-black/50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="text-orange-500 uppercase text-sm font-semibold mb-4">
              FREELANCE DIGITAL AGENCY
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Startups & Businesses <br />
              with Expert Freelance Web Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl">
              Hire a trusted freelance agency specializing in full-stack website development, mobile & web apps, and AI/ML-powered solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                Get Your AI-Powered Website Today
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full"
              >
                Hire Our Freelance Experts
              </Button>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="relative container mx-auto px-6 mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white text-gray-800 p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    01
                  </div>
                  <div>
                <h3 className="font-bold text-lg mb-2">
                  Full-Stack Website Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Expert freelance developers delivering scalable, responsive, and SEO-optimized websites tailored to your business goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white text-gray-800 p-6">
          <CardContent className="p-0">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Mobile & Web App Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Custom freelance app solutions for iOS, Android, and web platforms designed to enhance user engagement and business efficiency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white text-gray-800 p-6">
          <CardContent className="p-0">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  AI & ML-Powered Website Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Innovative freelance AI and machine learning integrations to automate, personalize, and optimize your digital presence.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="text-orange-500 uppercase text-sm font-semibold mb-4">
                ABOUT US
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Your Agile Freelance Digital Partner
              </h2>
              <p className="text-gray-600 mb-8">
                We are a freelance-driven, tech-first digital agency committed to delivering innovative web and app solutions. Our agile approach ensures rapid, high-quality results tailored to your unique business needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Personalized Freelance Service
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Direct collaboration with expert freelance developers focused on your success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Trusted by Startups & Enterprises
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Proven track record delivering scalable solutions across industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-orange-500 uppercase text-sm font-semibold mb-4">
              OUR WORKING PROCESS
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Proven Freelance Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a streamlined, agile process to deliver high-quality freelance web and app solutions that meet your business goals efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=300&q=80"
                  alt="Discovery & Research"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Discovery & Research
              </h3>
              <p className="text-gray-600">
                Understanding your business needs and project goals to tailor the perfect freelance solution.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=300&q=80"
                  alt="Planning & Development"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Planning & Development
              </h3>
              <p className="text-gray-600">
                Agile development cycles with continuous feedback to ensure your vision is realized.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=300&q=80"
                  alt="Testing & Delivery"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Testing & Delivery
              </h3>
              <p className="text-gray-600">
                Rigorous testing and smooth deployment to ensure a flawless product launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="text-orange-500 uppercase text-sm font-semibold mb-4">
                PORTFOLIO HIGHLIGHTS
              </div>
              <h2 className="text-4xl font-bold">Our Recent Freelance Projects</h2>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
              View All Projects
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white text-gray-800 overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
                  alt="E-commerce Platform Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  E-commerce Platform Development
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Developed a scalable, user-friendly e-commerce platform with integrated payment gateways and real-time analytics.
                </p>
                <a
                  href="#"
                  className="text-orange-500 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-800 overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=400&q=80"
                  alt="AI-Powered Customer Support Chatbot"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  AI-Powered Customer Support Chatbot
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Created an intelligent chatbot using machine learning to automate customer support and improve response times.
                </p>
                <a
                  href="#"
                  className="text-orange-500 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-800 overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                  alt="Mobile App for Fitness Tracking"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  Mobile App for Fitness Tracking
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Developed a cross-platform mobile app with real-time fitness tracking and personalized workout plans.
                </p>
                <a
                  href="#"
                  className="text-orange-500 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
              <div className="text-orange-500 uppercase text-sm font-semibold mb-4">
                CLIENT TESTIMONIALS
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trusted by startups and enterprises alike, our freelance digital agency delivers exceptional results that drive business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="John Watson"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">John Watson</h4>
                      <p className="text-gray-600 text-sm">CEO, Business Corp</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The freelance team delivered our project on time with outstanding quality. Highly recommend for any startup looking to scale."
                  </p>
                  <div className="flex text-orange-500">★★★★★</div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b550?auto=format&fit=crop&w=100&q=80"
                      alt="Emily Scott"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">Emily Scott</h4>
                      <p className="text-gray-600 text-sm">Marketing Director</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Professional, agile, and highly skilled freelancers who transformed our digital presence with AI-powered solutions."
                  </p>
                  <div className="flex text-orange-500">★★★★★</div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                View Details
              </Button>
            </div>
          </div>
        </section>


      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="text-orange-500 uppercase text-sm font-semibold mb-4">
                BLOG UPDATES
              </div>
              <h2 className="text-4xl font-bold text-gray-800">
                Insights & Tips from Our Freelance Experts
              </h2>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
              Explore More Blogs
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Maximizing Startup Growth
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                By Jane Doe • Feb 10, 2024
              </p>
              <p className="text-gray-600 mb-4">
                Learn how freelance digital agencies can accelerate your startup’s growth with tailored web and app solutions.
              </p>
              <a
                href="#"
                className="text-orange-500 font-semibold hover:underline"
              >
                Read More
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                AI in Web Development
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                By John Smith • Jan 25, 2024
              </p>
              <p className="text-gray-600 mb-4">
                Discover the impact of AI and machine learning on modern website development and how freelancers leverage these technologies.
              </p>
              <a
                href="#"
                className="text-orange-500 font-semibold hover:underline"
              >
                Read More
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Choosing the Right Freelance Agency
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                By Emily White • Jan 15, 2024
              </p>
              <p className="text-gray-600 mb-4">
                Tips for startups and businesses on selecting the best freelance web development agency for their projects.
              </p>
              <a
                href="#"
                className="text-orange-500 font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">
                Business Digital Agency
              </h3>
              <p className="text-gray-400 mb-6">
                Vel laoret massa venenatis quis tincidunt porta condimentum
                tristique prus ac purus vivamus amet consectetur dolor mauris
                eget eu.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  f
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  t
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  in
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  ig
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">PRODUCTS</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Portfolio List
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Plans & Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Portfolios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog Listing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Meet Our Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">RESOURCES</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    System Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Brand Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              Copyright © 2024 Freelance Digital Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
