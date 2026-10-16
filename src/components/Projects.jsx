import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
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
          and security extensions. Hover to preview each system, or click to explore the full case study.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelect={setSelectedProject}
          />
        ))}
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
