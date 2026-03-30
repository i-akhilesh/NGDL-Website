import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  OrbitControls,
  Stars,
  Float,
  PerspectiveCamera,
  Segments,
  Segment
} from "@react-three/drei";

const DataPacket = ({ start, end, speed, delay }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = (state.clock.elapsedTime * speed + delay) % 1;
    if (ref.current) {
      ref.current.position.lerpVectors(start, end, t);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshStandardMaterial
        color="#EAD8B1"
        emissive="#EAD8B1"
        emissiveIntensity={4}
      />
    </mesh>
  );
};

const TechNetwork = () => {
  const groupRef = useRef();

  // Generate 80 nodes on a sphere
  const nodes = useMemo(() => {
    const points = [];
    for (let i = 0; i < 80; i++) {
      const phi = Math.acos(-1 + (2 * i) / 80);
      const theta = Math.sqrt(80 * Math.PI) * phi;
      points.push(new THREE.Vector3(
        2.5 * Math.cos(theta) * Math.sin(phi),
        2.5 * Math.sin(theta) * Math.sin(phi),
        2.5 * Math.cos(phi)
      ));
    }
    return points;
  }, []);

  // Generate edges: random connections between close nodes
  const edges = useMemo(() => {
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);
        if (distance < 1.2 && Math.random() > 0.6) {
          connections.push([nodes[i], nodes[j]]);
        }
      }
    }
    return connections;
  }, [nodes]);

  // Generate data flow packets for a subset of edges
  const packets = useMemo(() => {
    return edges.slice(0, 25).map(([start, end], i) => ({
      start,
      end,
      speed: 0.2 + Math.random() * 0.4,
      delay: Math.random() * 5
    }));
  }, [edges]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Node Points */}
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial
            color="#EAD8B1"
            emissive="#EAD8B1"
            emissiveIntensity={2}
          />
        </mesh>
      ))}

      {/* Network Edges (Connections) */}
      <Segments limit={edges.length} lineWidth={0.5}>
        {edges.map(([start, end], i) => (
          <Segment
            key={`edge-${i}`}
            start={start}
            end={end}
            color="#6A9AB0"
          />
        ))}
      </Segments>

      {/* Dynamic Data Packets */}
      {packets.map((p, i) => (
        <DataPacket key={`packet-${i}`} {...p} />
      ))}

      {/* Internal Core Atmosphere */}
      <mesh>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshStandardMaterial
          color="#3A6D8C"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const Scene = ({ showNetwork = true }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#6A9AB0" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#3A6D8C" />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1.5}
      />

      {showNetwork && (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
          <TechNetwork />
        </Float>
      )}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const TechNetworkBackground = ({ showNetwork = true }) => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <Canvas>
            <Scene showNetwork={showNetwork} />
        </Canvas>
    </div>
  );
};

export default TechNetworkBackground;
