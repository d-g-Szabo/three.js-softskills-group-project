"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Moon(props) {
  const moonRef = useRef();
  useFrame(({ clock }) => {
    moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 1) * 7;
    moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 1) * 7;
    moonRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={moonRef} recieveShadow={true} castShadow>
      <sphereGeometry />
      <meshPhysicalMaterial color={"blue"} />
      <meshStandardMaterial map={props.map} />
    </mesh>
  );
}
