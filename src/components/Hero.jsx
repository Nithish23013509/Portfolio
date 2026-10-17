import { motion, useReducedMotion } from 'framer-motion';
import LightPillar from './LightPillar';
import ProfileCard from './ProfileCard';
import WarpText from './WarpText';
import './Hero.css';

const floatingBadges = [
  { id: 'aws', label: 'AWS Certified', dotColor: '#f59e0b', glowColor: 'rgba(245, 158, 11, 0.4)', positionClass: 'badge-top-left', delay: 0 },
  { id: 'work', label: 'Open to Work', dotColor: '#1aff75', glowColor: 'rgba(26, 255, 117, 0.45)', positionClass: 'badge-top-right', delay: 1.2 },
  { id: 'spring', label: 'Spring Boot', dotColor: '#1aff75', glowColor: 'rgba(26, 255, 117, 0.4)', positionClass: 'badge-bottom-left', delay: 0.6 },
  { id: 'react', label: 'React.js', dotColor: '#ff2d2d', glowColor: 'rgba(255, 45, 45, 0.4)', positionClass: 'badge-bottom-right', delay: 1.8 }
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToProjects = (event) => {
    event.preventDefault();
    const projectsEl = document.querySelector('#projects');
    if (projectsEl) {
      const headerOffset = 80;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
      if (window.location.hash !== '#projects') {
        history.pushState(null, '', '#projects');
      }
    }
  };

  const handleContactClick = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      const headerOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
      if (window.location.hash !== '#contact') {
        history.pushState(null, '', '#contact');
      }
    } else {
      window.location.href = 'mailto:nithish81227@gmail.com';
    }
  };

  return (
    <section id="home" className="hero-section home-section">
      <span id="hero" style={{ position: 'absolute', top: 0, pointerEvents: 'none' }} aria-hidden="true" />
      <div className="hero-light-pillar-wrapper" aria-hidden="true">
        <LightPillar
          topColor="#ff2d2d"
          bottomColor="#ea5c08"
          intensity={0.42}
          glowAmount={0.001}
          bloom={0.2}
          pillarWidth={2.2}
          pillarHeight={0.38}
          pillarRotation={20}
          rotationSpeed={0.2}
          interactive
          clickPulse
          intro
          quality="high"
          mixBlendMode="normal"
          flow={1.02}
          noiseIntensity={0.22}
          fade={0.78}
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

          {/* Dominant Name with WarpText & Static Subtitle */}
          <h1 className="hero-title">
            <span className="hero-name-line">
              <WarpText
                text="Nithish S"
                color="#ffffff"
                warpStrength={0.05}
                warpScale={1.6}
                speed={0.3}
                pointerInfluence={0.35}
                pointerStrength={0.25}
                refraction={0.01}
                chromatic={0}
                ripple={false}
                clickRipple={true}
                idleDrift={0.03}
                lens="bulge"
                intro={false}
                fontSize="clamp(2.8rem, 5.2vw, 4.4rem)"
                fontWeight={800}
                fontFamily="var(--font-heading)"
                letterSpacing="-0.03em"
                lineHeight={1.05}
                className="hero-warp-name"
              />
            </span>
            <span className="hero-role-line">
              <span className="gradient-text">Full Stack Developer</span>
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
        </motion.div>

        {/* Right Column: Holographic 3D ProfileCard with Orbiting Badges */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="profile-stage">
            {/* Ambient Backlight Glow */}
            <div className="stage-ambient-glow" />

            <ProfileCard
              avatarUrl="/Nithish_img.png"
              name=""
              title=""
              showUserInfo={false}
              holo={0.8}
              glare={0.55}
              tiltStrength={12}
              parallax={8}
              radius={20}
              enableTilt={true}
              intro={true}
              theme="dark"
            />

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
