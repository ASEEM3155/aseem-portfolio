import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import ParticleField from '../components/ParticleField';
import ProjectModal from '../components/ProjectModal';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import PageShell from '../layouts/PageShell';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [active, setActive] = useState(null);
  return (
    <PageShell particle={<ParticleField variant="projects" />}>
      <section className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Projects" title="Transforming complex ideas into functional code." copy="A curated collection of full-stack applications, AI integrations, and security tools built to solve real-world problems." />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => <TiltCard key={project.title} onClick={() => setActive(project)} className="cursor-pointer"><div className="relative min-h-[310px] overflow-hidden" style={{ background: project.image }}><motion.div className="absolute inset-5 rounded-[1.4rem] border border-white/55 bg-white/30 backdrop-blur-md" whileHover={{ scale: 1.03 }} /><div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] bg-white/85 p-5 backdrop-blur-xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-mint">Project 0{index + 1}</p><h2 className="mt-2 font-display text-3xl font-black text-ink">{project.title}</h2></div><div className="flex gap-2 text-ink"><a href={project.github} onClick={(e) => e.stopPropagation()} aria-label="GitHub"><FiGithub /></a><a href={project.live} onClick={(e) => e.stopPropagation()} aria-label="Live demo"><FiExternalLink /></a></div></div><p className="mt-3 leading-7 text-graphite/72">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-mint/25 bg-mint/8 px-3 py-1 text-xs font-semibold text-mint">{tech}</span>)}</div></div></div></TiltCard>)}
        </div>
      </section>
      <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </PageShell>
  );
}
