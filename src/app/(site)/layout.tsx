import Header from "@/components/Header"
import Footer from '@/components/Footer';

export default async function SiteLayout({children}: {children: React.ReactNode;}) {
	return (
		<div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
			<Header />
			<main className="flex-grow">
				{children}
			</main>
			<Footer />
		</div>
	);
}
