import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 container mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h1>
        <p className="text-gray-600 max-w-3xl">
          Explore some of our recent freelance projects showcasing our expertise in full-stack development, app creation, and AI/ML integration.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-8">
        <Card className="bg-white text-gray-800 overflow-hidden">
          <div className="aspect-video bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
              alt="E-commerce Platform Development"
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-2">E-commerce Platform Development</h3>
            <p className="text-gray-600 text-sm mb-4">
              Developed a scalable, user-friendly e-commerce platform with integrated payment gateways and real-time analytics.
            </p>
            <a href="#" className="text-orange-500 font-semibold hover:underline">
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
            <h3 className="font-bold text-lg mb-2">AI-Powered Customer Support Chatbot</h3>
            <p className="text-gray-600 text-sm mb-4">
              Created an intelligent chatbot using machine learning to automate customer support and improve response times.
            </p>
            <a href="#" className="text-orange-500 font-semibold hover:underline">
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
            <h3 className="font-bold text-lg mb-2">Mobile App for Fitness Tracking</h3>
            <p className="text-gray-600 text-sm mb-4">
              Developed a cross-platform mobile app with real-time fitness tracking and personalized workout plans.
            </p>
            <a href="#" className="text-orange-500 font-semibold hover:underline">
              Learn More →
            </a>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
