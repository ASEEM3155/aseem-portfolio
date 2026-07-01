import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiSend, FiFileText } from 'react-icons/fi';
import MagneticButton from '../components/MagneticButton';
import ParticleField from '../components/ParticleField';
import SectionHeader from '../components/SectionHeader';
import PageShell from '../layouts/PageShell';
import { profile } from '../data/portfolio';

export default function Contact() {
  const socials = [
    { label: 'GitHub',   href: 'https://github.com/ASEEM3155',                                                          icon: FaGithub,   external: true  },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aseem-mh/',                                                  icon: FaLinkedin, external: true  },
    { label: 'Email',    href: 'mailto:aseem3166@gmail.com',                                                             icon: FiMail,     external: false },
    { label: 'Resume',   href: 'https://drive.google.com/file/d/1O5JBR-6TO0M2WHGuySu0Iey8CEKwtQvi/view?usp=sharing',   icon: FiFileText, external: true  },
  ];
  return (
    <PageShell particle={<ParticleField variant="contact" />}>
      <section className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Contact" title="Let's build something impactful together." copy="Have an opportunity, a project idea, or just want to connect? Drop a message below or reach out via my socials." />
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
          <form className="rounded-[2rem] border border-ink/10 bg-white/80 p-6 shadow-premium backdrop-blur-xl sm:p-8">
            <label className="mb-5 block"><span className="mb-2 block text-sm font-bold text-ink">Name</span><input className="w-full rounded-2xl border border-ink/10 bg-pearl px-4 py-4 outline-none transition focus:border-mint" placeholder="Your full name" /></label>
            <label className="mb-5 block"><span className="mb-2 block text-sm font-bold text-ink">Email</span><input type="email" className="w-full rounded-2xl border border-ink/10 bg-pearl px-4 py-4 outline-none transition focus:border-mint" placeholder="your@email.com" /></label>
            <label className="mb-6 block"><span className="mb-2 block text-sm font-bold text-ink">Message</span><textarea className="min-h-36 w-full rounded-2xl border border-ink/10 bg-pearl px-4 py-4 outline-none transition focus:border-mint" placeholder="Tell me about the opportunity or project idea..." /></label>
            <MagneticButton><FiSend className="mr-2" /> Send Message</MagneticButton>
          </form>
          <div className="rounded-[2rem] border border-ink/10 bg-ink p-6 text-white shadow-premium sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-mint">Connect</p>
            <h2 className="mt-4 font-display text-4xl font-black">Available for Software Engineering, Full-Stack Development, ServiceNow, and Cloud roles.</h2>
            <div className="mt-8 grid grid-cols-2 gap-4">{socials.map(({ label, href, icon: Icon, external }) => <motion.a key={label} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="grid min-h-32 place-items-center rounded-[1.5rem] border border-white/10 bg-white/8 text-center text-white backdrop-blur-xl" whileHover={{ rotate: -2, scale: 1.04, boxShadow: '0 0 40px rgba(0,229,168,.25)' }}><Icon className="text-4xl text-mint" /><span className="text-sm font-bold">{label}</span></motion.a>)}</div>
            <footer className="mt-10 border-t border-white/10 pt-6 text-sm text-white/55">Copyright 2026 Aseem.</footer>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
