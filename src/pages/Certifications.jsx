import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import ParticleField from '../components/ParticleField';
import PageShell from '../layouts/PageShell';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <PageShell particle={<ParticleField />}>
      <section className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Certification" title="Validated Professional Expertise." copy="Industry-recognized certifications in enterprise cloud architecture, full-stack Java development, and ServiceNow workflow automation." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{certifications.map((cert) => <motion.article key={cert.id} className="group h-72 [perspective:1000px]"><div className="relative h-full rounded-[1.5rem] transition duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"><div className="absolute inset-0 rounded-[1.5rem] border border-ink/10 bg-white/80 p-6 shadow-premium [backface-visibility:hidden]"><div className="grid h-16 w-16 place-items-center rounded-2xl bg-mint text-3xl text-ink"><FiAward /></div><h2 className="mt-8 font-display text-2xl font-black text-ink">{cert.title}</h2><p className="mt-2 font-semibold text-graphite/60">{cert.issuer}</p></div><div className="absolute inset-0 rounded-[1.5rem] border border-mint/40 bg-ink p-6 text-white shadow-glow [backface-visibility:hidden] [transform:rotateY(180deg)]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-mint">Credential</p><p className="mt-8 text-3xl font-black">{cert.id}</p><p className="mt-4 text-white/65">Issued by {cert.issuer} in {cert.date}</p><a href={cert.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-full bg-white px-4 py-3 text-sm font-bold text-ink hover:bg-mint transition-colors">View Certificate</a></div></div></motion.article>)}</div>
      </section>
    </PageShell>
  );
}
