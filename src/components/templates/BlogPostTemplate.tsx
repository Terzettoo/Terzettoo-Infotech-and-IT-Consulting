"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface BlogPostLayoutProps {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  imageUrl?: string;
  readingTime?: string;
  tags?: string[];
  children: ReactNode;
}

export default function BlogPostLayout({
  title,
  subtitle,
  author,
  date,
  imageUrl,
  readingTime,
  tags,
  children,
}: BlogPostLayoutProps) {
  const pathname = usePathname();
  const fullUrl = `https://www.terzettoo.com${pathname}`; // Replace with actual domain

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 mt-14 mb-16">
      {imageUrl && (
        <div className="relative h-72 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
          />
        </div>
      )}

      <header className="mb-10">
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-2">
          {author && <span>By {author}</span>}
          {date && <span>&bull; {date}</span>}
          {readingTime && <span>&bull; {readingTime} read</span>}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {subtitle}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-red-50 text-red-700 text-sm font-medium px-3 py-1.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <section
        className="prose prose-lg max-w-none 
                          prose-headings:font-bold prose-headings:text-gray-900
                          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                          prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
                          prose-p:mb-5 prose-p:leading-relaxed
                          prose-ul:list-disc prose-ul:pl-6
                          prose-ol:list-decimal prose-ol:pl-6
                          prose-li:my-2
                          prose-blockquote:border-l-4 prose-blockquote:border-red-500 
                          prose-blockquote:bg-gray-50 prose-blockquote:px-6 prose-blockquote:py-4
                          prose-blockquote:italic
                          prose-table:border-collapse prose-table:w-full
                          prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left
                          prose-td:p-3 prose-td:border-t"
      >
        {children}
      </section>

      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Share this article</h3>
            <div className="flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  fullUrl
                )}&text=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 transition"
              >
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  fullUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 transition"
              >
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  fullUrl
                )}&title=${encodeURIComponent(
                  title
                )}&summary=${encodeURIComponent(subtitle || "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 transition"
              >
                LinkedIn
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(fullUrl);
                  alert("Link copied to clipboard!");
                }}
                className="text-red-600 hover:text-red-800 transition"
              >
                Copy Link
              </button>
            </div>
          </div>
          <a
            href="/contact"
            className="bg-red-600 hover:bg-red-700 !text-white px-6 py-3 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </footer>
    </article>
  );
}
