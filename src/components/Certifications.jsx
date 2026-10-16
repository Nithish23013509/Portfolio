import { motion } from 'framer-motion';
import './Certifications.css';

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
    icon: '☁️',
    colorClass: 'cert-aws'
  },
  {
    name: 'Developing Front-End Apps with React',
    issuer: 'IBM',
    year: '2025',
    icon: '⚛️',
    colorClass: 'cert-ibm'
  },
  {
    name: 'IT Support Professional Certificate',
    issuer: 'Google',
    year: '2025',
    icon: '🛡️',
    colorClass: 'cert-google'
  },
  {
    name: 'Generative AI for Everyone',
    issuer: 'Coursera (DeepLearning.AI)',
    year: '2024',
    icon: '🧠',
    colorClass: 'cert-ai'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <motion.div
        className="cert-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">Credentials</div>
        <h2 className="section-title">
          Verified industry <span className="text-gradient">certifications</span>.
        </h2>
        <p className="section-kicker">
          Official credentials in cloud infrastructure, frontend React engineering,
          and artificial intelligence.
        </p>
      </motion.div>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.name}
            className={`cert-card glass-panel ${cert.colorClass}`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5 }}
          >
            <div className="cert-icon-box" aria-hidden="true">
              <span className="cert-emoji">{cert.icon}</span>
            </div>

            <div className="cert-content">
              <span className="cert-year-tag">{cert.year}</span>
              <h3 className="cert-title">{cert.name}</h3>
              <p className="cert-issuer-text">{cert.issuer}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
