import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './Navbar.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = 'hero';

      const sections = ['hero', 'about', 'projects', 'experience', 'certifications', 'education', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 160;
          if (window.scrollY >= top) {
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const headerOffset = 135;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <>
      <motion.header
        className={`nav-header ${scrolled ? 'is-scrolled' : ''}`}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="nav-capsule" aria-label="Main Navigation">
          <a
            href="#hero"
            className="nav-brand"
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label="Nithish S Home"
          >
            <span className="brand-bracket">&lt;</span>
            <span className="brand-name">NS</span>
            <span className="brand-slash">/</span>
            <span className="brand-bracket">&gt;</span>
          </a>

          <ul className="nav-links desktop-nav" role="menubar">
            {navItems.map((item) => {
              const itemId = item.href.slice(1);
              const isActive = active === itemId;
              return (
                <li key={item.href} role="none">
                  <a
                    href={item.href}
                    role="menuitem"
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="nav-active-pill"
                        layoutId="activeNavIndicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="mailto:nithish81227@gmail.com" className="nav-cta-btn desktop-nav">
            <span>Hire Me</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <button
            className={`nav-toggle-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            <span className="bar bar-1" />
            <span className="bar bar-2" />
            <span className="bar bar-3" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-drawer-top">
                <div className="mobile-brand">
                  <span className="brand-bracket">&lt;</span>
                  <span className="brand-name">NS</span>
                  <span className="brand-slash">/</span>
                  <span className="brand-bracket">&gt;</span>
                </div>
                <button
                  className="mobile-close-btn"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="mobile-status-pill">
                <span className="status-dot" />
                Available for full-time &amp; internship roles
              </div>

              <ul className="mobile-links">
                {navItems.map((item, index) => {
                  const itemId = item.href.slice(1);
                  const isActive = active === itemId;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                    >
                      <a
                        href={item.href}
                        className={`mobile-link ${isActive ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="mobile-active-tag">Active</span>}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mobile-drawer-footer">
                <a
                  href="mailto:nithish81227@gmail.com"
                  className="mobile-cta-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Hire Me</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
                <div className="mobile-email">nithish81227@gmail.com</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
