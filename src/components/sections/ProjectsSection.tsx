import { useState } from 'react';
import ProjectCard from '../shared/ProjectCard';
import { projects, featuredProjects } from '../../data/projects';

const ProjectsSection = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);

    const toggleShowAll = () => {
        setShowAllProjects(!showAllProjects);
    };

    const displayProjects = showAllProjects ? projects : featuredProjects;

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-xl tracking-[1.5px] font-bold text-white whitespace-nowrap">
                        {showAllProjects ? 'All' : 'Featured'}{' '}
                        <span className="text-yellow-400">Projects</span>
                    </h2>
                    <div className="flex-1 h-px bg-gray-400/30 ml-18" />
                    <button
                        onClick={toggleShowAll}
                        className="border-[1px] border-yellow-400/50 hover:border-yellow-400 text-yellow-400 rounded-md px-4 py-[5px] font-semibold text-[13px] tracking-[1.5px] transition-colors duration-200 cursor-pointer focus:outline-none"
                    >
                        {showAllProjects ? 'Featured Projects' : 'All Projects'}
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProjects.length > 0 ? (
                        displayProjects.map((project) => (
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
            </div>
        </section>
    );
};

export default ProjectsSection;
