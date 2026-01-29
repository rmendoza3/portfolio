'use client';

import { useState } from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { FaBars, FaX } from 'react-icons/fa6';

export default function Header() {
    //const { theme, toggleTheme } = useTheme();
    const location = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path: string) => location === path;

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">RM</span>
                        </div>
                        <span className="font-semibold text-xl hidden sm:block">Reuben Mendoza</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 md:ml-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`transition-colors ${
                                    isActive(link.path)
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <FaX className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block py-2 transition-colors ${
                                    isActive(link.path)
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-700 dark:text-gray-300'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )}

            </div>
        </header>
    );
}