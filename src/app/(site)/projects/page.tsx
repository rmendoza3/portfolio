import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
	const projects = getAllProjects();

	return (
		<section className="mx-auto max-w-5xl space-y-12">
			<header className="space-y-4">
				<h1 className="text-4xl font-bold tracking-tight">Projects</h1>
				<p className="text-lg text-gray-600">
					A selection of professional and personal work.
				</p>
			</header>

			<div className="grid gap-8 sm:grid-cols-2">
				{projects.map((project) => (
					<Link
						key={project.slug}
						href={`/projects/${project.slug}`}
						className="group rounded-xl border p-6 transition hover:shadow-lg"
					>
						<Image
							src={project.image}
							alt={project.title}
							width={600}
							height={315}
							className="h-48 w-full rounded-md object-cover"
						/>

						<h2 className="mt-4 text-xl font-semibold group-hover:underline">
							{project.title}
						</h2>

						<p className="mt-2 text-gray-600">{project.description}</p>

						<div className="mt-4 flex flex-wrap gap-2">
							{project.tech.map((tech) => (
								<span
									key={tech}
									className="rounded-full bg-gray-100 px-3 py-1 text-sm"
								>
                  {tech}
                </span>
							))}
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
