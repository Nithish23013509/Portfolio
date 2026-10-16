import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    previousActiveElement.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (enlargedImage) {
          setEnlargedImage(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus close button inside modal on mount
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
    };
  }, [onClose, enlargedImage]);

  if (!project) return null;

  return createPortal(
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        className="project-modal-dialog"
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="modal-top-bar">
          <button
            className="modal-back-btn"
            onClick={onClose}
            aria-label="Back to projects"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Projects</span>
          </button>

          <div className="modal-top-meta">
            <span className="modal-top-id">{project.num} / {project.year}</span>
            <span className="modal-top-cat">{project.category}</span>
          </div>

          <button
            className="modal-close-icon-btn"
            onClick={onClose}
            aria-label="Close case study dialog"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-scroll-body">
          {/* Section A: Project Hero Banner */}
          <div className="modal-hero-section">
            <div className="modal-hero-image-wrap">
              <img
                src={project.previewImage}
                alt={`${project.title} Preview`}
                className="modal-hero-img"
                onClick={() => setEnlargedImage(project.previewImage)}
                title="Click to enlarge screenshot"
              />
              <div className="hero-img-overlay">
                <span className="enlarge-hint">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>Click to expand image</span>
                </span>
              </div>
            </div>

            <div className="modal-hero-info">
              <div className="modal-category-badge">{project.category}</div>
              <h1 id="modal-project-title" className="modal-title">
                {project.title}
              </h1>
              <p className="modal-lead-summary">{project.shortDesc}</p>

              {/* Meta stats chips */}
              <div className="modal-meta-chips">
                <div className="meta-chip">
                  <span className="meta-chip-label">Role</span>
                  <span className="meta-chip-val">{project.role}</span>
                </div>
                <div className="meta-chip">
                  <span className="meta-chip-label">Timeline</span>
                  <span className="meta-chip-val">{project.duration}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="modal-action-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-action-btn btn-github"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>View Repository</span>
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-action-btn btn-live"
                  >
                    <span>Launch Live Demo</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Section B: Project Overview */}
          <div className="modal-section-block">
            <h2 className="modal-section-title">
              <span className="section-dot" />
              <span>Project Overview</span>
            </h2>
            <div className="overview-content">
              <p className="overview-body-p">{project.overview}</p>

              <div className="problem-solution-grid">
                <div className="ps-card problem-card">
                  <div className="ps-tag problem-tag">The Challenge</div>
                  <p>{project.problemStatement}</p>
                </div>
                <div className="ps-card solution-card">
                  <div className="ps-tag solution-tag">The Solution</div>
                  <p>{project.solution}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section C: Key Implemented Features */}
          <div className="modal-section-block">
            <h2 className="modal-section-title">
              <span className="section-dot" />
              <span>Key Implemented Features</span>
            </h2>
            <div className="features-grid">
              {project.features.map((feat) => (
                <div className="feature-item-card glass-panel" key={feat.title}>
                  <div className="feat-icon-box" aria-hidden="true">{feat.icon}</div>
                  <div className="feat-content">
                    <h3 className="feat-title">{feat.title}</h3>
                    <p className="feat-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section D: Technologies Used */}
          <div className="modal-section-block">
            <h2 className="modal-section-title">
              <span className="section-dot" />
              <span>Technologies &amp; Tools</span>
            </h2>
            <div className="tech-groups-container">
              {Object.entries(project.technologies).map(([categoryKey, techList]) => (
                <div className="tech-group-item glass-panel" key={categoryKey}>
                  <div className="tech-category-title">
                    {categoryKey.toUpperCase()}
                  </div>
                  <div className="tech-badge-list">
                    {techList.map((t) => (
                      <span className="tech-item-badge" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section E: Architecture & Implementation */}
          <div className="modal-section-block">
            <h2 className="modal-section-title">
              <span className="section-dot" />
              <span>Architecture &amp; Engineering</span>
            </h2>
            <div className="architecture-box glass-panel">
              <p>{project.architecture}</p>
            </div>
          </div>

          {/* Section F: Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="modal-section-block">
              <h2 className="modal-section-title">
                <span className="section-dot" />
                <span>Engineering Challenges &amp; Solutions</span>
              </h2>
              <div className="challenges-stack">
                {project.challenges.map((item, idx) => (
                  <div className="challenge-item-card glass-panel" key={idx}>
                    <div className="challenge-col">
                      <span className="ch-label label-issue">Challenge</span>
                      <p>{item.challenge}</p>
                    </div>
                    <div className="challenge-col">
                      <span className="ch-label label-solved">Solution</span>
                      <p>{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Bar Navigation */}
          <div className="modal-bottom-bar">
            <div className="bottom-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="modal-action-btn btn-github"
              >
                <span>GitHub Repo</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-action-btn btn-live"
                >
                  <span>Open Live Application ↗</span>
                </a>
              )}
            </div>

            <button className="modal-close-large-btn" onClick={onClose}>
              Close Case Study
            </button>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Image Preview Modal */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setEnlargedImage(null)}
              aria-label="Close enlarged image"
            >
              x
            </button>
            <motion.img
              src={enlargedImage}
              alt="Enlarged screenshot"
              className="lightbox-img"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
}
