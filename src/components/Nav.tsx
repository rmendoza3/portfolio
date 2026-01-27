import Link from "next/link";

export default function Nav() {
	return (
		<header className="border-b border-slate-200">
			<nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
				<Link
					href="/"
					className="text-lg font-semibold tracking-tight text-slate-900"
				>
					Reuben Mendoza
				</Link>

				<div className="flex items-center gap-6 text-sm font-medium">
					<Link
						href="/projects"
						className="text-slate-700 hover:text-slate-900 transition"
					>
						Projects
					</Link>

					{/* Add later if needed */}
					{/* <Link href="/about">About</Link> */}
					{/* <Link href="/contact">Contact</Link> */}
				</div>
			</nav>
		</header>
	);
}
