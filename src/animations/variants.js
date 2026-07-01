export const pageVariants = {
  initial: { opacity: 0, y: 22, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, filter: 'blur(6px)', transition: { duration: 0.26, ease: [0.4, 0, 0.2, 1] } },
};

export const stagger = {
  animate: { transition: { staggerChildren: 0.055 } },
};

export const reveal = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
