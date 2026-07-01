import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ParticleField from '../components/ParticleField';
import PageShell from '../layouts/PageShell';
import { reveal } from '../animations/variants';

/* ── Skill descriptions ─────────────────────────────────────────────
   Edit the two-sentence description for any skill here.
   Key = exact skill tag label.
──────────────────────────────────────────────────────────────────── */
const skillDesc = {
  // Programming Languages
  'Java':           'My primary language for backend development, used extensively for OOP, Collections, Exception Handling, and File I/O. Built internship projects and independent applications using clean Java principles.',
  'JavaScript':     'Used for building dynamic, interactive web interfaces and client-side logic. Applied in React-based projects and vanilla DOM manipulation across multiple portfolio builds.',
  'SQL (Basics)':   'Comfortable writing SELECT, JOIN, and filtering queries for relational databases. Applied SQL in full-stack project backends for structured data retrieval.',

  // Frameworks & APIs
  'React.js':       'My go-to frontend library for building component-based, responsive web UIs. Used React hooks, routing, and state management in portfolio and project work.',
  'Spring Boot':    'Used to scaffold and structure Java backend services with minimal configuration. Familiar with REST controller setup, dependency injection, and project layering.',
  'REST APIs':      'Designed and consumed RESTful endpoints in both Java and JavaScript contexts. Applied HTTP methods, status codes, and JSON response structures in project APIs.',

  // Enterprise Platform
  'ServiceNow':     'Certified System Administrator with hands-on platform experience in ITSM workflows, catalog items, and user management. Actively developing skills for the CAD certification.',
  'Flow Designer':  'Built automated approval and notification flows using ServiceNow Flow Designer. Familiar with triggers, conditions, actions, and subflow composition.',
  'Business Rules': 'Written server-side Business Rules in JavaScript to enforce data integrity and automate field logic on ServiceNow tables.',
  'Client Scripts': 'Created Client Scripts (onChange, onLoad, onSubmit) to deliver dynamic form behavior and real-time field validation in ServiceNow portals.',

  // Cloud Infrastructure
  'AWS (Fundamentals)': 'AWS Academy Graduate with foundational knowledge of core services including EC2, S3, IAM, and VPC. Familiar with cloud architecture principles and deployment models.',

  // Developer Tools
  'Git':        'Used Git daily for version control, branching, committing, and merging across personal and internship projects. Comfortable with standard Git workflows.',
  'GitHub':     'Primary platform for hosting repositories, tracking project history, and sharing code. All personal projects are published on github.com/ASEEM3155.',
  'VS Code':    'Primary code editor for web and scripting work. Proficient with extensions, multi-cursor editing, integrated terminal, and debugging tools.',
  'IntelliJ':   'Primary IDE for Java development with full use of code completion, refactoring tools, debugger, and Maven/Gradle project support.',
  'Postman':    'Used Postman to test and document REST APIs during development. Familiar with collections, environment variables, and request chaining.',
  'Kiro':       'AI-powered IDE used for intelligent code generation, refactoring, and building this portfolio. Familiar with spec-driven development and agent-assisted workflows.',
};

/* ── Category card data ─────────────────────────────────────────── */
const categories = [
  {
    icon: '☕',
    title: 'Programming Languages',
    tags: ['Java', 'JavaScript', 'SQL (Basics)'],
  },
  {
    icon: '⚙️',
    title: 'Frameworks & APIs',
    tags: ['React.js', 'Spring Boot', 'REST APIs'],
  },
  {
    icon: '⚡',
    title: 'Enterprise Platform',
    tags: ['ServiceNow', 'Flow Designer', 'Business Rules', 'Client Scripts'],
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    tags: ['AWS (Fundamentals)'],
  },
  {
    icon: '🛠️',
    title: 'Developer Tools',
    tags: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Postman', 'Kiro'],
  },
];

/* ── Single skill tag with expandable description ──────────────── */
function SkillTag({ label }) {
  const [open, setOpen] = useState(false);
  const desc = skillDesc[label];

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-lg font-semibold transition-all duration-200 ${
          open
            ? 'border-mint bg-mint/12 text-ink'
            : 'border-ink/10 bg-white hover:border-mint/60 hover:bg-mint/6 text-graphite/80'
        }`}
        aria-expanded={open}
      >
        {open && <span className="text-mint text-xs leading-none">▾</span>}
        {!open && <span className="text-graphite/30 text-xs leading-none">+</span>}
        {label}
      </button>

      <AnimatePresence initial={false}>
        {open && desc && (
          <motion.div
            key="desc"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="rounded-2xl border border-mint/15 bg-mint/5 px-4 py-3">
              <p className="text-base leading-6 text-graphite/75">{desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════ */
export default function Skills() {
  return (
    <PageShell particle={<ParticleField variant="skills" />}>
      <section className="mx-auto max-w-7xl">

        <SectionHeader
          eyebrow="Skills"
          title="Technical Expertise & Skillset"
          copy="A comprehensive map of my programming competencies, core frameworks, and cloud infrastructure tools."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={reveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
              className="rounded-[1.5rem] border border-ink/8 bg-white/80 p-6 shadow-premium backdrop-blur-xl"
            >
              {/* card header */}
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mint/12 text-xl">
                  {cat.icon}
                </span>
                <h3 className="font-display text-lg font-black text-ink leading-tight">
                  {cat.title}
                </h3>
              </div>

              {/* skill tags */}
              <div className="flex flex-col gap-2">
                {cat.tags.map((tag) => (
                  <SkillTag key={tag} label={tag} />
                ))}
              </div>

              {/* hint */}
              <p className="mt-4 text-[11px] font-medium text-graphite/35">
                Tap a skill to see details
              </p>
            </motion.div>
          ))}
        </div>

      </section>
    </PageShell>
  );
}
