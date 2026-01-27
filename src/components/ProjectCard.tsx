import Link from "next/link";

type ProjectCardProps = {
	slug: string;
	title: string;
	description: string;
	tech: string[];
	link?: string;
};

export default function ProjectCard({
	slug,
	title,
	description,
	tech,
	link
}: ProjectCardProps) {
	return (
		<div
			className="rounded-lg border border-slate-200 p-6 transition duration-300 ease-out opacity-100 translate-y-0">
			<h3 className="text-lg font-semibold text-slate-900">
				{title}
			</h3>

			<p className="mt-2 text-sm text-slate-600">
				{description}
			</p>

			<ul className="mt-4 flex flex-wrap gap-2">
				{tech.map((item) => (
					<li
						key={item}
						className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-700"
					>
						{item}
					</li>
				))}
			</ul>

			{link && (
				<Link
					href={`/projects/${slug}`}
					className="mt-4 inline-block text-sm font-medium text-slate-900 underline"
				>
					View project
				</Link>

			)}
		</div>
	);
}
