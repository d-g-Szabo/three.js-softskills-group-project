"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Html, useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Earth(props) {
  const earthRef = useRef();
  useFrame(({ clock }) => {
    earthRef.current.position.x = Math.sin(clock.getElapsedTime() * 1) * 7;
    earthRef.current.position.z = Math.cos(clock.getElapsedTime() * 1) * 7;
    earthRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={earthRef} recieveShadow={true} castShadow>
      <sphereGeometry />
      <meshPhysicalMaterial color={"blue"} ior={2.3} />
      <meshStandardMaterial map={props.map} />
      <Html occlude position={[0, 2, 0]}>
        Earth
      </Html>
    </mesh>
  );
}
