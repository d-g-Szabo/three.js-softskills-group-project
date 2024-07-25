"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture, Html } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Uranus(props) {
  const uranusRef = useRef();

  // Scale factor
  const scaleFactor = 38; // 1 AU (Astronomical Units) is 20

  useFrame(({ clock }) => {
    uranusRef.current.position.x =
      Math.sin(clock.getElapsedTime() / 163.7) * (scaleFactor * 19.07);
    uranusRef.current.position.z =
      Math.cos(clock.getElapsedTime() / 163.7) * (scaleFactor * 19.07);
    uranusRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={uranusRef} recieveShadow={true} castShadow receiveShadow>
      <sphereGeometry args={[10, 30, 10]} />
      {/* <sphereGeometry args={[4.01, 30, 10]} /> */}
      <meshPhysicalMaterial color={"blue"} ior={2.3} />
      <meshStandardMaterial map={props.map} />
      <Html occlude position={[0, 11, 0]}>
        Neptune
      </Html>
    </mesh>
  );
}
