import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [point, setPoint] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-3 w-3 rounded-full bg-ink/80 mix-blend-difference md:block"
        animate={{ x: point.x - 6, y: point.y - 6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 34, mass: 0.45 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-28 w-28 rounded-full bg-mint/12 blur-3xl md:block"
        animate={{ x: point.x - 56, y: point.y - 56 }}
        transition={{ type: 'spring', stiffness: 70, damping: 32, mass: 0.9 }}
      />
    </>
  );
}
