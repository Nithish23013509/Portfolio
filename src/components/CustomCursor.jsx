import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor({
  targetSelector = 'a, button, [role="button"], input, textarea, select, .skill-chip, .bio-pill, .pill-nav-item, .pill-logo, .project-card, .cert-card, .card-spotlight, .cursor-target, .social-icon-btn, .hero-cta-btn, .back-to-top'
}) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop mouse/fine pointers
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateEnabled = () => setIsEnabled(mediaQuery.matches);
    updateEnabled();

    mediaQuery.addEventListener('change', updateEnabled);
    return () => mediaQuery.removeEventListener('change', updateEnabled);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let isHovering = false;
    let isClicking = false;
    let rafId = null;

    const dot = dotRef.current;
    const ring = ringRef.current;

    document.body.classList.add('has-custom-cursor');

    const updateClasses = () => {
      if (!dot || !ring) return;

      if (isVisible) {
        dot.classList.remove('cursor-hidden');
        ring.classList.remove('cursor-hidden');
      } else {
        dot.classList.add('cursor-hidden');
        ring.classList.add('cursor-hidden');
      }

      if (isHovering) {
        dot.classList.add('is-hovering');
        ring.classList.add('is-hovering');
      } else {
        dot.classList.remove('is-hovering');
        ring.classList.remove('is-hovering');
      }

      if (isClicking) {
        dot.classList.add('is-clicking');
        ring.classList.add('is-clicking');
      } else {
        dot.classList.remove('is-clicking');
        ring.classList.remove('is-clicking');
      }
    };

    const render = () => {
      // Smooth lerp trailing for ring (0.18 creates a responsive yet fluid trail)
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (ring) {
        ring.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    const onPointerMove = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;

      if (!isVisible) {
        isVisible = true;
        // Snap initial ring position directly on first enter to prevent fly-in from corner
        ringX = e.clientX;
        ringY = e.clientY;
      }

      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target;
      const isTarget = target && target.closest ? !!target.closest(targetSelector) : false;
      if (isTarget !== isHovering) {
        isHovering = isTarget;
      }

      updateClasses();
    };

    const onPointerDown = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      isClicking = true;
      updateClasses();
    };

    const onPointerUp = () => {
      isClicking = false;
      updateClasses();
    };

    const onMouseLeave = () => {
      isVisible = false;
      isHovering = false;
      isClicking = false;
      updateClasses();
    };

    const onMouseEnter = (e) => {
      isVisible = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
      ringX = e.clientX;
      ringY = e.clientY;
      updateClasses();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('blur', onMouseLeave);

    // Initial classes state
    updateClasses();
    rafId = requestAnimationFrame(render);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('blur', onMouseLeave);
    };
  }, [isEnabled, targetSelector]);

  if (!isEnabled) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring cursor-hidden" />
      <div ref={dotRef} className="cursor-dot cursor-hidden" />
    </div>
  );
}
