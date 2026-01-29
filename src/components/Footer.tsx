import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
	return (
		<footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Brand */}
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-xl">RM</span>
							</div>
							<span className="font-semibold text-xl">Reuben Mendoza</span>
						</div>
						<p className="text-gray-600 dark:text-gray-400">
							Full-stack web developer designing clean, scalable digital experiences.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
									Projects
								</Link>
							</li>
							<li>
								<Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
									About Me
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h3 className="font-semibold mb-4">Connect</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com/rmendoza3"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
								aria-label="GitHub"
							>
								<FaGithub className="w-5 h-5" />
							</a>
							<a
								href="https://linkedin.com/in/reubenmendoza3/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
								aria-label="LinkedIn"
							>
								<FaLinkedin className="w-5 h-5" />
							</a>
							<a
								href="mailto:reuben.mendoza.3@gmail.com"
								className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
								aria-label="Email"
							>
								<FaEnvelope className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
					<p>&copy; {new Date().getFullYear()} Reuben Mendoza. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}