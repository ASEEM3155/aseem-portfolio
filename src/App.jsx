import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import { useLenis } from './hooks/useLenis';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

export default function App() {
  const location = useLocation();
  useLenis();

  return (
    <div className="min-h-screen bg-white text-ink selection:bg-mint selection:text-ink">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
