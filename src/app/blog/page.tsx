import React from 'react';
import Head from 'next/head';
import BlogClient from './blogClient';


export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Terzettoo Blog - IT Solutions, Web Development & Digital Marketing</title>
        <meta name="description" content="Explore Terzettoo's blog for insights on web development, app development, UI/UX design, SEO, and digital marketing. Your trusted tech partner." />
        <meta name="keywords" content="Terzettoo, IT solutions, web development, app development, UI/UX design, SEO, digital marketing, tech partner" />
        <meta name="author" content="Terzettoo" />
      </Head>
      <main>
        <BlogClient />
      </main>
    </>
  );
}
