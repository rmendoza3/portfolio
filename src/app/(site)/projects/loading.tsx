export default function ProjectsLoading() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{Array.from({ length: 4 }).map((_, i) => (
				<div
					key={i}
					className="rounded-lg border border-slate-200 overflow-hidden animate-pulse"
				>
					<div className="h-48 bg-slate-200" />

					<div className="p-4 space-y-3">
						<div className="h-4 w-2/3 bg-slate-200 rounded" />
						<div className="h-3 w-full bg-slate-200 rounded" />
						<div className="h-3 w-5/6 bg-slate-200 rounded" />

						<div className="flex gap-2 pt-2">
							<div className="h-5 w-14 bg-slate-200 rounded-full" />
							<div className="h-5 w-16 bg-slate-200 rounded-full" />
							<div className="h-5 w-12 bg-slate-200 rounded-full" />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
