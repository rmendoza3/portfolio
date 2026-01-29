'use client';

import Link from 'next/link';
import { FaArrowRight, FaCode, FaPalette, FaBolt } from 'react-icons/fa6';
import { ImageWithFallback } from '@/components/ImageWithFallback';

export default function Home() {
    const features = [
        {
            icon: <FaCode className="w-6 h-6" />,
            title: 'Clean, Maintainable Code',
            description: 'Writing scalable, well-structured code that follows best practices and stands the test of time.',
        },
        {
            icon: <FaPalette className="w-6 h-6" />,
            title: 'Modern Design',
            description: 'Creating clean, intuitive user experiences that users enjoy interacting with.',
        },
        {
            icon: <FaBolt className="w-6 h-6" />,
            title: 'Built for Performance',
            description: 'Fast, efficient applications designed to perform under real-world conditions.',
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                                Hi, I&apos;m{' '}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
                                    Reuben
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                Crafting modern digital and ecommerce experiences—from frontend interfaces to backend systems.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                >
                                    View Projects <FaArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <ImageWithFallback
                                    src="/PortfolioMain.jpg"
                                    alt="Developer workspace"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Do</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Building modern digital and ecommerce solutions with clarity and purpose.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                        Let’s talk about new projects, creative ideas, or what we can build together.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all"
                    >
                        Start a Conversation <FaArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
