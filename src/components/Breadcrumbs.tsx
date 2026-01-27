import Link from "next/link";
import type { Breadcrumb } from "@/lib/breadcrumbs";

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
	return (
		<nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
			<ol className="flex flex-wrap gap-2">
				{items.map((item, index) => (
					<li key={item.href} className="flex items-center gap-2">
						{index > 0 && <span>/</span>}
						<Link href={item.href} className="hover:text-black">
							{item.label}
						</Link>
					</li>
				))}
			</ol>
		</nav>
	);
}
