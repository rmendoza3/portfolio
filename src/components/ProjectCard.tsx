import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Project } from '@/data/projects';

type ProjectCardProps = {
	project: Project;
};

export default function ProjectCard({project}: ProjectCardProps) {
	return (
		<div
			key={project.id}
			className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
		>
			<Link href={`/projects/${project.id}`} className="block">
				<div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
					<ImageWithFallback
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
			</Link>
			<div className="p-6">
				<Link href={`/projects/${project.id}`}>
					<h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
						{project.title}
					</h3>
				</Link>
				<p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

				{/* Technologies */}
				<div className="flex flex-wrap gap-2 mb-4">
					{project.technologies.slice(0, 3).map((tech, index) => (
						<span
							key={index}
							className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
						>
                      {tech}
                    </span>
					))}
					{project.technologies.length > 3 && (
						<span className="px-3 py-1 text-sm text-gray-500">
                      +{project.technologies.length - 3}
                    </span>
					)}
				</div>

				{/* Links */}
				<div className="flex gap-4">
					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
						>
							<FaArrowUpRightFromSquare className="w-4 h-4 mr-1" />
							Live Demo
						</a>
					)}
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
						>
							<FaGithub className="w-4 h-4 mr-1" />
							Code
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
