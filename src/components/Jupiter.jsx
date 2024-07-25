"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture, Html } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Jupiter(props) {
  const jupiterRef = useRef();

  // Scale factor
  const scaleFactor = 38; // 1 AU (Astronomical Units) is 20

  useFrame(({ clock }) => {
    jupiterRef.current.position.x =
      Math.sin(clock.getElapsedTime() / 11.9) * (scaleFactor * 5.2);
    jupiterRef.current.position.z =
      Math.cos(clock.getElapsedTime() / 11.9) * (scaleFactor * 5.2);
    jupiterRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={jupiterRef} recieveShadow={true} castShadow receiveShadow>
      <sphereGeometry args={[7, 30, 10]} />
      {/* <sphereGeometry args={[11.21, 30, 10]} /> */}
      <meshPhysicalMaterial color={"red"} ior={2.3} />
      <meshStandardMaterial map={props.map} />
      <Html occlude position={[0, 8, 0]}>
        Jupiter
      </Html>
    </mesh>
  );
}
