import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PillNav from './PillNav';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // If the page was loaded with an initial hash (e.g. #projects), scroll smoothly to it
    if (window.location.hash) {
      const initialTarget = document.querySelector(window.location.hash);
      if (initialTarget) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = initialTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: reduceMotion ? 'auto' : 'smooth'
          });
        }, 120);
      }
    }
  }, [reduceMotion]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // If scrolled near bottom of page, highlight Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActive('contact');
        return;
      }

      const sections = ['home', 'about', 'projects', 'experience', 'certifications', 'education', 'contact'];
      let current = 'home';
      const activationOffset = 140; // Pixels from viewport top to trigger active state

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= activationOffset) {
            current = sectionId;
          }
        }
      }

      setActive(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event, href) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }
    if (!href) return;
    if (href === '#home' || href === '#hero' || href === '#') {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      if (window.location.hash !== '#home') {
        history.pushState(null, '', '#home');
      }
      return;
    }
    const target = document.querySelector(href);
    if (!target) return;
    const headerOffset = 80; // Clean headroom below the floating navbar
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
    if (window.location.hash !== href) {
      history.pushState(null, '', href);
    }
  };

  const NavLink = ({ href, children, onClick, ...props }) => {
    return (
      <a
        href={href}
        {...props}
        onClick={(e) => {
          if (href === '#home' || href === '#') {
            handleNavClick(e, '#home');
          }
          onClick?.(e);
        }}
      >
        {children}
      </a>
    );
  };

  const brandLogo = (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 800,
        fontSize: '0.74rem',
        letterSpacing: '-0.02em',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        userSelect: 'none'
      }}
    >
      <span style={{ color: '#ff2d2d' }}>&lt;</span>
      <span style={{ color: '#ffffff' }}>NS</span>
      <span style={{ color: '#ff4d4d' }}>/</span>
      <span style={{ color: '#ff2d2d' }}>&gt;</span>
    </span>
  );

  return (
    <motion.header
      className={`nav-header ${scrolled ? 'is-scrolled' : ''}`}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-capsule-wrap">
        <PillNav
          logo={brandLogo}
          logoAlt="Nithish S Home"
          logoHref="#home"
          items={navItems}
          activeHref={`#${active}`}
          onItemClick={(item, index, event) => handleNavClick(event, item.href)}
          linkComponent={NavLink}
          theme="dark"
          layout="split"
          itemStyle="pill"
          hoverEffect="fill"
          indicator="dot"
          size="md"
          surface="glass"
          highlightColor="#ff2d2d"
          highlightTextColor="#ffffff"
          bounce={0.3}
          stretch={0.4}
          collapse="auto"
          ariaLabel="Main Portfolio Navigation"
        />

        <a
          href="mailto:nithish81227@gmail.com"
          className="nav-cta-pill desktop-nav"
          aria-label="Hire Nithish S"
        >
          <span>Hire Me</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </motion.header>
  );
}
