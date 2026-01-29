'use client';

import { useState } from 'react';
import { projects, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
	const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'fullstack'>('all');

	const filteredProjects = filter === 'all'
		? projects
		: projects.filter(project => project.category === filter);

	const filters = [
		{ value: 'all', label: 'All Projects' },
		{ value: 'web', label: 'Web' },
		{ value: 'mobile', label: 'Mobile' },
		{ value: 'fullstack', label: 'Full Stack' },
	] as const;

	return (
		<div className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
					<p className="text-xl text-gray-600 dark:text-gray-400">
						A collection of my recent work and personal projects
					</p>
				</div>

				{/* Filter Buttons */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{filters.map((f) => (
						<button
							key={f.value}
							onClick={() => setFilter(f.value)}
							className={`px-6 py-2 rounded-lg transition-colors ${
								filter === f.value
									? 'bg-blue-600 text-white'
									: 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
							}`}
						>
							{f.label}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project: Project) => (
						<ProjectCard
							key={project.id}
							project={project}
						/>
					))}
				</div>
			</div>
		</div>
	);
}