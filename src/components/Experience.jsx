import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    period: 'Feb 2026 – Apr 2026',
    role: 'Full Stack Developer Intern',
    company: 'Infosys Springboard — Internship 6.0 (B 13) · Virtual',
    desc: 'Developed a full-stack Kanban Task Manager using React.js and Spring Boot with JWT authentication, drag-and-drop via @dnd-kit, and real-time data visualization using Recharts. Deployed on Vercel and Railway following Agile methodologies.',
    skills: ['React.js', 'Spring Boot', 'JWT', 'Vercel', 'Railway']
  },
  {
    period: 'July 2025',
    role: 'Java Intern',
    company: 'Approtech R&D Solutions',
    desc: 'Developed secure Java modules for enterprise applications, implementing encryption and decryption functionalities. Assisted in debugging, testing, and code optimization for production systems.',
    skills: ['Java', 'Security/Encryption', 'Enterprise Systems', 'Testing']
  },
  {
    period: 'Sept – Oct 2025',
    role: 'AI & Cloud Intern',
    company: 'Edunet Foundation',
    desc: 'Completed intensive training in Artificial Intelligence and Cloud Computing with exposure to IBM Cloud and AI tools. Worked on cloud deployment models and foundational AI application development.',
    skills: ['IBM Cloud', 'AI Fundamentals', 'Cloud Architectures']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">Experience</div>
        <h2 className="section-title">
          Internships &amp; <span className="text-gradient">hands-on training</span>.
        </h2>
        <p className="section-kicker">
          Real engineering experience delivering production software, enterprise Java modules,
          and cloud deployments.
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.role}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Pulsing timeline node */}
            <div className="timeline-node" aria-hidden="true">
              <span className="node-glow" />
              <span className="node-core" />
            </div>

            {/* Content card */}
            <div className="timeline-card glass-panel">
              <div className="timeline-meta-bar">
                <span className="timeline-period-badge">{exp.period}</span>
                <span className="timeline-company-name">{exp.company}</span>
              </div>

              <h3 className="timeline-role-title">{exp.role}</h3>
              <p className="timeline-details">{exp.desc}</p>

              <div className="timeline-skills-list">
                {exp.skills.map((s) => (
                  <span className="exp-skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
