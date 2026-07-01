import { motion } from 'framer-motion';

export default function MagneticButton({ children, href, variant = 'dark', className = '', target, rel, onClick, ...props }) {
  const classes = variant === 'light'
    ? 'border border-ink/10 bg-white/70 text-ink hover:border-mint'
    : 'bg-ink text-white shadow-glow hover:bg-mint hover:text-ink';
  const content = (
    <motion.span
      className={`magnetic relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition ${classes} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
      {children}
    </motion.span>
  );
  return href
    ? <a className="group inline-flex" href={href} target={target} rel={rel} onClick={onClick}>{content}</a>
    : <button className="group inline-flex" type="button" onClick={onClick}>{content}</button>;
}
