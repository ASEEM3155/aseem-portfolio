import { Float, Html, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { FaAws, FaCloud, FaDocker, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';

function CoreObject() {
  const group = useRef();
  // Pointer-reactive tilt only — no continuous rotation
  useFrame((state) => {
    group.current.rotation.y = state.pointer.x * 0.22;
    group.current.rotation.x = state.pointer.y * 0.16;
  });

  return (
    <group ref={group}>
      <mesh castShadow>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.16}
          metalness={0.12}
          transmission={0.2}
          thickness={0.8}
          clearcoat={1}
        />
      </mesh>
      <mesh scale={1.08}>
        <torusGeometry args={[1.8, 0.012, 12, 120]} />
        <meshStandardMaterial color="#00E5A8" emissive="#00E5A8" emissiveIntensity={1.8} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0, 0]} scale={0.78}>
        <torusGeometry args={[1.8, 0.01, 12, 120]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
    </group>
  );
}

function IconOrbit() {
  const icons = [FaReact, FaJava, FaCloud, FaAws, FaDocker, FaNodeJs];
  return (
    <group>
      {icons.map((Icon, index) => {
        const angle = (index / icons.length) * Math.PI * 2;
        return (
          <Html
            key={index}
            position={[Math.cos(angle) * 2.5, Math.sin(index) * 0.45, Math.sin(angle) * 2.5]}
            transform
            occlude
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/60 bg-white/80 text-2xl text-ink shadow-premium backdrop-blur-xl">
              <Icon />
            </div>
          </Html>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="h-[420px] w-full sm:h-[520px] lg:h-[620px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} shadows dpr={[1, 1.7]}>
        <ambientLight intensity={1.15} />
        <directionalLight position={[4, 4, 4]} intensity={2.2} castShadow />
        <pointLight position={[-3, -2, 3]} color="#00E5A8" intensity={12} />
        <Suspense fallback={null}>
          <Float speed={2.2} rotationIntensity={0} floatIntensity={0.8}>
            <CoreObject />
            <IconOrbit />
          </Float>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
