import React from 'react';

interface JobOpening {
  id: number;
  title: string;
  location: string;
  description: string;
}

const sampleJobs: JobOpening[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    location: 'Remote',
    description: 'We are looking for a skilled frontend developer with experience in React and TypeScript.',
  },
  {
    id: 2,
    title: 'Backend Engineer',
    location: 'New York, NY',
    description: 'Join our backend team to build scalable APIs and services using Node.js and Express.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    location: 'San Francisco, CA',
    description: 'Creative UI/UX designer needed to design intuitive user interfaces and experiences.',
  },
];

const CareerPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Career Opportunities</h1>
      <section>
        {sampleJobs.map((job) => (
          <article key={job.id} className="mb-6 border-b pb-4">
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="text-sm text-gray-500">{job.location}</p>
            <p className="mt-2 text-gray-700">{job.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CareerPage;
