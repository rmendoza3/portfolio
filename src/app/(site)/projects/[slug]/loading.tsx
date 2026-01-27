export default function ProjectLoading() {
	return (
		<div className="space-y-6 animate-pulse">
			<div className="h-8 w-1/2 bg-slate-200 rounded" />

			<div className="h-64 w-full bg-slate-200 rounded-lg" />

			<div className="space-y-3">
				<div className="h-4 w-full bg-slate-200 rounded" />
				<div className="h-4 w-5/6 bg-slate-200 rounded" />
				<div className="h-4 w-2/3 bg-slate-200 rounded" />
			</div>

			<div className="flex gap-2">
				<div className="h-6 w-16 bg-slate-200 rounded-full" />
				<div className="h-6 w-20 bg-slate-200 rounded-full" />
				<div className="h-6 w-14 bg-slate-200 rounded-full" />
			</div>
		</div>
	);
}
