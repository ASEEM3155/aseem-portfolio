import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import ParticleField from '../components/ParticleField';
import PageShell from '../layouts/PageShell';
import { achievements } from '../data/portfolio';

export default function Achievements() {
  return (
    <PageShell particle={<ParticleField />}>
      <section className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Achievements" title="Competitive Milestones & Technical Wins." copy="Recognitions earned through competitive hackathons, technical symposia, and academic innovation challenges." />
        <div className="grid gap-6 md:grid-cols-2">{achievements.map((achievement, index) => <motion.article key={achievement.title} className="relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/80 p-7 shadow-premium backdrop-blur-xl" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} whileHover={{ y: -8 }}><div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-mint/18" /><div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-2xl text-mint"><FiStar /></div><p className="mt-8 font-display text-6xl font-black text-mint">{achievement.metric}</p><h2 className="mt-3 font-display text-3xl font-black text-ink">{achievement.title}</h2><p className="mt-3 leading-8 text-graphite/70">{achievement.detail}</p></motion.article>)}</div>
      </section>
    </PageShell>
  );
}
