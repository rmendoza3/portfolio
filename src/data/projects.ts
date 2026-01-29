export interface Project {
	id: string,
	title: string,
	description: string,
	longDescription: string,
	image: string,
	technologies: string[],
	liveUrl?: string,
	githubUrl?: string,
	category: 'web' | 'mobile' | 'fullstack',
	project?: boolean
}

export const projects: Project[] = [
	{
		id: 'filmtools',
		title: 'Filmtools',
		description: 'End-to-end ecommerce development supporting performance, marketing, and product operations.',
		longDescription: 'I worked across the full stack to help design, build, and maintain the Filmtools website, supporting both the technical platform and day-to-day business needs. My work included frontend and backend development, performance optimization, and improving Core Web Vitals to enhance site speed and user experience. I built and maintained custom features and modules, and regularly supported marketing campaigns by creating and updating landing pages, managing product and page content, and assisting with promotions. I also handled importing and exporting product data to ensure accurate, timely updates across the catalog, following best practices to keep the platform stable, scalable, and easy to maintain.',
		image: '/projects/filmtools.png',
		technologies: ['Magento', 'Adobe Commerce', 'Magento Cloud', 'PHP', 'MySQL', 'Docker', 'Redis'],
		category: 'fullstack',
	},
	{
		id: 'portfolio',
		title: 'Portfolio',
		description: 'This website is a modern, performance-focused portfolio built with Next.js, React, and Tailwind CSS',
		longDescription: 'I designed and built my personal portfolio website from the ground up to showcase my work, skills, and ongoing learning as a self-taught developer. The site is built with Next.js and React, with Tailwind CSS for styling, and focuses on performance, accessibility, and clean, responsive design. I used modern frontend best practices, component-based architecture, and SEO-friendly patterns to create a fast, maintainable site that can evolve as my experience and projects grow.',
		image: '/projects/portfolio.jpg',
		technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Javascript'],
		liveUrl: 'https://reuben-mendoza.vercel.app/',
		githubUrl: 'https://github.com/rmendoza3/portfolio',
		category: 'fullstack',
	},
];