import { useState } from "react";
import { type Project } from "../../data/projects";
import { VscGithubInverted } from "react-icons/vsc";
import { TbExternalLink } from "react-icons/tb";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hasMultipleImages = project.images.length > 1;

    const goToIndex = (idx: number) => setCurrentImageIndex(idx);

    return (
        <div className="bg-[#23232b] border border-[#363641] rounded-md overflow-hidden transition-all duration-300 shadow hover:shadow-lg group flex flex-col h-full">
            {/* Project Image */}
            <div className="relative w-full h-50 bg-black">
                <img
                    src={
                        project.images[currentImageIndex]?.src ||
                        project.images[0]?.src
                    }
                    alt={
                        project.images[currentImageIndex]?.alt || project.title
                    }
                    className="w-full h-full object-cover rounded-t-lg rounded-b-none"
                    loading="lazy"
                />
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-1 bg-[#292935]">
                {/* Inner contents */}
                <div className="flex flex-col flex-1 gap-4 p-6 group-hover:bg-[#363641] transition-colors duration-300">
                    {/* Title + Divider + Carousel Indicator */}
                    <div className="flex items-center gap-4 w-full justify-between">
                        <h3 className="text-white text-base font-medium whitespace-nowrap">
                            {project.title}
                        </h3>
                        {hasMultipleImages && (
                            <div className="flex items-center gap-2 ml-2">
                                {project.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => goToIndex(idx)}
                                        className={`w-6 h-1 cursor-pointer rounded-sm transition-all duration-200 focus:outline-none ${
                                            idx === currentImageIndex
                                                ? "bg-yellow-400"
                                                : "bg-yellow-400/30"
                                        }`}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-[#8c8c8e] text-sm leading-relaxed line-clamp-2">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="bg-[#23232b] text-white px-3 py-1 rounded text-xs font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-5 py-2 px-7 justify-end mt-auto">
                    {project.links.code && (
                        <a
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-yellow-400 hover:underline text-base transition-colors duration-200"
                        >
                            Code
                            <VscGithubInverted className="h-4 w-4" />
                        </a>
                    )}
                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-yellow-400 hover:underline text-base transition-colors duration-200"
                        >
                            Live Demo
                            <TbExternalLink className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
