import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const MedicalCapsule = ({ scrollY }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.3;
            groupRef.current.rotation.y += delta * 0.5;

            // Gentle bob only — position is fixed
            groupRef.current.position.x = 2.5;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
            groupRef.current.position.z = -1;
        }
    });

    return (
        <group ref={groupRef} scale={1.6}>
            {/* Top half - Blue */}
            <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[0.7, 0.7, 1, 32]} />
                <meshStandardMaterial color="#3A6D8C" roughness={0.1} metalness={0.6} />
            </mesh>
            <mesh position={[0, 1, 0]}>
                <sphereGeometry args={[0.7, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#3A6D8C" roughness={0.1} metalness={0.6} />
            </mesh>

            {/* Bottom half - Beige/Gold */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[0.7, 0.7, 1, 32]} />
                <meshStandardMaterial color="#EAD8B1" roughness={0.2} metalness={0.3} />
            </mesh>
            <mesh position={[0, -1, 0]} rotation={[Math.PI, 0, 0]}>
                <sphereGeometry args={[0.7, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#EAD8B1" roughness={0.2} metalness={0.3} />
            </mesh>

            {/* Center connecting band */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.72, 0.05, 16, 64]} />
                <meshStandardMaterial color="#6A9AB0" emissive="#6A9AB0" emissiveIntensity={1.5} />
            </mesh>

            {/* Orbiting molecular dots */}
            <Float speed={4} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[2, 1, 0]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color="#6A9AB0" emissive="#6A9AB0" emissiveIntensity={2} />
                </mesh>
            </Float>
            <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
                <mesh position={[-2, -1, 1]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="#EAD8B1" emissive="#EAD8B1" emissiveIntensity={2} />
                </mesh>
            </Float>
        </group>
    );
};

const Scene = ({ scrollY }) => {
    return (
        <>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#EAD8B1" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#6A9AB0" />

            {/* Universe starfield — same as hero section */}
            <Stars radius={120} depth={60} count={4000} factor={3} saturation={0} fade speed={1} />

            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <MedicalCapsule scrollY={scrollY} />
            </Float>

            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </>
    );
};

const GlobalSOP3DScene = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        setScrollY(window.scrollY);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1, // Behind everything
            pointerEvents: 'none', // Don't block clicks to DOM underneath
            background: '#001F3F'
        }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <Scene scrollY={scrollY} />
            </Canvas>
        </div>
    );
};

export default GlobalSOP3DScene;
