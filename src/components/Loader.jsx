import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Loader.css';

export default function Loader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onCompleteRef.current?.();
    }, 850);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <motion.div
            className="loader-mark"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="loader-bracket">&lt;</span>
            <span className="loader-title">NITHISH_S</span>
            <span className="loader-slash">/</span>
            <span className="loader-bracket">&gt;</span>
          </motion.div>
          <div className="loader-track">
            <div className="loader-progress-bar" />
          </div>
          <div className="loader-status-text">INITIALIZING SYSTEMS...</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
