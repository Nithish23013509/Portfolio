import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import LightPillar from './LightPillar';
import './Hero.css';

const titles = [
  'Full Stack Developer',
  'Spring Boot Engineer',
  'React.js Developer',
  'AWS Cloud Practitioner'
];

const stats = [
  { value: '3+', label: 'Full-Stack Projects' },
  { value: '3', label: 'Internships & Training' },
  { value: '4', label: 'Certifications' }
];

const floatingBadges = [
  { id: 'aws', label: 'AWS Certified', dotColor: '#f59e0b', glowColor: 'rgba(245, 158, 11, 0.4)', positionClass: 'badge-top-left', delay: 0 },
  { id: 'work', label: 'Open to Work', dotColor: '#1aff75', glowColor: 'rgba(26, 255, 117, 0.45)', positionClass: 'badge-top-right', delay: 1.2 },
  { id: 'spring', label: 'Spring Boot', dotColor: '#1aff75', glowColor: 'rgba(26, 255, 117, 0.4)', positionClass: 'badge-bottom-left', delay: 0.6 },
  { id: 'react', label: 'React.js', dotColor: '#ff2d2d', glowColor: 'rgba(255, 45, 45, 0.4)', positionClass: 'badge-bottom-right', delay: 1.8 }
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  // Typewriter effect with smooth timing and no clipping
  useEffect(() => {
    if (reduceMotion) {
      setDisplayText(titles[0]);
      return undefined;
    }

    const currentFullTitle = titles[currentTitleIndex];
    let typingSpeed = isDeleting ? 32 : 72;

    if (!isDeleting && displayText === currentFullTitle) {
      // Extended pause at complete title for comfortable reading
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2600);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && displayText === '') {
      // Natural brief breath before typing next title
      const nextTitleTimeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, 350);
      return () => clearTimeout(nextTitleTimeout);
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentFullTitle.substring(0, prev.length - 1);
        }
        return currentFullTitle.substring(0, prev.length + 1);
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, reduceMotion]);

  const scrollToProjects = (event) => {
    event.preventDefault();
    const projectsEl = document.querySelector('#projects');
    if (projectsEl) {
      const headerOffset = 85;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-light-pillar-wrapper" aria-hidden="true">
        <LightPillar
          topColor="#ff2d2d"
          bottomColor="#ea5c08"
          intensity={0.6}
          glowAmount={0.0013}
          bloom={0.3}
          pillarWidth={2.4}
          pillarHeight={0.4}
          pillarRotation={20}
          rotationSpeed={0.22}
          interactive
          clickPulse
          intro
          quality="high"
          mixBlendMode="normal"
          flow={1.05}
          noiseIntensity={0.25}
          fade={0.75}
        />
      </div>

      <div className="hero-container">
        {/* Left Column: Introduction & Copy */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Availability Pill */}
          <div className="hero-badge">
            <span className="badge-pulse-dot" />
            <span>Available for opportunities</span>
          </div>

          {/* Dominant Name & Animated Subtitle */}
          <h1 className="hero-title">
            <span className="hero-name-line">Nithish S</span>
            <span className="hero-role-line" aria-label={`Role: ${displayText}`}>
              <span className="gradient-text">{displayText || 'Full Stack Developer'}</span>
              <span className="typewriter-cursor" aria-hidden="true" />
            </span>
          </h1>

          {/* Positioning Summary */}
          <p className="hero-summary">
            Full Stack Developer &amp; AWS Certified Cloud Practitioner. Building scalable
            web apps with <strong>Java, Spring Boot</strong> &amp; <strong>React.js</strong> —
            from robust APIs to animated UIs.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-hero-primary" onClick={scrollToProjects}>
              <span>View Projects</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="/NITHISH_S_RESUME.pdf"
              download="Nithish_S_Resume.pdf"
              className="btn-hero-secondary"
              aria-label="Download Nithish S Resume (PDF)"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Resume</span>
            </a>

            <a href="mailto:nithish81227@gmail.com" className="btn-hero-ghost">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats-row">
            {stats.map((stat) => (
              <div className="hero-stat-item" key={stat.label}>
                <span className="stat-number">{stat.value}</span>
                <span className="stat-description">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Circular Profile Frame with Orbiting Badges */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="profile-stage">
            {/* Ambient Backlight Glow */}
            <div className="stage-ambient-glow" />

            {/* Orbital Dashed Ring */}
            <div className="orbital-dashed-ring" />

            {/* Glowing Conic Ring Container */}
            <div className="profile-ring-outer">
              <div className="profile-ring-inner">
                <div className="profile-photo-container">
                  <img
                    src="/Nithish_img.png"
                    alt="Nithish S - Full Stack Developer"
                    className="profile-photo"
                  />
                </div>
              </div>
            </div>

            {/* 4 Floating Technology & Status Badges */}
            {floatingBadges.map((b) => (
              <motion.div
                key={b.id}
                className={`floating-tech-badge ${b.positionClass}`}
                animate={reduceMotion ? {} : { y: [0, -7, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: b.delay
                }}
              >
                <span
                  className="badge-dot"
                  style={{
                    backgroundColor: b.dotColor,
                    boxShadow: `0 0 10px ${b.dotColor}`
                  }}
                />
                <span className="badge-text">{b.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
