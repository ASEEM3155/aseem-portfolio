import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback, useMemo } from 'react';

const presets = {
  hero: { number: 30, shape: 'circle', links: true, speed: 0.28 },
  projects: { number: 24, shape: 'triangle', links: true, speed: 0.22 },
  skills: { number: 26, shape: 'circle', links: false, speed: 0.24 },
  contact: { number: 34, shape: 'circle', links: true, speed: 0.2 },
  default: { number: 22, shape: 'circle', links: true, speed: 0.18 },
};

export default function ParticleField({ variant = 'default' }) {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const chosen = presets[variant] || presets.default;
  const options = useMemo(() => ({
    fullScreen: false,
    detectRetina: true,
    background: { color: 'transparent' },
    fpsLimit: 60,
    particles: {
      number: { value: chosen.number, density: { enable: true, area: 1100 } },
      color: { value: ['#00E5A8', '#111111', '#96F7DE'] },
      opacity: { value: { min: 0.08, max: 0.24 } },
      size: { value: { min: 1, max: 2.4 } },
      move: { enable: true, speed: chosen.speed, outModes: 'bounce' },
      shape: { type: chosen.shape },
      links: { enable: chosen.links, color: '#00E5A8', opacity: 0.12, distance: 118, width: 1 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
      modes: { repulse: { distance: 72, duration: 0.35 } },
    },
  }), [chosen]);

  return <Particles className="pointer-events-none absolute inset-0 -z-10" init={init} options={options} />;
}
