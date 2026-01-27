import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

export type ProjectMeta = {
	slug: string;
	title: string;
	description: string;
	image: string;
	tech: string[];
};

export function getAllProjects(): ProjectMeta[] {
	const files = fs.readdirSync(PROJECTS_DIR);

	return files
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => {
			const slug = file.replace(/\.mdx$/, "");
			const fullPath = path.join(PROJECTS_DIR, file);
			const fileContents = fs.readFileSync(fullPath, "utf8");

			const { data } = matter(fileContents);

			return {
				slug,
				title: typeof data.title === "string" ? data.title : slug,
				description: typeof data.description === "string" ? data.description : "",
				image: typeof data.image === "string" ? data.image : "/projects/placeholder.jpg",
				tech: Array.isArray(data.tech) ? data.tech : [],
			};
		});
}
