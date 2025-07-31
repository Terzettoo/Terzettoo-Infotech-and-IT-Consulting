import React from "react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  category?: string;
  readTime?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Empowering Startups with Scalable Web Development",
    date: "June 1, 2024",
    category: "Web Development",
    readTime: "5 min read",
    summary:
      "Discover how Terzettoo helps startups build customized, scalable websites that grow with their business needs through modern technologies and agile methodologies.",
  },
  {
    id: 2,
    title: "Innovative UI/UX Design for Impactful User Experiences",
    date: "June 10, 2024",
    category: "Design",
    readTime: "4 min read",
    summary:
      "Learn about our approach to blending creativity and technology to deliver user-centric designs that drive engagement and improve conversion rates.",
  },
  {
    id: 3,
    title: "Boost Your Online Presence with Expert SEO & Digital Marketing",
    date: "June 15, 2024",
    category: "Marketing",
    readTime: "6 min read",
    summary:
      "Explore strategies Terzettoo uses to enhance visibility and attract customers through tailored SEO and marketing solutions that deliver measurable results.",
  },
  {
    id: 4,
    title: "Your Trusted Tech Partner: From Idea to Execution",
    date: "June 20, 2024",
    category: "Company",
    readTime: "7 min read",
    summary:
      "How Terzettoo collaborates with businesses to turn innovative ideas into high-performing digital solutions through our comprehensive development process.",
  },
];

const BlogClient: React.FC = () => {
  return (
    <>
      <main className="min-h-screen bg-[#d90429] mt-12 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-white">Terzettoo</span> Insights
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Expert perspectives on web development, design, and digital
              strategy
            </p>
          </section>

          {/* Featured Post */}
          <section className="mb-16">
            <article className="!bg-white backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-white/20 h-full rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/image/blog/EmpoweringStartupswithScalableWebDevelopment.png"
                      alt="Preview: Empowering Startups with Scalable Web Development"
                      loading="lazy"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-white text-[#d90429] text-xs px-3 py-1 rounded-full font-bold">
                      Featured
                    </span>
                    <span className="text-sm text-gray-800">
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-800 mb-4">{blogPosts[0].summary}</p>
                  <a
                    href="/blog/Empowering-Startups-with-Scalable-Web-Development"
                    className="inline-block !text-[#ffffff] !bg-[#d90429] hover:!bg-[#d90427d6]  px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            </article>
          </section>
        </div>

        {/* Latest Articles Section (Full width white background) */}
        <section className="w-screen bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#d90429]">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="bg-[#d90429]/10 h-48 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-[#d90429]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-[#d90429]">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {post.title}
                    </h3>
                    <time className="text-xs text-gray-500 block mb-3">
                      {post.date}
                    </time>
                    <p className="text-gray-600 mb-4">{post.summary}</p>
                    <button className="text-[#d90429] hover:text-[#b00322] font-medium flex items-center gap-1 transition-colors">
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogClient;
