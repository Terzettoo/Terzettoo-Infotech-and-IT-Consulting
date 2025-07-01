import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 container mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Freelance Services
        </h1>
        <p className="text-gray-600 max-w-3xl">
          As a leading freelance web development agency, we specialize in delivering tailored digital solutions that empower startups and businesses. Explore our core services below.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-orange-500 mb-6">
          Full-Stack Website Development
        </h2>
        <p className="text-gray-700 mb-4">
          Our expert freelance developers build scalable, responsive, and SEO-optimized websites using the latest technologies. Whether you need a corporate site, e-commerce platform, or custom web app, we deliver solutions aligned with your business goals.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Custom website design and development</li>
          <li>Responsive and mobile-friendly layouts</li>
          <li>SEO best practices integrated</li>
          <li>Performance optimization and security</li>
        </ul>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
          Get a Free Quote Today
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-orange-500 mb-6">
          Mobile & Web App Development
        </h2>
        <p className="text-gray-700 mb-4">
          We create custom mobile and web applications designed to enhance user engagement and streamline your business processes. Our freelance developers are skilled in iOS, Android, and cross-platform app development.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Native and cross-platform mobile apps</li>
          <li>Progressive Web Apps (PWAs)</li>
          <li>API integration and backend development</li>
          <li>User-centric design and usability testing</li>
        </ul>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
          Hire Our App Experts
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-orange-500 mb-6">
          AI & Machine Learning Integration
        </h2>
        <p className="text-gray-700 mb-4">
          Leverage the power of AI and machine learning to automate, personalize, and optimize your digital presence. Our freelance agency delivers innovative AI-powered solutions tailored to your unique business needs.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>AI chatbots and virtual assistants</li>
          <li>Predictive analytics and data modeling</li>
          <li>Personalized content and recommendations</li>
          <li>Automation of business workflows</li>
        </ul>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
          Get Your AI Solution Today
        </Button>
      </section>
    </div>
  );
}
