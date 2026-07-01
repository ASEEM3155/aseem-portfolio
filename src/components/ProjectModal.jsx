import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-ink/40 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true">
      <motion.article className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/50 bg-white p-4 shadow-premium sm:p-6" initial={{ y: 40, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }}>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-mint">Case study</p>
            <h2 className="mt-1 font-display text-3xl font-black text-ink sm:text-5xl">{project.title}</h2>
          </div>
          <button onClick={onClose} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/10 bg-white text-ink transition hover:rotate-90 hover:border-mint" aria-label="Close project modal">
            <FiX />
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem]" style={{ background: project.image }}>
            <div className="absolute inset-8 rounded-[1.25rem] border border-white/50 bg-white/35 backdrop-blur-md" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-ink p-5 text-white shadow-premium">
              <p className="text-sm text-white/70">Interactive product preview</p>
              <p className="mt-2 font-display text-2xl font-bold">{project.title}</p>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-ink/10 bg-pearl p-6">
            <p className="text-base leading-8 text-graphite/75">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink">{tech}</span>)}</div>
            <div className="mt-8 space-y-3">{project.features.map((feature) => <div key={feature} className="rounded-2xl border border-ink/8 bg-white px-4 py-3 text-sm font-semibold text-graphite">{feature}</div>)}</div>
            <div className="mt-8 flex gap-3">
              <a href={project.github} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-bold text-white"><FiGithub /> GitHub</a>
              <a href={project.live} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-3 text-sm font-bold text-ink"><FiExternalLink /> Live</a>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
