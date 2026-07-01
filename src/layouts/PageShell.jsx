import { motion } from 'framer-motion';
import { pageVariants } from '../animations/variants';

export default function PageShell({ children, particle, className = '' }) {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" className={`relative min-h-screen overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 ${className}`}>
      {particle}
      <div className="pointer-events-none absolute left-1/2 top-24 -z-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl" />
      {children}
    </motion.main>
  );
}
