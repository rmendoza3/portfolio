'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { projects } from '@/data/projects';
import { ImageWithFallback } from '@/components/ImageWithFallback';

export default function ProjectDetail() {
	const { slug } = useParams<{ slug: string }>();
	const project = projects.find(p => p.id === slug);

	if (!project) {
		return (
			<div className="py-12">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Back Button */}
					<Link
						href="/projects"
						className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
					>
						<FaArrowLeft className="w-4 h-4 mr-2" />
						Back to Projects
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="py-12">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Back Button */}
				<Link
					href="/projects"
					className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
				>
					<FaArrowLeft className="w-4 h-4 mr-2" />
					Back to Projects
				</Link>

				{/* Project Image */}
				<div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
					<ImageWithFallback
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Project Header */}
				<div className="mb-8">
					<h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
						{project.description}
					</p>

					{/* Action Buttons */}
					<div className="flex flex-wrap gap-4">
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
							>
								<FaArrowUpRightFromSquare className="w-5 h-5 mr-2" />
								View Live Demo
							</a>
						)}
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
							>
								<FaGithub className="w-5 h-5 mr-2" />
								View Source Code
							</a>
						)}
					</div>
				</div>

				{/* Project Details */}
				<div className="grid md:grid-cols-3 gap-8">
					{/* Main Content */}
					<div className="md:col-span-2">
						<div className="prose dark:prose-invert max-w-none">
							<h2>About This Project</h2>
							<p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
								{project.longDescription}
							</p>
						</div>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						{/* Technologies */}
						<div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
							<h3 className="font-semibold mb-4">Technologies Used</h3>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
									>
                    {tech}
                  </span>
								))}
							</div>
						</div>

						{/* Category */}
						<div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
							<h3 className="font-semibold mb-2">Category</h3>
							<p className="text-gray-600 dark:text-gray-400 capitalize">{project.category}</p>
						</div>

						{/* Links */}
						{(project.liveUrl || project.githubUrl) && (
							<div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
								<h3 className="font-semibold mb-4">Project Links</h3>
								<div className="space-y-2">
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
										>
											<FaArrowUpRightFromSquare className="w-4 h-4 mr-2" />
											Live Website
										</a>
									)}
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
										>
											<FaGithub className="w-4 h-4 mr-2" />
											Source Code
										</a>
									)}
								</div>
							</div>
						)}
					</div>
				</div>

				{/* More Projects CTA */}
				<div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
					<h3 className="text-2xl font-semibold mb-4">Interested in More?</h3>
					<Link
						href="/projects"
						className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
					>
						View All Projects
					</Link>
				</div>
			</div>
		</div>
	);
}