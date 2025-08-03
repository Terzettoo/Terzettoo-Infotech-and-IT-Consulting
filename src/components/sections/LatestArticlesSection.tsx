"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  category?: string;
  readTime?: string;
  imageUrl?: string;
  buttonUrl?: string;
}

interface LatestArticlesSectionProps {
  blogPosts: BlogPost[];
}

const LatestArticlesSection: React.FC<LatestArticlesSectionProps> = ({ blogPosts }) => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-[#d90429] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={post.imageUrl || "/image/blog/default.png"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#d90429]/10 text-[#d90429] rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#d90429] transition-colors">
                  {post.title}
                </h3>
                <time className="text-xs text-gray-500 block mb-4">
                  {post.date}
                </time>
                <p className="text-gray-600 mb-5">{post.summary}</p>
                <Link
                  href={post.buttonUrl || "#"}
                  className="inline-flex items-center text-[#d90429] hover:text-[#b00322] font-medium transition-colors group-hover:underline"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
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
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
