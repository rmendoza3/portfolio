"use client";

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import type {ProjectMeta} from "@/lib/projects";

type Props = {
	projects: ProjectMeta[];
};

export default function ProjectsClient({projects}: Props) {
	const [selectedTech, setSelectedTech] = useState<string | null>(null);

	const allTech = Array.from(
		new Set(projects.flatMap((project) => project.tech))
	);

	const filteredProjects = selectedTech
		? projects.filter((project) =>
			project.tech.includes(selectedTech)
		)
		: projects;

	return (
		<>
			{/* Filters */}
			<div className="flex flex-wrap gap-2 my-5">
				<button
					onClick={() => setSelectedTech(null)}
					className={`rounded px-3 py-1 text-sm transition ${
						selectedTech === null
							? "bg-slate-900 text-white"
							: "bg-slate-100 text-slate-700 hover:bg-slate-200"
					}`}
				>
					All
				</button>

				{allTech.map((tech) => (
					<button
						key={tech}
						onClick={() => setSelectedTech(tech)}
						className={`rounded px-3 py-1 text-sm transition ${
							selectedTech === tech
								? "bg-slate-900 text-white"
								: "bg-slate-100 text-slate-700 hover:bg-slate-200"
						}`}
					>
						{tech}
					</button>
				))}
			</div>

			{/* Projects grid */}
			<div className="grid gap-8 sm:grid-cols-2">
				{filteredProjects.map((project) => (
					<Link
						key={project.slug}
						href={`/projects/${project.slug}`}
						className="group block rounded-xl border border-slate-200 p-6 transition hover:shadow-lg"
					>
						<Image
							src={project.image || "/projects/placeholder.jpg"}
							alt={project.title}
							width={600}
							height={315}
							className="mb-4 h-48 w-full rounded-lg object-cover transition-transform group-hover:scale-105"
						/>

						<h2 className="text-xl font-semibold group-hover:underline">
							{project.title}
						</h2>

						<p className="mt-2 text-slate-600">
							{project.description}
						</p>

						<div className="mt-4 flex flex-wrap gap-2">
							{project.tech.map((tech: string) => (
								<span
									key={tech}
									className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
								>
                  {tech}
                </span>
							))}
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
