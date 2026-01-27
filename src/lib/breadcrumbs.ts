export type Breadcrumb = {
	label: string;
	href: string;
};

type BreadcrumbInput = {
	segments: string[];
	projectTitle?: string;
};

export async function buildBreadcrumbs({
	                                       segments,
	                                       projectTitle,
                                       }: BreadcrumbInput): Promise<Breadcrumb[]> {
	const breadcrumbs: Breadcrumb[] = [
		{ label: "Home", href: "/" },
	];

	let path = "";

	for (const segment of segments) {
		path += `/${segment}`;

		if (segment === "projects") {
			breadcrumbs.push({
				label: "Projects",
				href: "/projects",
			});
			continue;
		}

		if (projectTitle) {
			breadcrumbs.push({
				label: projectTitle,
				href: path,
			});
		}
	}

	return breadcrumbs;
}
