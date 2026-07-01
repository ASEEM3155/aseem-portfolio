import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
import { FiArrowUpRight, FiDownload, FiFolder, FiCheckCircle, FiMail } from 'react-icons/fi';
import { FaJava, FaReact, FaAws, FaCloud, FaGraduationCap } from 'react-icons/fa';
import { stagger, reveal } from '../animations/variants';
import MagneticButton from '../components/MagneticButton';
import ParticleField from '../components/ParticleField';
import PageShell from '../layouts/PageShell';
import { profile, stats } from '../data/portfolio';

/* ── word-by-word title reveal ───────────────────────────────────── */
const titleReveal = {
  initial: { opacity: 0, y: '110%' },
  animate: { opacity: 1, y: '0%', transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const titleStagger = {
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

/* ── animated counter ───────────────────────────────────────────── */
function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const isFloat = String(target).includes('.');

  useEffect(() => {
    if (!inView) return;
    const end = parseFloat(target);
    const duration = 1400;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(isFloat ? parseFloat(current.toFixed(2)) : Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, isFloat]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(2) : count}{suffix}
    </span>
  );
}

/* ── floating tech badge ─────────────────────────────────────────── */
function FloatingBadge({ icon: Icon, label, delay, className }) {
  return (
    <motion.div
      className={`absolute flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-2 text-xs font-bold text-ink shadow-premium backdrop-blur-xl ${className}`}
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <Icon className="text-mint" />
      {label}
    </motion.div>
  );
}

/* ── overview cards data ─────────────────────────────────────────── */
const overviewCards = [
  {
    icon: '💻',
    title: 'Software Engineer',
    desc: 'I design scalable, maintainable, and efficient software using object-oriented principles, clean architecture, and modern development practices.',
  },
  {
    icon: '🌐',
    title: 'Full Stack Developer',
    desc: 'I build complete web applications using React, Java, Spring Boot, REST APIs, SQL, and modern frontend technologies.',
  },
  {
    icon: '☕',
    title: 'Java Developer',
    desc: 'I develop secure and high-performance Java applications using OOP, Collections, Exception Handling, Multithreading, and Spring Boot.',
  },
  {
    icon: '⚡',
    title: 'ServiceNow Developer',
    desc: 'I create enterprise workflow solutions, automate business processes, and build scalable applications on the ServiceNow platform.',
  },
];

/* ── highlights ──────────────────────────────────────────────────── */
const highlights = [
  'Oracle Certified Professional — Java SE 17 Developer',
  'ServiceNow Certified System Administrator (CSA)',
  'ServiceNow Certified Application Developer (CAD)',
  'AWS Academy Graduate — Cloud Architecting',
  'Oracle Cloud Foundations Associate',
  'Java Development Intern — InternPe',
  'IEEE Hackathon Runner-Up — Cyber Security Track',
  'AI & Cybersecurity Project Builder',
];

/* ══════════════════════════════════════════════════════════════════ */
export default function Home() {
  const [toast, setToast] = useState(false);

  const handleEmail = useCallback((e) => {
    e.preventDefault();
    navigator.clipboard?.writeText('aseem5094@gmail.com').catch(() => {});
    setToast(true);
    setTimeout(() => setToast(false), 3000);
    window.location.href = 'mailto:aseem5094@gmail.com';
  }, []);
  return (
    <PageShell particle={<ParticleField variant="hero" />} className="pt-20">

      {/* ── email toast ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 flex items-center gap-2.5 rounded-2xl border border-mint/30 bg-ink/90 px-5 py-3 shadow-glow backdrop-blur-xl"
          >
            <FiMail className="shrink-0 text-mint" size={15} />
            <span className="text-sm font-semibold text-white">
              Opening mail client to: <span className="text-mint">aseem5094@gmail.com</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] translate-x-1/3 -translate-y-1/4 rounded-full bg-mint/12 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-mint/7 blur-[80px]" />
      </div>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 py-12 lg:grid-cols-[3fr_2fr] lg:gap-16">

        {/* ── LEFT ── */}
        <motion.div variants={stagger} initial="initial" animate="animate" className="flex flex-col">

          {/* greeting pill */}
          <motion.span
            variants={reveal}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-white/75 px-4 py-1.5 text-sm font-semibold text-graphite shadow-sm backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Hello, I'm
          </motion.span>

          {/* NAME — primary focal point */}
          <motion.div variants={reveal} className="overflow-hidden">
            <h1 className="font-display text-[3.5rem] font-black leading-none tracking-tight text-ink sm:text-[4.5rem] lg:text-[5.25rem]">
              Aseem M H
            </h1>
          </motion.div>

          {/* TITLES — clipped line-by-line reveal */}
          <motion.div
            variants={titleStagger}
            initial="initial"
            animate="animate"
            className="mt-3 space-y-0.5"
          >
            {['Software Engineer', 'Full Stack Developer', 'Java Developer'].map((title, i) => (
              <div key={title} className="overflow-hidden">
                <motion.p
                  variants={titleReveal}
                  className={`font-display text-xl font-bold leading-snug sm:text-2xl lg:text-3xl ${
                    i === 1 ? 'text-mint' : 'text-graphite/80'
                  }`}
                >
                  {title}
                </motion.p>
              </div>
            ))}
          </motion.div>

          {/* divider */}
          <motion.div
            variants={reveal}
            className="my-6 h-px w-16 bg-mint/40"
          />

          {/* intro — concise, 2–3 lines */}
          <motion.p
            variants={reveal}
            className="max-w-md text-base leading-7 text-graphite/65 sm:text-[1.05rem] sm:leading-[1.75]"
          >
            Computer Science Engineering student at RMD Engineering College, passionate about transforming complex challenges into simple, scalable software using Java, Full Stack Development, and ServiceNow to solve real-world problems.
          </motion.p>

          {/* education inline badge */}
          <motion.div
            variants={reveal}
            className="mt-5 inline-flex w-fit items-center gap-3 rounded-2xl border border-ink/8 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-xl"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-sm">
              <FaGraduationCap className="text-mint" />
            </span>
            <div>
              <p className="text-[17px] font-bold text-ink leading-none">B.E. Computer Science &amp; Engineering</p>
              <p className="mt-0.5 text-[16px] font-medium text-graphite/60 leading-none">
                RMD Engineering College &nbsp;·&nbsp; CGPA 8.09 &nbsp;·&nbsp; 2027
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="https://drive.google.com/file/d/1O5JBR-6TO0M2WHGuySu0Iey8CEKwtQvi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FiDownload className="mr-2" /> Download Resume
            </MagneticButton>
            <MagneticButton href="/projects" variant="light">
              View Projects <FiFolder className="ml-2" />
            </MagneticButton>
            <MagneticButton href="/contact" variant="light">
              Contact Me <FiArrowUpRight className="ml-2" />
            </MagneticButton>
            <MagneticButton href="mailto:aseem5094@gmail.com" variant="light" onClick={handleEmail}>
              <FiMail className="mr-2" /> Email Me
            </MagneticButton>
          </motion.div>

        </motion.div>

        {/* ── RIGHT — photo + floating badges ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-[340px] items-center justify-center sm:max-w-[400px] lg:max-w-none"
        >
          {/* ambient glow */}
          <div className="absolute inset-0 rounded-full bg-mint/18 blur-[60px]" />

          {/* floating photo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.04 }}
            className="relative z-10 cursor-default"
          >
            {/* gradient border ring */}
            <div
              className="h-72 w-72 sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]"
              style={{
                background: 'linear-gradient(140deg, #00E5A8 0%, #060606 60%, #00E5A8 100%)',
                padding: '3px',
                borderRadius: '9999px',
                boxShadow: '0 24px 80px rgba(0,229,168,0.18), 0 8px 32px rgba(0,0,0,0.12)',
              }}
            >
              <div className="h-full w-full overflow-hidden rounded-full bg-white">
                {/* Profile photo */}
                <img
                  src="/photo.png"
                  alt="Aseem M H"
                  className="h-full w-full rounded-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* floating tech badges — positioned around the circle */}
          <FloatingBadge icon={FaJava}   label="Java"        delay={0}    className="-left-6 top-6 sm:-left-12" />
          <FloatingBadge icon={FaReact}  label="React"       delay={0.7}  className="-right-4 top-12 sm:-right-10" />
          <FloatingBadge icon={FaAws}    label="AWS"         delay={1.2}  className="-left-4 bottom-10 sm:-left-10" />
          <FloatingBadge icon={FaCloud}  label="ServiceNow"  delay={1.8}  className="-right-2 bottom-4 sm:-right-8" />

        </motion.div>

      </section>

      {/* ── PROFESSIONAL OVERVIEW ──────────────────────────────────── */}
      <section className="mx-auto mt-24 max-w-7xl">
        <motion.div
          variants={reveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-mint">What I Do</p>
          <h2 className="font-display text-3xl font-black text-ink sm:text-4xl lg:text-5xl">Professional Overview</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {overviewCards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={reveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.09)' }}
              className="rounded-[1.5rem] border border-ink/8 bg-white/72 p-6 backdrop-blur-xl shadow-premium transition-shadow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/12 text-2xl">
                {card.icon}
              </div>
              <h3 className="font-display text-lg font-black text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-graphite/65">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── QUICK HIGHLIGHTS ───────────────────────────────────────── */}
      <section className="mx-auto mt-20 max-w-7xl">
        <motion.div
          variants={reveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-mint">Credentials</p>
          <h2 className="font-display text-3xl font-black text-ink sm:text-4xl lg:text-5xl">Quick Highlights</h2>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item}
              variants={reveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-3 rounded-2xl border border-ink/8 bg-white/70 p-4 backdrop-blur-xl shadow-sm"
            >
              <FiCheckCircle className="mt-0.5 shrink-0 text-mint" size={16} />
              <p className="text-sm font-semibold text-graphite/80 leading-5">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────── */}
      <section className="mx-auto mt-20 mb-4 max-w-7xl">
        <motion.div
          variants={reveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-mint">By the Numbers</p>
          <h2 className="font-display text-3xl font-black text-ink sm:text-4xl lg:text-5xl">Stats</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={reveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 16px 50px rgba(0,229,168,0.12)' }}
              className="rounded-3xl border border-ink/8 bg-white/70 p-6 text-center backdrop-blur-xl shadow-premium"
            >
              <p className="font-display text-4xl font-black text-ink">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-graphite/55">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </PageShell>
  );
}
