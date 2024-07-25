"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture, Html } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Saturn(props) {
  const saturnRef = useRef();

  // Scale factor
  const scaleFactor = 38; // 1 AU (Astronomical Units) is 20

  useFrame(({ clock }) => {
    saturnRef.current.position.x =
      Math.sin(clock.getElapsedTime() / 29.4) * (scaleFactor * 9.58);
    saturnRef.current.position.z =
      Math.cos(clock.getElapsedTime() / 29.4) * (scaleFactor * 9.58);
    saturnRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={saturnRef} recieveShadow={true} castShadow receiveShadow>
      <sphereGeometry args={[14, 30, 10]} />
      {/* <sphereGeometry args={[4.01, 30, 10]} /> */}
      <meshPhysicalMaterial color={"blue"} ior={2.3} />
      <meshStandardMaterial map={props.map} />
      <Html occlude position={[0, 15, 0]}>
        Saturn
      </Html>
    </mesh>
  );
}
