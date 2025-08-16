import { useState } from 'react';
import { projectsData } from '../../data/projects';
import { TechIcons, RocketIcon } from '../shared/Icons';

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('All');

  return (
    <section id="projects" className="projects-container py-24 border-t border-white/10">
      <div className="flex items-center justify-center gap-3 mb-8">
        <svg className="h-5 w-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
        <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
      </div>

      {/* Tech Filter Orbs */}
      <div className="tech-filter">
        {['All', 'Laravel', 'React', 'Angular', 'Spring Boot', 'Vue.js', 'Symfony'].map((tech) => (
          <div 
            key={tech}
            className={`tech-orb ${selectedTech === tech ? 'active' : ''}`}
            onClick={() => setSelectedTech(selectedTech === tech ? 'All' : tech)}
          >
            <span className="tech-orb-icon">
              {TechIcons[tech as keyof typeof TechIcons]()}
            </span>
            {tech}
          </div>
        ))}
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div 
            key={project.title}
            className={`project-card ${
              selectedTech === 'All' || project.stack.includes(selectedTech) 
                ? 'filtered-in' 
                : 'filtered-out'
            }`}
          >
            {/* Data Flow Particles */}
            <div className="project-data-flow">
              <div className="data-particle"></div>
              <div className="data-particle"></div>
              <div className="data-particle"></div>
              <div className="data-particle"></div>
            </div>

            <div className="project-title">{project.title}</div>
            <p className="text-sm text-white/75 leading-relaxed">{project.desc}</p>
            
            <div className="project-tech-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            {project.github ? (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-launch-btn"
              >
                <span>View on GitHub</span>
                <span className="launch-icon">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
              </a>
            ) : (
              <button className="project-launch-btn">
                <span>Explore Project</span>
                <span className="launch-icon">
                  <RocketIcon />
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 