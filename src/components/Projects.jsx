import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
          and security extensions. Scroll to watch the cards stack into a deck, or click to explore the complete case study.
        </p>
      </motion.div>

      {/* Continuous Page Window Scroll Stack */}
      <div className="projects-stack-container">
        <ScrollStack
          itemDistance={40}
          itemStackDistance={20}
          stackPosition="85px"
          itemScale={0.035}
          baseScale={0.88}
          dimAmount={0.2}
          blurAmount={0}
          tiltAmount={0}
          rotationAmount={0}
          holdDistance={35}
          smoothScroll={false}
          snap={false}
          useWindowScroll={true}
        >
          {projectsData.map((project) => (
            <ScrollStackItem key={project.id} itemClassName="project-scroll-card">
              <div className="stack-card-inner">
                {/* Left Column: Project Details */}
                <div className="stack-card-info">
                  <div className="stack-card-topbar">
                    <div className="stack-card-badges">
                      <span className="stack-card-num">{project.num} / {project.year}</span>
                      <span className="stack-card-category">{project.category}</span>
                    </div>
                    {project.featured && (
                      <span className="stack-card-featured-pill">
                        <span className="featured-star" aria-hidden="true">★</span> Featured Project
                      </span>
                    )}
                  </div>

                  <h3 className="stack-card-title">{project.title}</h3>
                  <p className="stack-card-desc">{project.shortDesc}</p>

                  <div className="stack-card-tags" aria-label="Key technologies">
                    {project.tags.map((tag) => (
                      <span className="stack-card-tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="stack-card-actions">
                    <div className="stack-action-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="stack-btn stack-btn-github"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        <span>GitHub</span>
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="stack-btn stack-btn-demo"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Open live demonstration of ${project.title}`}
                        >
                          <span>Live Demo</span>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      className="stack-btn stack-btn-case-study"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Explore case study for ${project.title}`}
                    >
                      <span>Explore Case Study</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Frame */}
                <div
                  className="stack-card-visual"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  aria-label={`Preview and open case study for ${project.title}`}
                >
                  <div className="stack-mockup-frame">
                    <div className="stack-mockup-header" aria-hidden="true">
                      <span className="mockup-circle red" />
                      <span className="mockup-circle yellow" />
                      <span className="mockup-circle green" />
                      <span className="mockup-tab-title">{project.id}.nithish.dev</span>
                    </div>
                    <div className="stack-img-wrap">
                      <img
                        src={project.previewImage}
                        alt={`${project.title} Preview`}
                        className="stack-mockup-img"
                        loading="lazy"
                      />
                      <div className="stack-img-hover-cue">
                        <span>Explore Case Study ↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Detailed Project Case Study Modal */}
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
