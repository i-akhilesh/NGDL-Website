import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, PerspectiveCamera, OrbitControls } from "@react-three/drei";

const StarryScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1.5}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const StarryBackground = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <Canvas>
            <StarryScene />
        </Canvas>
    </div>
  );
};

export default StarryBackground;
