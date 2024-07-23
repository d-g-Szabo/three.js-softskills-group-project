"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Jupiter(props) {
  const jupiterRef = useRef();
  useFrame(({ clock }) => {
    jupiterRef.current.position.x =
      Math.sin(clock.getElapsedTime() / 11.9) * 20;
    jupiterRef.current.position.z =
      Math.cos(clock.getElapsedTime() / 11.9) * 20;
    jupiterRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={jupiterRef} recieveShadow={true} castShadow>
      <sphereGeometry args={[5, 30, 10]} />
      {/* <sphereGeometry args={[11.21, 30, 10]} /> */}
      <meshPhysicalMaterial color={"red"} ior={2.3} />
      <meshStandardMaterial map={props.map} />
    </mesh>
  );
}
