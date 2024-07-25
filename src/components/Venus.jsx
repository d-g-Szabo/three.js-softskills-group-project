"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture, Html } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Venus(props) {
  const venusRef = useRef();

  // Scale factor
  const scaleFactor = 38; // 1 AU (Astronomical Units) is 20

  useFrame(({ clock }) => {
    venusRef.current.position.x =
      Math.sin(clock.getElapsedTime() / 0.715) * (scaleFactor * 1.22);
    venusRef.current.position.z =
      Math.cos(clock.getElapsedTime() / 0.715) * (scaleFactor * 1.22);
    venusRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={venusRef} recieveShadow={true} castShadow receiveShadow>
      <sphereGeometry args={[1.5, 30, 10]} />
      <meshPhysicalMaterial color={"blue"} ior={2.3} />
      <meshStandardMaterial map={props.map} />
      <Html occlude position={[0, 2, 0]}>
        Venus
      </Html>
    </mesh>
  );
}
