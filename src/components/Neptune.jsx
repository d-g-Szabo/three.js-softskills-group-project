"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Uranus(props) {
  const uranusRef = useRef();
  useFrame(({ clock }) => {
    uranusRef.current.position.x =
      Math.sin(clock.getElapsedTime() / 163.7) * 43;
    uranusRef.current.position.z =
      Math.cos(clock.getElapsedTime() / 163.7) * 43;
    uranusRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={uranusRef} recieveShadow={true} castShadow>
      <sphereGeometry args={[1.9, 30, 10]} />
      {/* <sphereGeometry args={[4.01, 30, 10]} /> */}
      <meshPhysicalMaterial color={"blue"} />
      <meshStandardMaterial map={props.map} />
    </mesh>
  );
}
