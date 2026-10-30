import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

const FLOATERS = [
  'PH2_Float_CodeTag',
  'PH2_Float_Braces',
  'PH2_Float_GlassIco',
  'PH2_Float_Ring',
  'PH2_Float_Octa',
];

const PARTICLE_COUNT = 180;
const [PARTICLE_POSITIONS, PARTICLE_COLORS] = (() => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  const col = new Float32Array(PARTICLE_COUNT * 3);
  const mint = new THREE.Color('#2dd4bf');
  const glacier = new THREE.Color('#38bdf8');
  const ice = new THREE.Color('#a7f3d0');

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const s1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
    const r1 = s1 - Math.floor(s1);
    const s2 = Math.sin(i * 45.123 + 12.876) * 23421.631;
    const r2 = s2 - Math.floor(s2);
    const s3 = Math.sin(i * 93.321 + 54.123) * 85321.432;
    const r3 = s3 - Math.floor(s3);

    pos[i * 3] = (r1 - 0.5) * 16;
    pos[i * 3 + 1] = (r2 - 0.5) * 16;
    pos[i * 3 + 2] = (r3 - 0.5) * 12;

    const c = r1 < 0.4 ? mint : r1 < 0.8 ? glacier : ice;
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  return [pos, col];
})();

// Floating Digital Twin 3D Portrait with subtle circular cutout & gentle mint-blue glow
function DigitalTwinPortrait({ scrollRef }) {
  const texture = useTexture('/images/mayank-peswani.jpg');
  const portraitGroupRef = useRef(null);
  const haloRingRef1 = useRef(null);
  const haloRingRef2 = useRef(null);

  useFrame(({ clock }, delta) => {
    const time = clock.elapsedTime;
    const progress = scrollRef.current; // 0.0 to 1.0

    if (portraitGroupRef.current) {
      // Gentle natural hovering above the laptop workstation
      portraitGroupRef.current.position.y = 2.05 + Math.sin(time * 0.9) * 0.06;
      portraitGroupRef.current.rotation.y = Math.sin(time * 0.5) * 0.08;

      // Holographic fold/fade: full size in Hero, seamlessly minimizes as user scrolls past Hero
      const heroVisibility = Math.max(0, Math.min(1, (0.22 - progress) / 0.1));
      portraitGroupRef.current.scale.setScalar(heroVisibility);
      portraitGroupRef.current.visible = heroVisibility > 0.01;
    }

    // Slowly rotate the delicate orbital rings around the portrait
    if (haloRingRef1.current) {
      haloRingRef1.current.rotation.z += delta * 0.22;
    }
    if (haloRingRef2.current) {
      haloRingRef2.current.rotation.z -= delta * 0.18;
    }
  });

  return (
    <group ref={portraitGroupRef} position={[0.2, 2.05, 0]}>
      {/* Soft Glacier Blue ambient aura disc behind portrait */}
      <mesh position={[0, 0, -0.02]}>
        <circleGeometry args={[1.35, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.16} />
      </mesh>

      {/* Soft Arctic Mint aura disc */}
      <mesh position={[0, 0, -0.01]}>
        <circleGeometry args={[1.18, 64]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.26} />
      </mesh>

      {/* Circular masked natural portrait of Mayank Peswani */}
      <mesh position={[0, 0, 0]}>
        <circleGeometry args={[1.05, 64]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* Subtle Glacier Blue outer rim ring */}
      <mesh position={[0, 0, 0.005]}>
        <ringGeometry args={[1.04, 1.065, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
      </mesh>

      {/* Subtle Arctic Mint inner rim accent */}
      <mesh position={[0, 0, 0.006]}>
        <ringGeometry args={[1.03, 1.04, 64]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.45} />
      </mesh>

      {/* Elegant inclined orbital halo ring 1 */}
      <mesh ref={haloRingRef1} rotation={[Math.PI / 2.8, 0.25, 0]}>
        <torusGeometry args={[1.36, 0.007, 16, 80]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.38} />
      </mesh>

      {/* Elegant counter-inclined orbital halo ring 2 */}
      <mesh ref={haloRingRef2} rotation={[-Math.PI / 3.4, -0.3, 0]}>
        <torusGeometry args={[1.48, 0.006, 16, 80]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Reusable GLB 3D Model with integrated Digital Twin portrait & whole-page scroll choreography
function DeveloperUniverseModel({ scrollRef, mouseRef }) {
  const { scene } = useGLTF('/models/portfolio_hero_v1_clean.glb');
  const groupRef = useRef(null);
  const baseFloaterY = useRef({});

  useEffect(() => {
    FLOATERS.forEach((name) => {
      const obj = scene.getObjectByName(name);
      if (obj) {
        baseFloaterY.current[name] = obj.position.y;
      }
    });
  }, [scene]);

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;

    const time = clock.elapsedTime;
    const progress = scrollRef.current; // 0.0 to 1.0
    const mouse = mouseRef.current;

    // Float existing GLB tech symbols
    FLOATERS.forEach((name, i) => {
      const obj = scene.getObjectByName(name);
      if (!obj) return;

      obj.rotation.y += delta * (0.3 + i * 0.05);
      obj.rotation.x = Math.sin(time * 0.6 + i) * 0.15;
      const base = baseFloaterY.current[name] ?? obj.position.y;
      obj.position.y = base + Math.sin(time * 1.0 + i * 1.2) * 0.07;
    });

    // Whole-page scroll choreography:
    // Responsive positioning (desktop on the right, mobile centered)
    const isMobile = window.innerWidth < 1024;
    const baseX = isMobile ? 0 : 1.8;
    const baseY = isMobile ? -0.85 : -0.65;

    const targetY = baseY - progress * 1.8;
    const targetX = baseX - Math.sin(progress * Math.PI) * 1.2 + mouse.x * 0.3;
    const targetRotY = 0.45 + progress * Math.PI * 1.6 + mouse.x * 0.2;
    const targetRotX = 0.12 - progress * 0.25 - mouse.y * 0.15;

    // Smooth lerping for cinematic 60fps movement
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.06);
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.06);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
  });

  return (
    <group ref={groupRef} position={[1.8, -0.65, 0]} scale={1.15}>
      <primitive object={scene} />
      <DigitalTwinPortrait scrollRef={scrollRef} />
    </group>
  );
}

// 3D Arctic Mint & Glacier Blue Orbital Rings around the workstation (Refined & Balanced)
function OrbitalRings({ scrollRef }) {
  const ring1 = useRef(null);
  const ring2 = useRef(null);
  const ring3 = useRef(null);

  useFrame(({ clock }, delta) => {
    const time = clock.elapsedTime;
    const progress = scrollRef.current;

    if (ring1.current) {
      ring1.current.rotation.z += delta * 0.16;
      ring1.current.rotation.x = Math.sin(time * 0.35) * 0.15 + 0.35;
      ring1.current.position.y = 0.25 - progress * 1.2;
    }
    if (ring2.current) {
      ring2.current.rotation.z -= delta * 0.18;
      ring2.current.rotation.y = Math.cos(time * 0.3) * 0.2 - 0.25;
      ring2.current.position.y = 0.15 - progress * 1.4;
    }
    if (ring3.current) {
      ring3.current.rotation.y += delta * 0.12;
      ring3.current.rotation.z = Math.sin(time * 0.25) * 0.12;
      ring3.current.position.y = -progress * 1.6;
    }
  });

  return (
    <group position={[1.6, -0.6, -0.5]}>
      {/* Outer Arctic Mint Ring (Delicate & balanced) */}
      <mesh ref={ring1}>
        <torusGeometry args={[3.1, 0.007, 16, 120]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.22} />
      </mesh>

      {/* Inner Glacier Cyan Ring */}
      <mesh ref={ring2} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.4, 0.006, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.18} />
      </mesh>

      {/* Tilted Ice Horizon Ring */}
      <mesh ref={ring3} rotation={[-Math.PI / 6, Math.PI / 6, 0]}>
        <torusGeometry args={[3.6, 0.005, 16, 120]} />
        <meshBasicMaterial color="#a7f3d0" transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

// Drifting Ice-Crystal Particles
function StardustParticles({ scrollRef }) {
  const pointsRef = useRef(null);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const time = clock.elapsedTime * 0.15;
    const progress = scrollRef.current;

    pointsRef.current.rotation.y = time * 0.3;
    pointsRef.current.position.y = -progress * 2.5;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={PARTICLE_POSITIONS}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={PARTICLE_COLORS}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

// Arctic Mint & Glacier Blue lighting setup with warm key light and cinematic rim
function SceneLighting() {
  return (
    <>
      <ambientLight intensity={1.2} color="#f0fdfa" />
      {/* Soft warm key light illuminating character face & hands */}
      <directionalLight position={[5, 7, 6]} intensity={1.3} color="#fffcf5" />
      {/* Arctic Mint top-left rim light highlighting hair and shoulders */}
      <directionalLight position={[-6, 5, -3]} intensity={0.9} color="#2dd4bf" />
      {/* Glacier Blue subtle fill */}
      <directionalLight position={[0, -2, 4]} intensity={0.4} color="#38bdf8" />

      <Environment resolution={256}>
        <Lightformer
          intensity={1.8}
          color="#38bdf8"
          position={[5, 4, 5]}
          scale={[8, 8, 1]}
        />
        <Lightformer
          intensity={1.6}
          color="#2dd4bf"
          position={[-5, 4, -5]}
          scale={[8, 8, 1]}
        />
        <Lightformer
          intensity={1.0}
          color="#ffffff"
          position={[0, 8, 0]}
          rotation-x={Math.PI / 2}
          scale={[10, 10, 1]}
        />
      </Environment>
    </>
  );
}

// Interactive Universe container reacting to cursor parallax
function InteractiveUniverse({ scrollRef, mouseRef }) {
  const universeRef = useRef(null);

  useFrame(() => {
    if (!universeRef.current) return;
    const mouse = mouseRef.current;
    universeRef.current.position.x = THREE.MathUtils.lerp(
      universeRef.current.position.x,
      mouse.x * 0.25,
      0.05
    );
    universeRef.current.position.y = THREE.MathUtils.lerp(
      universeRef.current.position.y,
      -mouse.y * 0.2,
      0.05
    );
  });

  return (
    <group ref={universeRef}>
      <DeveloperUniverseModel scrollRef={scrollRef} mouseRef={mouseRef} />
      <OrbitalRings scrollRef={scrollRef} />
      <StardustParticles scrollRef={scrollRef} />
      <SceneLighting />
    </group>
  );
}

export default function HeroScene() {
  const scrollRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      scrollRef.current = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Canvas
      className="!bg-transparent pointer-events-none"
      camera={{
        position: [4.2, 3.2, 11],
        fov: 34,
      }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
      onCreated={({ gl, camera }) => {
        gl.setClearColor(0x000000, 0); // 100% transparent canvas
        camera.lookAt(0, 0.4, 0);
      }}
    >
      <Suspense fallback={null}>
        <InteractiveUniverse scrollRef={scrollRef} mouseRef={mouseRef} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload('/models/portfolio_hero_v1_clean.glb');
useTexture.preload('/images/mayank-peswani.jpg');
