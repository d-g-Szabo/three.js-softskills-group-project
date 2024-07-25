"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Html, useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Earth(props) {
  const earthRef = useRef();

  // Scale factor
  const scaleFactor = 38; // 1 AU (Astronomical Units) is 20

  useFrame(({ clock }) => {
    earthRef.current.position.x =
      Math.sin(clock.getElapsedTime() / 10) * (scaleFactor * 1);
    earthRef.current.position.z =
      Math.cos(clock.getElapsedTime() / 10) * (scaleFactor * 1);
    earthRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={earthRef} recieveShadow={true} castShadow receiveShadow>
      <sphereGeometry args={[3, 30, 10]} />
      <meshPhysicalMaterial color={"blue"} ior={2.3} />
      <meshStandardMaterial
        map={props.map}
        attach="material"
        color="planetColor"
        roughness={1}
        metalness={0}
      />
      <Html occlude position={[0, 4, 0]}>
        Earth
      </Html>
    </mesh>
  );
}
