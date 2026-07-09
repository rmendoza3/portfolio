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
		id: 'backyard-cook',
		title: 'Backyard Cook',
		description: 'A full-stack ordering platform for a wood-fired BBQ business, built with Next.js. Includes a public marketing/ordering site and a custom AI chatbot (Gemini API) that captures structured order inquiries, backed by Redis session storage and an authenticated admin dashboard.',
		longDescription: 'A two-part Next.js application built for a wood-fired BBQ catering business, covering both the customer-facing experience and the operational backend. The marketing site is a five-page ordering platform designed to convert visitors into inquiries, showcasing the menu, process, and booking flow. Alongside it, I built a standalone AI chatbot service powered by the Gemini API that handles customer conversations and uses a custom draft_inquiry tool to convert freeform chat into structured order data — no manual re-entry needed. Sessions persist through Redis, and an admin dashboard (secured with NextAuth) gives the business owner visibility into inquiries as they come in.',
		image: '/projects/backyard-cook.jpg',
		technologies: ['Full-Stack Development', 'AI Integration', 'Next.js', 'React', 'Redis', 'NextAuth'],
		liveUrl: 'https://backyard-cook.vercel.app/',
		githubUrl: 'https://github.com/rmendoza3/backyard-cook',
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
	{
    	id: 'beauty-brand',
    	title: 'Beauty Brand',
    	description: 'Comprehensive ADA and SEO audit and remediation for a beauty ecommerce brand, resulting in an 18% increase in sales and 140% increase in total sessions year over year.',
    	longDescription: 'Led a full accessibility and SEO overhaul for a confidential beauty ecommerce client. On the ADA side, I resolved contrast errors, fixed form labeling issues, and corrected broken ARIA syntax to bring the site into compliance. For SEO, I built a custom crawler tool to systematically find and group site-wide issues, then remediated them — correcting heading tag hierarchy, adding and fixing missing or empty alt tags, adding missing image dimensions, and implementing complete ecommerce schema markup. These improvements drove significant Core Web Vitals gains, particularly in LCP and CLS, with Lighthouse scores improving substantially across the board. Measured year-over-year, the work contributed to an 18% increase in sales and a 140% increase in total sessions.',
    	image: '/projects/beauty-brand.jpg',
    	technologies: ['ADA / WCAG', 'SEO', 'Schema Markup', 'Core Web Vitals', 'Lighthouse', 'Web Crawler', 'HTML', 'JavaScript'],
    	liveUrl: '',
    	githubUrl: '',
    	category: 'web',
	},
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
		id: 'provideocoalition',
		title: 'Pro Video Coalition',
		description: 'Built a WordPress plugin that pulls Magento product data into posts, making it easy to showcase products and drive traffic.',
		longDescription: 'I developed a custom WordPress plugin that integrates with Magento APIs to dynamically pull product data—including name, image, price, and product URL—and render it as a dedicated UI element within posts. The element, titled “Support ProVideo Coalition” and “Shop with Filmtools”, either displays a specific product based on the SKU entered in a custom field or falls back to a generic “Shop Now at Filmtools” link if no SKU is provided. Authors simply add the product SKU on the post edit page, and the plugin handles the rest automatically. This streamlined content workflows, kept product data accurate, and created clear, clickable calls-to-action within articles, driving traffic to Filmtools products and supporting potential sales. You can see it in action at the top of any article on ProVideoCoalition where the UI element appears.',
		image: '/projects/pvc.png',
		technologies: ['WordPress', 'Magento', 'APIs', 'PHP', 'Docker'],
		category: 'web'

	}
];
