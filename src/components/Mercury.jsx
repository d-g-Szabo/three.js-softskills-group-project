"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture, Html } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Mercury(props) {
  const mercuryRef = useRef();

  // Scale factor
  const scaleFactor = 38; // 1 AU (Astronomical Units) is 20

  useFrame(({ clock }) => {
    mercuryRef.current.position.x =
      Math.sin(clock.getElapsedTime() / 0.241) * (scaleFactor * 0.39);
    mercuryRef.current.position.z =
      Math.cos(clock.getElapsedTime() / 0.241) * (scaleFactor * 0.39);
    mercuryRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mercuryRef} recieveShadow={true} castShadow receiveShadow>
      <sphereGeometry args={[1, 30, 10]} />
      <meshPhysicalMaterial color={"blue"} ior={1} />
      <meshStandardMaterial map={props.map} />
      <Html occlude position={[0, 2, 0]}>
        Mercury
      </Html>
    </mesh>
  );
}
