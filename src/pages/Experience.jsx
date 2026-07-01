import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ParticleField from '../components/ParticleField';
import PageShell from '../layouts/PageShell';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <PageShell particle={<ParticleField />}>
      <section className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Experience" title="Building reliable systems and automated workflows." copy="My professional journey and internships in software engineering, full-stack systems, and cloud platforms." />
        <div className="relative mx-auto space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-mint/45 md:before:left-1/2">
          {experiences.map((item, index) => <motion.article key={item.title} className={`relative md:w-[46%] ${index % 2 ? 'md:ml-auto' : ''}`} initial={{ opacity: 0, x: index % 2 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.025 }}><span className="absolute left-0 top-8 h-8 w-8 rounded-full border-4 border-white bg-mint shadow-glow md:-left-[calc(8.7%+1rem)]" /><div className="ml-12 rounded-[1.5rem] border border-ink/10 bg-white/75 p-6 shadow-premium backdrop-blur-xl md:ml-0"><p className="text-xs font-bold uppercase tracking-[0.26em] text-mint">{item.period}</p><h2 className="mt-2 font-display text-3xl font-black text-ink">{item.title}</h2><p className="mt-1 font-bold text-graphite">{item.company}</p><p className="mt-4 leading-8 text-graphite/70">{item.summary}</p>{item.tags?.length > 0 && (<div className="mt-4 flex flex-wrap gap-2">{item.tags.map((tag) => (<span key={tag} className="rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">{tag}</span>))}</div>)}</div></motion.article>)}
        </div>
      </section>
    </PageShell>
  );
}
