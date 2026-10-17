import { useRef } from 'react';
import './SpotlightCard.css';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(255, 45, 45, 0.18)',
  style,
  ...props
}) {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = divRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
      style={{
        '--spotlight-color': spotlightColor,
        ...style
      }}
      {...props}
    >
      <div className="spotlight-overlay" aria-hidden="true" />
      <div className="spotlight-content">{children}</div>
    </div>
  );
}
