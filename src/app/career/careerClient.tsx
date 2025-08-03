'use client';

import React, { useEffect, useState } from 'react';
import type { JSX } from 'react';

interface JobOpening {
    id: number;
    title: string;
    location: string;
    description: string;
    type?: string;
    department?: string;
}

interface PerkItem {
    title: string;
    description: string;
    icon: JSX.Element;
}

interface GrowthStat {
    value: string;
    label: string;
}

const perks: PerkItem[] = [
    {
        title: 'Competitive Compensation',
        description: 'We offer market-leading salaries and equity packages',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: 'Flexible Work',
        description: 'Remote-friendly with flexible hours to suit your lifestyle',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        )
    },
    {
        title: 'Learning Budget',
        description: 'Annual stipend for conferences, courses, and books',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: 'Health & Wellness',
        description: 'Comprehensive health insurance and wellness programs',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        title: 'Team Retreats',
        description: 'Regular company retreats in exciting locations',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: 'Growth Opportunities',
        description: 'Clear career paths and mentorship programs',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    }
];

const growthStats: GrowthStat[] = [
    { value: '85%', label: 'Employee promotion rate within 3 years' },
    { value: '4.8', label: 'Average employee satisfaction rating' },
    { value: '30%', label: 'Year-over-year team growth' },
    { value: '10+', label: 'Internal mobility opportunities monthly' },
];

const jobOpenings: JobOpening[] = [
    {
        id: 1,
        title: 'Frontend Developer',
        location: 'Remote',
        type: 'Full-time',
        department: 'Engineering',
        description: 'We are looking for a skilled frontend developer with experience in React and TypeScript to join our growing team. You will be responsible for building responsive, accessible, and performant user interfaces.',
    },
    {
        id: 2,
        title: 'Backend Engineer',
        location: 'Remote',
        type: 'Full-time',
        department: 'Engineering',
        description: 'Join our backend team to build scalable APIs and services using Node.js and Express. Experience with database design and cloud infrastructure is a plus.',
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        location: 'Remote',
        type: 'Contract',
        department: 'Design',
        description: 'Creative UI/UX designer needed to design intuitive user interfaces and experiences. You will work closely with product managers and developers to create beautiful, functional designs.',
    },
];

const useAnimatedCounter = (target: string, duration = 1000) => {
    const [value, setValue] = useState('0');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        const numericPart = parseFloat(target);
        const end = isNaN(numericPart) ? 0 : numericPart;
        const increment = end / (duration / 16);

        let current = 0;
        const step = () => {
            current += increment;
            if (current < end) {
                setValue(`${Math.floor(current)}`);
                requestAnimationFrame(step);
            } else {
                setValue(target);
            }
        };

        requestAnimationFrame(step);
    }, [target, duration]);

    return isClient ? value : target;
};

interface StatItemProps {
    stat: GrowthStat;
    index: number;
}

const StatItem = ({ stat, index }: StatItemProps) => {
    const animatedValue = useAnimatedCounter(stat.value);
    
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-red-100">
            <p className="text-4xl font-bold text-red-600 mb-2">
                {animatedValue}
                {index === 1 && <span className="text-xl">/5</span>}
                {index === 0 && <span className="text-xl"></span>}
            </p>
            <p className="text-gray-600 text-sm">{stat.label}</p>
        </div>
    );
};

export const CareerClient = () => {
    const [activeTab, setActiveTab] = useState<string>('All');
    const departments = ['All', ...Array.from(new Set(jobOpenings.map(job => job.department)))] as string[];

    const filteredJobs = activeTab === 'All'
        ? jobOpenings
        : jobOpenings.filter(job => job.department === activeTab);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats Section */}
            <section className="py-12  rounded-2xl mb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Employee Growth & Success</h2>
                    <p className="text-lg text-gray-700 mb-8">We invest in our team&apos;s development and celebrate their achievements</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {growthStats.map((stat, index) => (
                            <StatItem key={index} stat={stat} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <section className="mb-20" id="openings">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Current Openings</h2>
                        <p className="text-gray-700 mt-2">Join our team and help shape the future of our company</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveTab(dept)}
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === dept ? 'bg-white shadow-sm text-red-600' : 'text-gray-600 hover:text-gray-900'}`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <div key={job.id} className="border border-red-100 bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                                        <div className="flex flex-wrap items-center mt-2 gap-x-4 gap-y-2">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                {job.department}
                                            </span>
                                            <p className="text-sm text-gray-600 flex items-center">
                                                <svg className="h-4 w-4 mr-1 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {job.location}
                                            </p>
                                            <p className="text-sm text-gray-600 flex items-center">
                                                <svg className="h-4 w-4 mr-1 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {job.type}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="w-full cursor-not-allowed md:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center">
                                        Apply Now
                                        <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="mt-4 text-gray-700">{job.description}</p>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-white rounded-xl border border-red-100">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">No openings in this department</h3>
                            <p className="mt-1 text-gray-600">Check back later or explore other departments.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Perks Section */}
            <section className="mb-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Our Team?</h2>
                    <p className="text-lg text-gray-700">We&apos;re committed to creating an environment where our team can thrive both professionally and personally.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {perks.map((perk, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-red-100">
                            <div className="flex items-center mb-4">
                                <div className="bg-red-100 p-3 rounded-lg">
                                    {perk.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{perk.title}</h3>
                            <p className="text-gray-700">{perk.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-red-100">
                <div className="bg-red-600 py-12 px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold !text-white mb-4">Don&apos;t See Your Dream Role?</h2>
                        <p className="text-xl text-red-100 mb-8">
                            We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll contact you when a matching position opens up.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            
                            {/* Updated LinkedIn button */}
                            <a
                                href="https://www.linkedin.com/company/terzettoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-700 hover:bg-red-800 !text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors flex items-center justify-center"
                            >
                                Contact Our Recruiter
                                <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};