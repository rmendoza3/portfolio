'use client';

import { ImageWithFallback } from '@/components/ImageWithFallback';
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa6';

export default function About() {
	const skills = [
		{ category: 'Platforms', items: ['Magento', 'Shopify', 'Wordpress', 'Vercel'] },
		{ category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Javascript'] },
		{ category: 'Backend', items: ['Node.js', 'PHP', 'APIs', 'MySQL', 'Optimization'] },
		{ category: 'Tools', items: ['Git', 'Docker', 'CI/CD Pipelines', 'Figma', 'AI'] },
	];

	const values = [
		{
			icon: <FaCode className="w-6 h-6" />,
			title: 'Quality Code',
			description: 'Code that’s clean, reliable, and built to scale.',
		},
		{
			icon: <FaPalette className="w-6 h-6" />,
			title: 'User-Centric Design',
			description: 'Creating intuitive, accessible interfaces.',
		},
		{
			icon: <FaRocket className="w-6 h-6" />,
			title: 'Continuous Learning',
			description: 'Always exploring new technologies and approaches.',
		},
		{
			icon: <FaUsers className="w-6 h-6" />,
			title: 'Collaboration',
			description: 'Partnering with clients to bring ideas to life.',
		},
	];

	return (
		<div className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400">
						Creating meaningful web experiences with clean code and modern design.
					</p>
				</div>

				{/* Main Content */}
				<div className="grid lg:grid-cols-2 gap-12 mb-20">
					<div>
						<div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
							<ImageWithFallback
								src="/headshot.jpg"
								alt="About me"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="flex flex-col justify-center">
						<h2 className="text-3xl font-bold mb-6">Hi, I&apos;m Reuben Mendoza</h2>
						<div className="space-y-4 text-gray-600 dark:text-gray-400">
							<p>
								I’m a senior web developer with 15+ years of experience building and scaling high-traffic web and ecommerce applications. I bring a well-rounded skill set across frontend, backend, and full-stack development, with deep experience in Magento, WordPress, Shopify, and custom integrations.
							</p>
							<p>
								From crafting pixel-perfect interfaces to designing scalable backend systems and optimizing performance for peak traffic events, I approach every project with a focus on maintainability, business impact, and clean, reliable code.
							</p>
							<p>
								Beyond coding, I collaborate closely with cross-functional teams, mentor developers, and stay engaged in the broader tech community through open-source contributions and knowledge-sharing.
							</p>
						</div>
					</div>
				</div>

				{/* Skills */}
				<div className="mb-20">
					<h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
					<div className="grid md:grid-cols-4 gap-8">
						{skills.map((skillGroup, index) => (
							<div
								key={index}
								className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
							>
								<h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
								<ul className="space-y-2">
									{skillGroup.items.map((skill, idx) => (
										<li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
											<span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
											{skill}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Values */}
				<div>
					<h2 className="text-3xl font-bold text-center mb-12">My Values</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{values.map((value, index) => (
							<div
								key={index}
								className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
									{value.icon}
								</div>
								<h3 className="text-xl font-semibold mb-2">{value.title}</h3>
								<p className="text-gray-600 dark:text-gray-400">{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}