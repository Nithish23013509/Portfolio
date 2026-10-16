import { motion } from 'framer-motion';
import './Footer.css';

const footerNav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export default function Footer() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.footer
      className="site-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-inner">
        {/* Brand & Copyright */}
        <div className="footer-brand-side">
          <div className="footer-logo">
            <span className="brand-bracket">&lt;</span>
            <span className="brand-name">NS</span>
            <span className="brand-slash">/</span>
            <span className="brand-bracket">&gt;</span>
          </div>
          <p className="footer-copy">
            Designed &amp; Developed by <strong>Nithish S</strong>.
          </p>
          <span className="footer-year">© 2026 · All rights reserved.</span>
        </div>

        {/* Quick Links */}
        <ul className="footer-nav-links">
          {footerNav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => scrollToSection(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Status Indicator */}
        <div className="footer-status">
          <span className="status-ping" />
          <span>Available for hire</span>
        </div>
      </div>
    </motion.footer>
  );
}
