import { motion } from 'framer-motion';
import './About.css';

const highlights = [
  { icon: '📍', label: 'Chennai, India' },
  { icon: '🎓', label: 'B.Tech IT — 2027' },
  { icon: '☁️', label: 'AWS Certified Cloud Practitioner' },
  { icon: '🚀', label: 'Available Now' }
];

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'Java', icon: '☕', highlightClass: 'skill-java' },
      { name: 'JavaScript', icon: '🟨', highlightClass: 'skill-js' },
      { name: 'Python', icon: '🐍', highlightClass: 'skill-python' },
      { name: 'C', icon: '🖥️', highlightClass: 'skill-c' }
    ]
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', icon: '⚛️', highlightClass: 'skill-react' },
      { name: 'HTML', icon: '🌐', highlightClass: 'skill-html' },
      { name: 'CSS', icon: '🎨', highlightClass: 'skill-css' },
      { name: 'Vite', icon: '⚡', highlightClass: 'skill-vite' },
      { name: 'Framer Motion', icon: '🎞️', highlightClass: 'skill-motion' },
      { name: 'Recharts', icon: '📊', highlightClass: 'skill-charts' }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: '🌿', highlightClass: 'skill-spring' },
      { name: 'Spring Security', icon: '🔒', highlightClass: 'skill-security' },
      { name: 'JWT', icon: '🔑', highlightClass: 'skill-jwt' },
      { name: 'Node.js', icon: '🟩', highlightClass: 'skill-node' },
      { name: 'REST APIs', icon: '🔌', highlightClass: 'skill-api' }
    ]
  },
  {
    name: 'Database & Cloud',
    skills: [
      { name: 'MongoDB Atlas', icon: '🍃', highlightClass: 'skill-mongo' },
      { name: 'MySQL', icon: '🗄️', highlightClass: 'skill-mysql' },
      { name: 'AWS EC2', icon: '☁️', highlightClass: 'skill-aws' },
      { name: 'Railway', icon: '🚂', highlightClass: 'skill-railway' },
      { name: 'Vercel', icon: '▲', highlightClass: 'skill-vercel' }
    ]
  },
  {
    name: 'Tools & AI',
    skills: [
      { name: 'Git', icon: '🔀', highlightClass: 'skill-git' },
      { name: 'GitHub', icon: '🐙', highlightClass: 'skill-github' },
      { name: 'VS Code', icon: '💻', highlightClass: 'skill-vscode' },
      { name: 'AWS', icon: '☁️', highlightClass: 'skill-aws' },
      { name: 'GitHub Copilot', icon: '🧠', highlightClass: 'skill-copilot' },
      { name: 'WebSocket', icon: '🔗', highlightClass: 'skill-ws' }
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">Who I Am</div>
        <h2 className="section-title">
          Engineering scalable backends with <span className="text-gradient">fluid interfaces</span>.
        </h2>
      </motion.div>

      <div className="about-layout">
        {/* Left Column: Bio & Background */}
        <motion.div
          className="about-column bio-column"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="column-headline">
            <span className="column-tag">Overview</span>
            <h3 className="column-title">Design &amp; Engineering</h3>
          </div>

          <div className="about-bio-card glass-panel">
            <p className="bio-lead">
              I craft digital experiences that live at the intersection of design and engineering.
            </p>

            <p className="bio-paragraph">
              Pre-final year B.Tech IT student at <strong>Saveetha Engineering College (2023–2027)</strong> with
              hands-on production experience across full-stack development, cloud deployment, and
              robotic process automation.
            </p>

            <p className="bio-paragraph">
              I specialise in building secure, scalable backends with <strong>Spring Boot + JWT</strong> and
              bringing them to life with animated, responsive React frontends. My recent Banking Management System
              showcases this end-to-end capability.
            </p>

            <div className="bio-highlights">
              {highlights.map((h) => (
                <span className="bio-pill" key={h.label}>
                  <span className="pill-icon" aria-hidden="true">{h.icon}</span>
                  <span>{h.label}</span>
                </span>
              ))}
            </div>

            <div className="bio-social-actions">
              <a
                href="https://github.com/Nithish23013509"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nithish-s-072038297/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:nithish81227@gmail.com"
                className="social-btn"
                aria-label="Send Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Categorized Tech Stack */}
        <motion.div
          className="about-column skills-column"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="column-headline">
            <span className="column-tag">Stack</span>
            <h3 className="column-title">Technologies I work with daily</h3>
          </div>

          <div className="skill-groups-list">
            {skillCategories.map((cat) => (
              <div className="skill-category-group glass-panel" key={cat.name}>
                <div className="category-label-row">
                  <span className="category-title">{cat.name}</span>
                  <span className="category-count">{cat.skills.length} tools</span>
                </div>
                <div className="skill-chips-grid">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`skill-chip ${skill.highlightClass}`}
                    >
                      <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                      <span className="skill-text">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
