import React, { useRef } from "react";
import Link from "next/link";
import Content from "../../data/sliders/hero-slideshow.json";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";

const DNAHelix = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const numPairs = 16; // 3 full rounds (36 * PI/6 = 6PI)
  const radius = 0.8;
  const height = 2.5;
  const yStep = height / numPairs;
  const angleStep = Math.PI / 6;

  const pairs = Array.from({ length: numPairs }).map((_, i) => {
    const y = -height / 2 + i * yStep;
    const angle = i * angleStep;
    const x1 = Math.cos(angle) * radius;
    const z1 = Math.sin(angle) * radius;
    const x2 = Math.cos(angle + Math.PI) * radius;
    const z2 = Math.sin(angle + Math.PI) * radius;

    return (
      <group key={i}>
        {/* Backbone Spheres */}
        <mesh position={[x1, y, z1]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#3A6D8C" emissive="#3A6D8C" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[x2, y, z2]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#6A9AB0" emissive="#6A9AB0" emissiveIntensity={0.8} />
        </mesh>
        {/* Base Pair Connecting Cylinder */}
        <mesh position={[0, y, 0]} rotation={[0, -angle, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, radius * 2]} />
          <meshStandardMaterial color="#EAD8B1" transparent opacity={0.6} />
        </mesh>
      </group>
    );
  });

  return (
    <group ref={groupRef} rotation={[0.4, 0, 0]}>
      {pairs}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#6A9AB0" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#EAD8B1" />

      <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <DNAHelix />
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    </>
  );
};

const CustomHero3D = () => {
  return (
    <div className="mil-banner mil-top-space-0" style={{ position: 'relative', height: '100vh', minHeight: '800px', background: '#001F3F' }}>

      {/* 3D Canvas Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      <div className="mil-overlay" />
      <div className="mil-banner-content" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none', height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="mil-suptitle mil-mb-60" style={{ color: '#EAD8B1' }}>
                  <span className="mil-light">{Content.subtitle.first}</span>{" "}
                  <span className="mil-accent" style={{ color: '#6A9AB0' }}>{Content.subtitle.second}</span>
                </span>
                <h1 className="mil-mb-60" style={{ color: 'white' }}>
                  <span dangerouslySetInnerHTML={{ __html: Content.title.first }} className="mil-uppercase mil-light" />
                  <span className="mil-font-3 mil-accent" style={{ color: '#3A6D8C' }}>{Content.title.second}</span>
                </h1>
                <div className="mil-flex-hori-center">
                  <div style={{ pointerEvents: 'auto' }}>
                    <Link
                      href={Content.button.link}
                      className="mil-button mil-border mil-light"
                      style={{ borderColor: '#EAD8B1', color: '#EAD8B1' }}
                    >
                      <span>{Content.button.label}</span>
                    </Link>
                  </div>
                  <p className="mil-button-descr mil-light-soft" style={{ color: 'rgba(234, 216, 177, 0.8)' }}>
                    {Content.description}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-xl-4">
              <div className="mil-illustration-1" style={{ pointerEvents: 'auto' }}>
                {Content.items.map((item, key) => (
                  <motion.div
                    className={`mil-item mil-item-${key + 1}`}
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + (key * 0.2) }}
                  >
                    <div className="mil-plus" style={{ background: 'rgba(58, 109, 140, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(106, 154, 176, 0.3)' }}>
                      <div className="mil-hover-window" style={{ background: '#001F3F', border: '1px solid rgba(106, 154, 176, 0.5)' }}>
                        <div className="mil-window-content">
                          <h5 className="mil-dark mil-mb-15" style={{ color: 'white' }}>{item.title}</h5>
                          <div className="mil-divider mil-divider-left mil-mb-15" style={{ background: '#6A9AB0' }} />
                          <p className="mil-text-sm" style={{ color: '#EAD8B1' }}>
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div className="mil-item-hover">
                        <div className="mil-plus-icon" style={{ color: '#EAD8B1' }}>+</div>
                        <h6 className="mil-light" style={{ color: 'white' }}>{item.label}</h6>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHero3D;
