"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Venus(props) {
  const venusRef = useRef();
  useFrame(({ clock }) => {
    venusRef.current.position.x = Math.sin(clock.getElapsedTime() / 0.615) * 4;
    venusRef.current.position.z = Math.cos(clock.getElapsedTime() / 0.615) * 4;
    venusRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={venusRef} recieveShadow={true} castShadow>
      <sphereGeometry args={[0.949, 30, 10]} />
      <meshPhysicalMaterial color={"blue"} />
      <meshStandardMaterial map={props.map} />
    </mesh>
  );
}
