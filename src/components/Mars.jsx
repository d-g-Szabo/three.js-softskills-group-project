"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture, Html } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Mars(props) {
  const marsRef = useRef();

  // Scale factor
  const scaleFactor = 38; // 1 AU (Astronomical Units) is 20

  useFrame(({ clock }) => {
    marsRef.current.position.x =
      Math.sin(clock.getElapsedTime() / 1.88) * (scaleFactor * 1.52);
    marsRef.current.position.z =
      Math.cos(clock.getElapsedTime() / 1.88) * (scaleFactor * 1.52);
    marsRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={marsRef} recieveShadow={true} castShadow receiveShadow>
      <sphereGeometry args={[3, 30, 10]} />
      <meshPhysicalMaterial color={"red"} ior={2.3} />
      <meshStandardMaterial map={props.map} />
      <Html occlude position={[0, 4, 0]}>
        Mars
      </Html>
    </mesh>
  );
}
