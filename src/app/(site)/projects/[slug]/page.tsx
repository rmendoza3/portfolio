import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import { getAllProjects } from "@/lib/projects";

export default async function ProjectPage({
	                                          params,
                                          }: {
	params: Promise<{ slug: string }>;
}) {
	// ✅ Await params (Next 15 behavior)
	const resolvedParams = await params;

	console.log("Resolved params:", resolvedParams);

	const slug = resolvedParams?.slug;

	if (!slug) {
		console.error("Slug is missing from params");
		notFound();
	}

	const projects = getAllProjects();
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		console.error("Project metadata not found for slug:", slug);
		notFound();
	}

	return (
		<article className="max-w-3xl mx-auto space-y-12">
			<BackLink href="/projects" />

			<header className="space-y-4">
				<h1 className="text-4xl font-bold tracking-tight">
					{project.title}
				</h1>

				<p className="text-lg text-gray-600">
					{project.description}
				</p>

				{project.tech?.length > 0 && (
					<div className="flex flex-wrap gap-2 pt-2">
						{project.tech.map((tech) => (
							<span
								key={tech}
								className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
							>
                {tech}
              </span>
						))}
					</div>
				)}
			</header>
		</article>
	);
}
