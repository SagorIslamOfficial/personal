import { useState } from 'react';
import { type Project } from '../../data/projects';

interface ProjectCardProps {
    project: Project;
    className?: string;
    showFullDescription?: boolean;
}

const ProjectCard = ({
    project,
    className = '',
    showFullDescription = false,
}: ProjectCardProps) => {
    const [currentImageIndex] = useState(0);
    const [, setIsImageLoading] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoading(false);
    };

    const handleImageError = () => {
        setIsImageLoading(false);
        console.warn(
            `Failed to load image: ${project.images[currentImageIndex]?.src}`
        );
    };

    const description = showFullDescription
        ? project.description
        : project.shortDescription || project.description;

    return (
        <div
            className={`bg-gray-800/30 border border-gray-700/30 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 ${className}`}
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={
                        project.images[currentImageIndex]?.src ||
                        project.images[0]?.src
                    }
                    alt={
                        project.images[currentImageIndex]?.alt || project.title
                    }
                    className="w-full h-full object-cover"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                />
            </div>

            {/* Project Details */}
            <div className="p-6 space-y-4">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white">
                    {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-light text-sm leading-relaxed">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-700/50 text-gray-light text-xs rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                    {project.links.code && (
                        <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-600 text-gray-light hover:text-white hover:border-primary/50 rounded transition-colors duration-300">
                            <i className="fa-solid fa-code text-sm"></i>
                            Code
                        </button>
                    )}
                    {project.links.demo && (
                        <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-600 text-gray-light hover:text-white hover:border-primary/50 rounded transition-colors duration-300">
                            <i className="fa-solid fa-external-link-alt text-sm"></i>
                            Live Demo
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
