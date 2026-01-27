import type { Breadcrumb } from "./breadcrumbs";

export function breadcrumbSchema(breadcrumbs: Breadcrumb[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: breadcrumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.label,
			item: crumb.href,
		})),
	};
}
