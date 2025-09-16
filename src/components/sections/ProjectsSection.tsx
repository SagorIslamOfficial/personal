import { useState } from 'react';
import ProjectCard from '../shared/ProjectCard';
import { projects, featuredProjects } from '../../data/projects';
import { GiClick } from "react-icons/gi";

const SKELETON_COUNT = 6;

const SkeletonCard = () => (
    <div className="h-full flex">
        <div className="bg-[#23232b] rounded-md w-full flex flex-col border border-gray-800 animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-50 bg-gray-800 rounded-t-md mb-6" />
            {/* Title + yellow bars row */}
            <div className="flex items-center justify-between px-4 mb-4">
                <div className="h-5 w-2/4 bg-gray-700 rounded" />
                <div className="flex gap-1">
                    <div className="h-1 w-6 bg-yellow-400/50 rounded-sm" />
                    <div className="h-1 w-6 bg-yellow-400/20 rounded-sm" />
                    <div className="h-1 w-6 bg-yellow-400/20 rounded-sm" />
                    <div className="h-1 w-6 bg-yellow-400/20 rounded-sm" />
                </div>
            </div>
            {/* Description skeleton */}
            <div className="px-4">
                <div className="h-4 w-full bg-gray-700 rounded mb-1" />
                <div className="h-4 w-5/6 bg-gray-700 rounded mb-3" />
            </div>
            {/* Tags skeleton */}
            <div className="flex flex-wrap gap-2 px-4 my-3">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="h-6 w-16 bg-gray-800 rounded-sm" />
                ))}
            </div>
            {/* Buttons skeleton aligned right */}
            <div className="flex gap-4 justify-end px-4 pb-4 mt-auto">
                <div className="h-8 w-20 bg-gray-800 rounded-sm" />
                <div className="h-8 w-20 bg-gray-800 rounded-sm" />
            </div>
        </div>
    </div>
);

const ProjectsSection = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const toggleShowAll = () => {
        setShowAllProjects(!showAllProjects);
        setCurrentPage(1);
    };

    // Pagination logic
    const projectsPerPage = 6;
    const allProjects = projects;
    const totalPages = showAllProjects
        ? Math.ceil(allProjects.length / projectsPerPage)
        : 1;
    const paginatedProjects = showAllProjects
        ? allProjects.slice(
              (currentPage - 1) * projectsPerPage,
              currentPage * projectsPerPage
          )
        : featuredProjects;

    const handlePageChange = (page: number) => {
        setLoading(true);
        setTimeout(() => {
            setCurrentPage(page);
            setLoading(false);
        }, 700); // Skeleton duration
    };

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-xl tracking-[1.5px] font-bold text-white whitespace-nowrap">
                        {showAllProjects ? 'All' : 'Featured'}{' '}
                        <span className="text-yellow-400">Projects</span>
                    </h2>
                    <div className="flex-1 h-px bg-gray-400/30 ml-40" />
                    <button
                        onClick={toggleShowAll}
                        className="flex items-center border-[1px] border-yellow-400/50 hover:border-yellow-400 text-yellow-400 rounded-md px-4 py-[5px] font-semibold text-[13px] tracking-[1.5px] transition-colors duration-200 cursor-pointer focus:outline-none"
                    >
                        {showAllProjects ? 'Featured Projects' : 'All Projects'}
                        <GiClick className="ml-2 h-4.5 w-4.5 text-white/70 animate-pulse" />
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                            <SkeletonCard key={idx} />
                        ))
                    ) : paginatedProjects.length > 0 ? (
                        paginatedProjects.map((project) => (
                            <div key={project.id} className="h-full flex">
                                <ProjectCard project={project} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
                            <i className="fa-solid fa-folder-open text-6xl text-gray-600 mb-6"></i>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                No projects found
                            </h3>
                            <p className="text-gray-light">
                                No projects available at the moment.
                            </p>
                        </div>
                    )}
                </div>
                {/* Pagination */}
                {showAllProjects && totalPages > 1 && (
                    <div className="flex justify-center mt-15 gap-4">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() =>
                                    !loading && handlePageChange(i + 1)
                                }
                                className={`px-4 py-1 rounded-sm cursor-pointer border border-yellow-600/20 text-white font-semibold text-sm transition-colors duration-200 ${currentPage === i + 1 ? 'bg-yellow-400 !text-black' : 'bg-transparent'}`}
                                disabled={loading}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
