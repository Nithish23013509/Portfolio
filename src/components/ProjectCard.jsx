import { motion } from 'framer-motion';
import './ProjectCard.css';

export default function ProjectCard({ project, index, onSelect }) {
  const handleCardClick = () => {
    onSelect(project);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <motion.article
      className={`project-card glass-panel ${project.featured ? 'is-featured' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-haspopup="dialog"
      aria-label={`View case study for ${project.title}`}
    >
      {/* Background Hover Preview Image */}
      <div className="card-preview-backdrop" aria-hidden="true">
        <img
          src={project.previewImage}
          alt=""
          className="preview-img"
          loading="lazy"
        />
        <div className="preview-gradient-scrim" />
      </div>

      {/* Card Content Layer */}
      <div className="card-content-layer">
        {/* Top bar with ID, Year, and Featured Pill */}
        <div className="project-topbar">
          <span className="project-id">{project.num} / {project.year}</span>
          <div className="topbar-right-tags">
            {project.featured && (
              <span className="featured-pill">Featured Project</span>
            )}
            <span className="case-study-hint-pill">Case Study ↗</span>
          </div>
        </div>

        {/* Mobile Preview Banner (Visible on mobile/tablet) */}
        <div className="mobile-preview-thumb" aria-hidden="true">
          <img src={project.previewImage} alt="" loading="lazy" />
          <div className="mobile-thumb-scrim" />
        </div>

        {/* Title & Description */}
        <h3 className="project-heading">{project.title}</h3>
        <p className="project-description">{project.shortDesc}</p>

        {/* Tech Stack Badges */}
        <div className="project-tags-wrap" aria-label="Key technologies">
          {project.tags.map((tag) => (
            <span className="project-tech-badge" key={tag}>{tag}</span>
          ))}
        </div>

        {/* Action Links & Click Cues */}
        <div className="project-actions-row">
          <div className="external-links-group">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-btn btn-code"
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
                className="project-btn btn-demo"
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

          <div className="card-open-cue">
            <span>Explore Case Study</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
