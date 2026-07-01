import { motion } from 'framer-motion';

export default function TiltCard({ children, className = '', onClick }) {
  return (
    <motion.article
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/72 shadow-premium backdrop-blur-xl ${className}`}
      whileHover={{ y: -5, rotateX: 1, rotateY: -1.5, scale: 1.006 }}
      transition={{ type: 'spring', stiffness: 210, damping: 28 }}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(0,229,168,.12), transparent 45%, rgba(0,0,0,.035))' }} />
      {children}
    </motion.article>
  );
}
