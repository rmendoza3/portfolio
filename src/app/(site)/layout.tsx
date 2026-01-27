import Header from "@/components/Header"

export default async function SiteLayout({children}: {children: React.ReactNode;}) {
	return (
		<>
			<Header />
			<main className="mx-auto max-w-6xl px-6 py-12">
				{children}
			</main>
		</>
	);
}
