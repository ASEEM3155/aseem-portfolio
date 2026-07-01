import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '../constants/routes';
import { profile } from '../data/portfolio';

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-ink/5 bg-white/65 backdrop-blur-2xl"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <NavLink to="/" className="font-display text-lg font-black text-ink" aria-label="Go home">
          {profile.name}<span className="text-mint">.</span>
        </NavLink>
        <div className="scrollbar-hide flex max-w-[72vw] items-center gap-1 overflow-x-auto rounded-full border border-ink/10 bg-white/70 p-1 shadow-sm">
          {routes.map((route) => (
            <NavLink key={route.path} to={route.path} className="relative whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold text-graphite transition hover:text-ink sm:px-4">
              {route.label}
              <AnimatePresence>
                {pathname === route.path && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-mint/18" transition={{ type: 'spring', stiffness: 360, damping: 34 }} />}
              </AnimatePresence>
            </NavLink>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
