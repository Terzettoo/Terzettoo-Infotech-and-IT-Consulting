'use client';

import React, { useEffect, useState } from 'react';
import type { JSX } from 'react';

interface JobOpening {
    id: number;
    title: string;
    location: string;
    description: string;
    type?: string;
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#ff0000">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: 'Flexible Work',
        description: 'Remote-friendly with flexible hours to suit your lifestyle',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#ff0000">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        )
    },
    {
        title: 'Learning Budget',
        description: 'Annual stipend for conferences, courses, and books',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#ff0000">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: 'Health & Wellness',
        description: 'Comprehensive health insurance and wellness programs',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#ff0000">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        title: 'Team Retreats',
        description: 'Regular company retreats in exciting locations',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#ff0000">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: 'Growth Opportunities',
        description: 'Clear career paths and mentorship programs',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#ff0000">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    }
];

const growthStats: GrowthStat[] = [
    { value: '85%', label: 'of employees promoted within 3 years' },
    { value: '4.8/5', label: 'average employee satisfaction rating' },
    { value: '30%', label: 'year-over-year team growth' },
    { value: '10+', label: 'internal mobility opportunities monthly' },
];

const jobOpenings: JobOpening[] = [
    {
        id: 1,
        title: 'Frontend Developer',
        location: 'Remote',
        type: 'Full-time',
        description: 'We are looking for a skilled frontend developer with experience in React and TypeScript to join our growing team. You will be responsible for building responsive, accessible, and performant user interfaces.',
    },
    {
        id: 2,
        title: 'Backend Engineer',
        location: 'Remote',
        type: 'Full-time',
        description: 'Join our backend team to build scalable APIs and services using Node.js and Express. Experience with database design and cloud infrastructure is a plus.',
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        location: 'Remote',
        type: 'Contract',
        description: 'Creative UI/UX designer needed to design intuitive user interfaces and experiences. You will work closely with product managers and developers to create beautiful, functional designs.',
    },
];

const useAnimatedCounter = (target: string, duration = 1000) => {
    const [value, setValue] = useState('0');

    useEffect(() => {
        const numericPart = parseFloat(target);
        // Removed unused variables isPercent, isRating, isPlus
        const end = isNaN(numericPart) ? 0 : numericPart;
        const increment = end / (duration / 16);

        // Removed unused 'start' variable
        let current = 0;
        const step = () => {
            current += increment;
            if (current < end) {
                setValue(`${current.toFixed(1)}`);
                requestAnimationFrame(step);
            } else {
                setValue(target);
            }
        };

        requestAnimationFrame(step);
    }, [target, duration]);

    return value;
};

export const CareerClient = () => {
    // Explicitly call useAnimatedCounter for each growthStat to comply with hooks rules
    const animatedValue0 = useAnimatedCounter(growthStats[0].value);
    const animatedValue1 = useAnimatedCounter(growthStats[1].value);
    const animatedValue2 = useAnimatedCounter(growthStats[2].value);
    const animatedValue3 = useAnimatedCounter(growthStats[3].value);

    return (
        <>
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-red-600">Employee Growth & Success</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                        <p className="text-4xl font-bold text-red-600 mb-2">{animatedValue0}</p>
                        <p className="text-gray-600">{growthStats[0].label}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                        <p className="text-4xl font-bold text-red-600 mb-2">{animatedValue1}</p>
                        <p className="text-gray-600">{growthStats[1].label}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                        <p className="text-4xl font-bold text-red-600 mb-2">{animatedValue2}</p>
                        <p className="text-gray-600">{growthStats[2].label}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                        <p className="text-4xl font-bold text-red-600 mb-2">{animatedValue3}</p>
                        <p className="text-gray-600">{growthStats[3].label}</p>
                    </div>
                </div>
            </section>

            <hr className="border-t-2 border-[#d90429] my-6" />

            <section className="mb-16 mt-16">
                <h2 className="text-3xl font-bold !mb-10 text-red-600 text-center">Current Openings</h2>
                <div className="space-y-6">
                    {jobOpenings.map((job) => (
                        <article key={job.id} className="border border-gray-200 bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
                                    <div className="flex flex-wrap items-center mt-2 gap-x-4 gap-y-2">
                                        <p className="text-sm text-gray-500 flex items-center">📍 {job.location}</p>
                                        <p className="text-sm text-gray-500 flex items-center">💼 {job.type}</p>
                                    </div>
                                </div>
                                <button className="cursor-not-allowed bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors w-full md:w-auto">
                                    Apply Now
                                </button>
                            </div>
                            <p className="mt-4 text-gray-700">{job.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <hr className="border-t-2 border-[#d90429] my-6" />


            <section className="mb-16 p-8 rounded-lg border border-red-100">
                <h2 className="text-4xl font-bold mb-8 text-center text-red-600">Why Join Our Team?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {perks.map((perk, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 hover:border-red-200 transition-colors">
                            <div className="mb-4">{perk.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{perk.title}</h3>
                            <p className="text-gray-600">{perk.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white p-8 rounded-lg text-center border border-red-100">
                <h2 className="text-3xl font-bold mb-4 text-red-600">Interested But Don&apos;t See Your Role?</h2>
                <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                    We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll contact you when a matching position opens up.
                </p>
                <button className="cursor-not-allowed bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
                    Submit Your Resume
                </button>
            </section>
        </>
    );
};
