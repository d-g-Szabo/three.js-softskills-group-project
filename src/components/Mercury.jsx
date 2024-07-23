"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Mercury(props) {
  const mercuryRef = useRef();
  useFrame(({ clock }) => {
    mercuryRef.current.position.x =
      Math.sin(clock.getElapsedTime() / 0.241) * 2;
    mercuryRef.current.position.z =
      Math.cos(clock.getElapsedTime() / 0.241) * 2;
    mercuryRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mercuryRef} recieveShadow={true} castShadow>
      <sphereGeometry args={[0.38, 30, 10]} />
      <meshPhysicalMaterial color={"blue"} />
      <meshStandardMaterial map={props.map} />
    </mesh>
  );
}
