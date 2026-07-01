import { motion } from 'framer-motion';
import { reveal } from '../animations/variants';

export default function SectionHeader({ eyebrow, title, copy }) {
  return (
    <motion.div variants={reveal} initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }} className="mx-auto mb-12 max-w-4xl text-center">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-mint">{eyebrow}</p>
      <h1 className="font-display text-4xl font-black leading-[0.96] text-ink sm:text-6xl lg:text-7xl">{title}</h1>
      {copy && <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-graphite/70 sm:text-lg">{copy}</p>}
    </motion.div>
  );
}
