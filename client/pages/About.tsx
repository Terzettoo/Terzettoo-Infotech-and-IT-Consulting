export default function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 container mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 max-w-3xl">
          We are a freelance-driven, agile, and tech-first digital agency dedicated to delivering innovative web and app solutions. Our mission is to empower startups, entrepreneurs, and businesses by providing expert freelance development services tailored to their unique needs.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-orange-500 mb-6">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Founded by experienced freelance developers, our agency combines the flexibility and personalized service of freelancing with the professionalism and quality of a full-scale agency. We believe in agile methodologies, continuous collaboration, and delivering high-impact solutions efficiently.
        </p>
        <p className="text-gray-700">
          Our team is passionate about leveraging the latest technologies, including AI and machine learning, to create digital experiences that drive business growth and customer engagement.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-orange-500 mb-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Direct access to expert freelance developers</li>
          <li>Agile and transparent project management</li>
          <li>Customized solutions tailored to your business goals</li>
          <li>Proven track record with startups and enterprises</li>
          <li>Commitment to quality, innovation, and client satisfaction</li>
        </ul>
      </section>
    </div>
  );
}
