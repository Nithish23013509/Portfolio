import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import './Education.css';

const educationList = [
  {
    index: '01',
    degree: 'B.Tech in Information Technology',
    school: 'Saveetha Engineering College, Chennai',
    period: '2023 – 2027',
    current: true,
    level: 'Undergraduate Degree',
    desc: 'Specializing in software engineering, scalable cloud infrastructure, and modern web application development with hands-on technical internships.',
    highlights: [
      'Spring Boot & Java',
      'React.js Ecosystem',
      'AWS Cloud Architecture',
      'Data Structures & Algorithms',
      'RESTful API Engineering'
    ]
  },
  {
    index: '02',
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Jayam Vidhyalaya Matriculation Higher Secondary School',
    period: '2021 – 2023',
    current: false,
    level: 'Higher Secondary (Class XII)',
    desc: 'Completed higher secondary education in Mathematics and Biology stream with academic excellence and distinction.',
    highlights: [
      'Advanced Mathematics',
      'Physics & Electronics',
      'Chemistry & Lab Practicals',
      'Biology',
      'English Communication'
    ]
  },
  {
    index: '03',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    school: 'Jayam Vidhyalaya Matriculation Higher Secondary School',
    period: '2020 – 2021',
    current: false,
    level: 'Secondary School (Class X)',
    desc: 'Strong academic foundation across mathematical analysis, science fundamentals, and language proficiencies.',
    highlights: [
      'Core Mathematics',
      'General Science',
      'Social Sciences',
      'Language & Literature'
    ]
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
        <p className="section-kicker">
          Structured academic pathway building a solid engineering foundation in IT, mathematics, and computer systems.
        </p>
      </motion.div>

      <ScrollStack
        useWindowScroll
        itemDistance={85}
        itemStackDistance={24}
        stackPosition="125px"
        itemScale={0.035}
        baseScale={0.92}
        dimAmount={0.2}
        blurAmount={0}
        tiltAmount={0}
        rotationAmount={0}
        holdDistance={120}
        smoothScroll={false}
        snap={false}
        className="education-scroll-stack"
      >
        {educationList.map((edu) => (
          <ScrollStackItem
            key={edu.degree}
            itemClassName={`edu-stack-card ${edu.current ? 'is-current' : ''}`}
          >
            <div className="edu-stack-card-inner">
              {/* Top Meta Bar */}
              <div className="edu-stack-topbar">
                <div className="edu-stack-badges">
                  <span className="edu-stack-num">{edu.index}</span>
                  <span className="edu-stack-level">{edu.level}</span>
                  {edu.current ? (
                    <span className="edu-stack-status-badge current">
                      <span className="badge-pulse-dot" />
                      Currently Enrolled
                    </span>
                  ) : (
                    <span className="edu-stack-status-badge completed">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Completed
                    </span>
                  )}
                </div>
                <span className="edu-stack-period-pill">{edu.period}</span>
              </div>

              {/* Main Title & School */}
              <div className="edu-stack-main">
                <div className="edu-stack-heading-group">
                  <h3 className="edu-stack-title">{edu.degree}</h3>
                  <p className="edu-stack-school">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    <span>{edu.school}</span>
                  </p>
                </div>
                <p className="edu-stack-desc">{edu.desc}</p>
              </div>

              {/* Coursework & Focus Highlights */}
              <div className="edu-stack-highlights">
                <span className="edu-highlights-label">Key Focus &amp; Coursework:</span>
                <div className="edu-stack-tags">
                  {edu.highlights.map((tag) => (
                    <span key={tag} className="edu-stack-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
