"use client";

import { Float, Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Group, Mesh } from "three";

function ConnectedNodes() {
  const positions = useMemo(
    () =>
      [
        [-1.85, 1.05, 0.3],
        [0.2, 1.5, -0.5],
        [1.95, 0.65, 0.4],
        [-0.95, -0.85, 0.7],
        [1.25, -1.15, -0.3],
        [0.08, 0.18, 1.25],
        [-1.35, 0.25, -1],
        [0.7, 0.85, -1.15],
      ] as Array<[number, number, number]>,
    [],
  );

  const colors = ["#3157D5", "#172554", "#FFFFFF", "#A21CAF", "#5B4BDB", "#DDF8FF", "#FCEBFA", "#3157D5"];
  const pairs: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [2, 4],
    [1, 5],
    [5, 4],
    [0, 6],
    [6, 5],
    [1, 7],
    [7, 2],
  ];

  return (
    <group>
      {positions.map((position, index) => (
        <mesh key={position.join("-")} position={position}>
          <sphereGeometry args={[index % 2 ? 0.08 : 0.12, 16, 16]} />
          <meshStandardMaterial color={colors[index % colors.length]} roughness={0.28} metalness={0.08} />
        </mesh>
      ))}
      {pairs.map(([a, b]) => (
        <Line
          key={`${a}-${b}`}
          points={[positions[a], positions[b]]}
          color="#3157D5"
          lineWidth={1.4}
          transparent
          opacity={0.7}
        />
      ))}
    </group>
  );
}

function Particles() {
  const points = useMemo(() => {
    const list: Array<[number, number, number, string]> = [];
    const colors = ["#FFFFFF", "#3157D5", "#FCEBFA", "#DDF8FF", "#E8E0FF", "#A21CAF"];
    for (let i = 0; i < 32; i += 1) {
      list.push([
        (Math.random() - 0.5) * 6.8,
        (Math.random() - 0.5) * 4.8,
        (Math.random() - 0.5) * 3.6,
        colors[i % colors.length],
      ]);
    }
    return list;
  }, []);

  return (
    <group>
      {points.map((item) => (
        <mesh key={item.join(":")} position={[item[0], item[1], item[2]]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color={item[3]} transparent opacity={0.84} />
        </mesh>
      ))}
    </group>
  );
}

function Rig() {
  const group = useRef<Group>(null);
  const crystal = useRef<Mesh>(null);
  const inner = useRef<Mesh>(null);
  const ring = useRef<Mesh>(null);
  const ringB = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) {
      const x = state.pointer.x * 0.46;
      const y = state.pointer.y * 0.24;
      group.current.rotation.y += (x - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-y - group.current.rotation.x) * 0.05;
    }
    if (crystal.current) {
      crystal.current.rotation.y += delta * 0.22;
      crystal.current.rotation.x += delta * 0.06;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.16;
    }
    if (ring.current) {
      ring.current.rotation.z += delta * 0.3;
      ring.current.rotation.y += delta * 0.08;
    }
    if (ringB.current) {
      ringB.current.rotation.x += delta * 0.18;
      ringB.current.rotation.z -= delta * 0.12;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.05} rotationIntensity={0.32} floatIntensity={0.5}>
        <mesh ref={crystal} position={[0.04, 0.1, 0]}>
          <icosahedronGeometry args={[1.62, 0]} />
          <meshStandardMaterial color="#3157D5" transparent opacity={0.5} roughness={0.1} metalness={0.18} />
        </mesh>
        <mesh ref={inner} position={[0.04, 0.1, 0]}>
          <icosahedronGeometry args={[0.92, 0]} />
          <meshStandardMaterial color="#172554" wireframe transparent opacity={0.55} />
        </mesh>
      </Float>
      <mesh ref={ring} position={[0.04, 0.1, 0]} rotation={[1.2, 0.2, 0]}>
        <torusGeometry args={[1.92, 0.018, 8, 72]} />
        <meshStandardMaterial color="#FFFFFF" transparent opacity={0.75} />
      </mesh>
      <mesh ref={ringB} position={[0.04, 0.1, 0]} rotation={[0.3, 1.1, 0.4]}>
        <torusGeometry args={[1.58, 0.014, 8, 64]} />
        <meshStandardMaterial color="#A21CAF" transparent opacity={0.55} />
      </mesh>
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh position={[-1.95, -0.2, -0.45]} rotation={[0.4, 0.2, 0.1]}>
          <octahedronGeometry args={[0.58, 0]} />
          <meshStandardMaterial color="#172554" wireframe transparent opacity={0.74} />
        </mesh>
      </Float>
      <Float speed={1.25} rotationIntensity={0.28} floatIntensity={0.5}>
        <mesh position={[1.85, 1.05, -0.25]} rotation={[0.8, 0.4, 0]}>
          <torusGeometry args={[0.38, 0.045, 12, 32]} />
          <meshStandardMaterial color="#A21CAF" roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={0.95} rotationIntensity={0.18} floatIntensity={0.35}>
        <mesh position={[-1.45, 1.18, 0.45]} rotation={[0.3, 0.6, 0.2]}>
          <dodecahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial color="#E8E0FF" transparent opacity={0.8} roughness={0.16} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.22} floatIntensity={0.4}>
        <mesh position={[1.55, -1.05, 0.5]} rotation={[0.4, 0.3, 0.1]}>
          <tetrahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial color="#FCEBFA" transparent opacity={0.82} roughness={0.16} />
        </mesh>
      </Float>
      <mesh position={[-0.15, -1.35, -0.55]} rotation={[0.9, 0.2, 0.4]}>
        <boxGeometry args={[1.75, 1.15, 0.04]} />
        <meshStandardMaterial color="#FFFFFF" transparent opacity={0.32} roughness={0.1} />
      </mesh>
      <mesh position={[1.05, 0.45, -1.15]} rotation={[-0.4, 0.8, 0.2]}>
        <boxGeometry args={[1.4, 0.95, 0.04]} />
        <meshStandardMaterial color="#DDF8FF" transparent opacity={0.38} roughness={0.1} />
      </mesh>
      <ConnectedNodes />
      <Particles />
    </group>
  );
}

export function HeroCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="hero-scene">
      <Canvas
        dpr={[1, 1.6]}
        frameloop={active ? "always" : "never"}
        camera={{ position: [0, 0.08, 4.35], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={1.08} color="#ffffff" />
        <directionalLight position={[5, 6, 8]} intensity={1.4} color="#ffffff" />
        <pointLight position={[-5, -2, 4]} intensity={0.6} color="#3157D5" />
        <pointLight position={[4, 3, 2]} intensity={0.5} color="#FCEBFA" />
        <pointLight position={[0, -3, 3]} intensity={0.38} color="#DDF8FF" />
        <Rig />
      </Canvas>
    </div>
  );
}
