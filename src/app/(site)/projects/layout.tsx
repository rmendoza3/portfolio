// src/app/(site)/projects/layout.tsx
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";

export default async function ProjectsLayout({
	                                             children,
	                                             params,
                                             }: {
	children: React.ReactNode;
	params: Promise<{ slug?: string }>;
}) {
	const resolvedParams = await params;

	const segments = resolvedParams?.slug
		? ["projects", resolvedParams.slug]
		: ["projects"];

	const breadcrumbs = await buildBreadcrumbs({ segments });

	return (
		<>
			{children}
		</>
	);
}
