"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture, Html } from "@react-three/drei";
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
      <meshPhysicalMaterial color={"blue"} ior={2.3} />
      <meshStandardMaterial map={props.map} />
      <Html occlude position={[0, 2.5, 0]}>
        Neptune
      </Html>
    </mesh>
  );
}
