import Link from "next/link";

type BackLinkProps = {
	href: string;
	label?: string;
};

export default function BackLink({
	                                 href,
	                                 label = "Back",
                                 }: BackLinkProps) {
	return (
		<Link
			href={href}
			className="inline-flex items-center text-sm text-slate-500 hover:text-slate-700"
		>
			← {label}
		</Link>
	);
}
