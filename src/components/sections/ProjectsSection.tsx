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
    <section id="projects" className="py-20 bg-dark-DEFAULT">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </div>
          
          <button
            onClick={toggleShowAll}
            className="px-6 py-2 bg-primary text-dark font-medium rounded hover:bg-primary/90 transition-colors duration-300"
          >
            {showAllProjects ? 'Featured Projects' : 'All Projects'}
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.length > 0 ? (
            displayProjects.map((project) => (
              <div key={project.id} className="animate-fade-in-up">
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <i className="fa-solid fa-folder-open text-6xl text-gray-600 mb-6"></i>
              <h3 className="text-2xl font-bold text-white mb-4">No projects found</h3>
              <p className="text-gray-light">No projects available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;