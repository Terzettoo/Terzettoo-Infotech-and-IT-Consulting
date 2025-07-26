import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
}

const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: 'Welcome to Our Blog',
    date: '2024-06-01',
    summary: 'This is the first post on our sample blog page. Stay tuned for more updates!',
  },
  {
    id: 2,
    title: 'How to Build a Great Website',
    date: '2024-06-05',
    summary: 'Tips and tricks for building a modern, responsive website using the latest technologies.',
  },
  {
    id: 3,
    title: 'Career Opportunities in Tech',
    date: '2024-06-10',
    summary: 'Explore exciting career paths in the technology industry and how to get started.',
  },
];

const BlogPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Sample Blog</h1>
      <section>
        {samplePosts.map((post) => (
          <article key={post.id} className="mb-6 border-b pb-4">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <time className="text-sm text-gray-500">{post.date}</time>
            <p className="mt-2 text-gray-700">{post.summary}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default BlogPage;
