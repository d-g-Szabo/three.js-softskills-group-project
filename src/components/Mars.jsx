"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Mars(props) {
  const marsRef = useRef();
  useFrame(({ clock }) => {
    marsRef.current.position.x = Math.sin(clock.getElapsedTime() / 1.88) * 10;
    marsRef.current.position.z = Math.cos(clock.getElapsedTime() / 1.88) * 10;
    marsRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={marsRef} recieveShadow={true} castShadow>
      <sphereGeometry args={[0.532, 30, 10]} />
      <meshPhysicalMaterial color={"red"} />
      <meshStandardMaterial map={props.map} />
    </mesh>
  );
}
