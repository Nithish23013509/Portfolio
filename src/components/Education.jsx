import { motion } from 'framer-motion';
import './Education.css';

const educationList = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'Saveetha Engineering College, Chennai',
    period: '2023 – 2027',
    current: true
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Jayam Vidhyalaya Matric Hr. Sec. School',
    period: '2023',
    current: false
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    school: 'Jayam Vidhyalaya Matric Hr. Sec. School',
    period: '2021',
    current: false
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <motion.div
        className="education-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">Education</div>
        <h2 className="section-title">
          Academic <span className="text-gradient">background</span>.
        </h2>
      </motion.div>

      <div className="education-grid">
        {educationList.map((edu, index) => (
          <motion.article
            key={edu.degree}
            className={`edu-card glass-panel ${edu.current ? 'is-current' : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            <div className="edu-info">
              <div className="edu-status-row">
                <span className="edu-period-pill">{edu.period}</span>
                {edu.current && <span className="edu-current-badge">Currently Enrolled</span>}
              </div>
              <h3 className="edu-degree-title">{edu.degree}</h3>
              <p className="edu-school-name">{edu.school}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
