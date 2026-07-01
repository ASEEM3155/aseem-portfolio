import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import PageShell from '../layouts/PageShell';
import { education, stats } from '../data/portfolio';

export default function About() {
  return (
    <PageShell particle={<ParticleField />}>
      <section className="mx-auto max-w-7xl">

        {/* two-column grid starts immediately — no top hero text */}
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">

          {/* ── LEFT — dark gradient card ── */}
          <motion.div
            className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-ink shadow-premium"
            whileHover={{ scale: 1.008 }}
            transition={{ type: 'spring', stiffness: 200, damping: 28 }}
          >
            {/* solid dark background — no green glow */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(145deg, #101412, #1a1f1c)' }}
            />

            {/* ── intro text in the upper portion ── */}
            <div className="absolute left-8 right-8 top-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* eyebrow */}
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-mint/80">
                  About Me
                </p>

                {/* heading */}
                <h2 className="font-display text-2xl font-black leading-snug text-white sm:text-3xl">
                  Crafting software that transforms ideas into impactful solutions.
                </h2>

                {/* paragraph — clean zinc-300, no inline color overrides */}
                <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-7">
                  I am Aseem M H, a Computer Science and Engineering student passionate about Java, Full Stack Development, ServiceNow, and Cloud technologies, focused on building scalable applications that make a real-world impact.
                </p>
              </motion.div>
            </div>

            {/* ── developer profile card — dark glassmorphism ── */}
            <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-zinc-400">Developer profile</p>
              <h2 className="mt-3 font-display text-4xl font-black text-white">Aseem</h2>
              <p className="mt-3 text-zinc-300">
                Software Engineer | Java &amp; Full-Stack Developer | ServiceNow Developer | Cloud Enthusiast
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT — stats + education (completely unchanged) ── */}
          <div className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-ink/10 bg-white/75 p-6 shadow-premium backdrop-blur-xl"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true }}
                >
                  <p className="font-display text-5xl font-black text-ink">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="mt-2 text-sm font-bold text-graphite/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {education.map((item) => (
              <motion.div
                key={item.title}
                className="rounded-[1.5rem] border border-ink/10 bg-pearl p-6"
                whileHover={{ x: 8 }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">{item.period}</p>
                <h3 className="mt-2 font-display text-2xl font-black text-ink">{item.title}</h3>
                <p className="mt-1 font-semibold text-graphite">{item.place}</p>
                <p className="mt-3 leading-7 text-graphite/70">{item.detail}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </PageShell>
  );
}
