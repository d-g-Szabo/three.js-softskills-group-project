"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture, Html } from "@react-three/drei";
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
      <meshPhysicalMaterial color={"red"} ior={2.3} />
      <meshStandardMaterial map={props.map} />
      <Html occlude position={[0, 1, 0]}>
        Mars
      </Html>
    </mesh>
  );
}
