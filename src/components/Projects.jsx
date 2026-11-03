import { createPortal } from 'react-dom';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [activeId, setActiveId] = useState(projectsData[0]?.id ?? null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const toggleProject = (projectId) => {
    setActiveId((currentId) => (currentId === projectId ? null : projectId));
  };

  const handleProjectEnter = (project, event) => {
    setHoveredProject(project);
    setPointer({ x: event.clientX, y: event.clientY });
  };

  const handleProjectMove = (event) => {
    setPointer({ x: event.clientX, y: event.clientY });
  };

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">Work</div>
        <h2 className="section-title">
          Featured projects with <span className="text-gradient">production architecture</span>.
        </h2>
        <p className="section-kicker">
          A curated gallery of full-stack systems, banking APIs, interactive dashboards,
          and security extensions. Select a project to explore its architecture and impact.
        </p>
      </motion.div>

      <div className="projects-accordion" aria-label="Projects">
        {projectsData.map((project, index) => {
          const isActive = project.id === activeId;

          return (
            <motion.article
              className={`project-accordion-item${isActive ? ' is-active' : ''}`}
              key={project.id}
              layout
              onMouseEnter={(event) => handleProjectEnter(project, event)}
              onMouseMove={handleProjectMove}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <button
                type="button"
                className="project-accordion-trigger"
                onClick={() => toggleProject(project.id)}
                aria-expanded={isActive}
                aria-controls={`project-panel-${project.id}`}
              >
                <span className="project-accordion-number">{project.num || String(index + 1).padStart(2, '0')}</span>
                <span className="project-accordion-title">{project.title}</span>
                <span className="project-accordion-category">{project.category}</span>
                <motion.span
                  className="project-accordion-chevron"
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  aria-hidden="true"
                >
                  <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false} mode="wait">
                {isActive && (
                  <motion.div
                    id={`project-panel-${project.id}`}
                    className="project-accordion-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="project-accordion-content">
                      <div className="project-accordion-copy">
                        <p className="project-accordion-description">{project.shortDesc}</p>

                        <div className="project-accordion-tags" aria-label="Key technologies">
                          {project.tags.map((tag) => (
                            <span className="project-accordion-tag" key={tag}>{tag}</span>
                          ))}
                        </div>

                        <div className="project-accordion-actions">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-accordion-button project-accordion-button-muted"
                          >
                            GitHub
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="project-accordion-button project-accordion-button-accent"
                            >
                              Live Demo
                            </a>
                          )}
                          <button
                            type="button"
                            className="project-accordion-button project-accordion-button-outline"
                            onClick={() => setSelectedProject(project)}
                          >
                            Explore Case Study
                          </button>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              className="project-cursor-preview"
              initial={{ opacity: 0, scale: 0.84, rotate: -7 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              exit={{ opacity: 0, scale: 0.84, rotate: -5 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              style={{
                left: typeof window !== 'undefined'
                  ? Math.min(pointer.x + 24, Math.max(12, window.innerWidth - 260))
                  : 24,
                top: typeof window !== 'undefined'
                  ? Math.min(pointer.y + 24, Math.max(12, window.innerHeight - 180))
                  : 24,
              }}
            >
              <img src={hoveredProject.previewImage} alt={`${hoveredProject.title} Preview`} />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
