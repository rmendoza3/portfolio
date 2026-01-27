"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

type ProjectsProps = {
	projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
	const [selectedTech, setSelectedTech] = useState<string | null>(null);

	const allTech = Array.from(
		new Set(projects.flatMap((project) => project.tech))
	);

	const filteredProjects = selectedTech
		? projects.filter((project) => project.tech.includes(selectedTech))
		: projects;

	return (
		<section className="border-t border-slate-200 py-20">
			<h2 className="text-2xl font-semibold text-slate-900">
				Projects
			</h2>

			<div className="mt-6 flex flex-wrap gap-2">
				<button
					onClick={() => setSelectedTech(null)}
					className={`rounded px-3 py-1 text-sm ${
						selectedTech === null
							? "bg-slate-900 text-white"
							: "bg-slate-100 text-slate-700"
					}`}
				>
					All
				</button>

				{allTech.map((tech) => (
					<button
						key={tech}
						onClick={() => setSelectedTech(tech)}
						className={`rounded px-3 py-1 text-sm ${
							selectedTech === tech
								? "bg-slate-900 text-white"
								: "bg-slate-100 text-slate-700"
						}`}
					>
						{tech}
					</button>
				))}
			</div>

			<div className="mt-8 grid gap-6 sm:grid-cols-2">
				{filteredProjects.map((project) => (
					<div key={project.slug} className="animate-fade-in">
						<ProjectCard {...project} />
					</div>
				))}
			</div>
		</section>
	);
}
